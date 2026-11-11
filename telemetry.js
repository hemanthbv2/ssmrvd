/**
 * SSMRV Chatbot — Dual-Write Telemetry & Event Dispatcher
 * Sends batched analytics and lead logs to:
 * 1. WordPress REST API (/wp-json/ssmrv-chatbot/v1/log)
 * 2. Vercel Node.js / MongoDB Backend (/api/dashboard/interactions & /api/dashboard/leads)
 */

(function (window) {
  'use strict';

  class SSMRVTelemetry {
    constructor() {
      const settings = window.ssmrvChatbotSettings || {};
      
      this.wpRestUrl = settings.wpRestUrl || '/wp-json/ssmrv-chatbot/v1';
      this.vercelUrl = settings.vercelUrl || '';
      this.batchIntervalMs = settings.batchIntervalMs || 5000;
      this.maxBatchSize = settings.maxBatchSize || 10;
      this.instituteId = settings.instituteId || 'SSMRVD';

      this.sessionId = this._getOrCreateSessionId();
      this.eventQueue = [];
      this.timer = null;

      this._init();
    }

    _init() {
      // Periodic flush
      this.timer = setInterval(() => this.flush(), this.batchIntervalMs);

      // Flush on unload
      window.addEventListener('beforeunload', () => {
        this.flush(true);
      });
    }

    _getOrCreateSessionId() {
      const key = 'ssmrv_session_id';
      let sid = sessionStorage.getItem(key);
      if (!sid) {
        sid = 'ssmrv_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now();
        sessionStorage.setItem(key, sid);
      }
      return sid;
    }

    /**
     * Track user / bot interaction
     */
    trackEvent(eventType, payload = {}) {
      const normalizedTimestamp = new Date().toISOString();
      const event = {
        instituteId: this.instituteId,
        sessionId: this.sessionId,
        eventType,
        // Dual-write key normalization:
        timestamp: normalizedTimestamp,
        createdAt: normalizedTimestamp,
        data: payload,
        leadData: payload,
        url: window.location.href,
        userAgent: navigator.userAgent
      };

      this.eventQueue.push(event);

      if (this.eventQueue.length >= this.maxBatchSize) {
        this.flush();
      }
    }

    /**
     * Track a lead submission
     */
    trackLead(lead) {
      const normalizedTimestamp = new Date().toISOString();
      const leadPayload = {
        instituteId: this.instituteId,
        sessionId: this.sessionId,
        eventType: 'lead_captured',
        timestamp: normalizedTimestamp,
        createdAt: normalizedTimestamp,
        data: lead,
        leadData: lead,
        url: window.location.href
      };

      // Leads flush immediately
      this._dispatchDirect([leadPayload]);
    }

    /**
     * Flush event batch
     */
    flush(useBeacon = false) {
      if (this.eventQueue.length === 0) return;

      const batch = [...this.eventQueue];
      this.eventQueue = [];

      this._dispatchDirect(batch, useBeacon);
    }

    _dispatchDirect(batch, useBeacon = false) {
      const body = JSON.stringify({
        instituteId: this.instituteId,
        events: batch
      });

      // 1. Dispatch to WordPress REST API
      if (this.wpRestUrl) {
        const wpEndpoint = `${this.wpRestUrl}/log`;
        if (useBeacon && navigator.sendBeacon) {
          navigator.sendBeacon(wpEndpoint, body);
        } else {
          fetch(wpEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: body,
            keepalive: true
          }).catch(err => {
            // Silently handle offline/dev mode
            console.debug('[SSMRV Telemetry WP]', err.message);
          });
        }
      }

      // 2. Dispatch to Vercel / MongoDB API if configured
      if (this.vercelUrl) {
        const vercelEndpoint = `${this.vercelUrl.replace(/\/$/, '')}/api/dashboard/interactions`;
        if (useBeacon && navigator.sendBeacon) {
          navigator.sendBeacon(vercelEndpoint, body);
        } else {
          fetch(vercelEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: body,
            keepalive: true
          }).catch(err => {
            console.debug('[SSMRV Telemetry Vercel]', err.message);
          });
        }
      }
    }
  }

  // Export to window
  window.SSMRVTelemetry = SSMRVTelemetry;
})(window);
