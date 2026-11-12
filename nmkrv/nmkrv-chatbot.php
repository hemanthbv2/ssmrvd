<?php
/**
 * Plugin Name: NMKRV College (Autonomous) Chatbot
 * Plugin URI: https://nmkrv.edu.in/
 * Description: Official conversational AI admissions and student support chatbot for NMKRV College (Autonomous), Jayanagar 3rd Block, Bengaluru.
 * Version: 1.0.0
 * Author: Department of Media, Communications & IT Cell (NMKRV / RSST)
 * Author URI: https://nmkrv.edu.in/
 * Text Domain: nmkrv-chatbot
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class NMKRV_Chatbot_Plugin {

    private static $instance = null;

    public static function get_instance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function __construct() {
        add_action('wp_enqueue_scripts', array($this, 'enqueue_frontend_assets'));
        add_action('wp_footer', array($this, 'render_chatbot_container'));
        add_shortcode('nmkrv_chatbot', array($this, 'chatbot_shortcode'));

        add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('admin_init', array($this, 'register_settings'));

        add_action('rest_api_init', array($this, 'register_rest_routes'));
    }

    /**
     * Enqueue CSS and JS
     */
    public function enqueue_frontend_assets() {
        $enabled = get_option('nmkrv_chatbot_enabled', 'yes');
        if ($enabled !== 'yes') {
            return;
        }

        $plugin_url = plugin_dir_url(__FILE__);

        wp_enqueue_style(
            'nmkrv-chatbot-style',
            $plugin_url . 'style.css',
            array(),
            '1.0.0'
        );

        wp_enqueue_script(
            'nmkrv-chatbot-telemetry',
            $plugin_url . 'telemetry.js',
            array(),
            '1.0.0',
            true
        );

        wp_enqueue_script(
            'nmkrv-chatbot-data',
            $plugin_url . 'chatbot-data.js',
            array('nmkrv-chatbot-telemetry'),
            '1.0.0',
            true
        );

        wp_enqueue_script(
            'nmkrv-chatbot-script',
            $plugin_url . 'script.js',
            array('nmkrv-chatbot-data'),
            '1.0.0',
            true
        );

        $logo_url = get_option('nmkrv_chatbot_logo_url', $plugin_url . 'assets/logo.png');
        $rv_logo_url = get_option('nmkrv_chatbot_rv_logo_url', $plugin_url . 'assets/rv-logo.png');
        $vercel_url = get_option('nmkrv_chatbot_vercel_url', '');

        wp_localize_script('nmkrv-chatbot-script', 'ssmrvChatbotSettings', array(
            'logoUrl'     => esc_url($logo_url),
            'rvLogoUrl'   => esc_url($rv_logo_url),
            'wpRestUrl'   => esc_url_raw(rest_url('nmkrv-chatbot/v1')),
            'vercelUrl'   => esc_url_raw($vercel_url),
            'instituteId' => 'NMKRV'
        ));
    }

    /**
     * Render the container in wp_footer if enabled
     */
    public function render_chatbot_container() {
        $enabled = get_option('nmkrv_chatbot_enabled', 'yes');
        if ($enabled === 'yes') {
            echo '<div id="ssmrv-chatbot-root"></div>';
        }
    }

    /**
     * Shortcode [nmkrv_chatbot]
     */
    public function chatbot_shortcode($atts) {
        return '<div id="ssmrv-chatbot-root"></div>';
    }

    /**
     * Admin Menu
     */
    public function add_admin_menu() {
        add_options_page(
            'NMKRV Chatbot Settings',
            'NMKRV Chatbot',
            'manage_options',
            'nmkrv-chatbot-settings',
            array($this, 'render_admin_page')
        );
    }

    public function register_settings() {
        register_setting('nmkrv_chatbot_options_group', 'nmkrv_chatbot_enabled');
        register_setting('nmkrv_chatbot_options_group', 'nmkrv_chatbot_logo_url');
        register_setting('nmkrv_chatbot_options_group', 'nmkrv_chatbot_vercel_url');
        register_setting('nmkrv_chatbot_options_group', 'nmkrv_chatbot_sheets_url');
    }

    public function render_admin_page() {
        ?>
        <div class="wrap">
            <h1>NMKRV College (Autonomous) Chatbot — Settings</h1>
            <p>Configure telemetry, backend webhooks, and display settings for the NMKRV College chatbot widget.</p>
            <form method="post" action="options.php">
                <?php settings_fields('nmkrv_chatbot_options_group'); ?>
                <?php do_settings_sections('nmkrv_chatbot_options_group'); ?>
                <table class="form-table">
                    <tr>
                        <th scope="row">Enable Chatbot</th>
                        <td>
                            <label>
                                <input type="checkbox" name="nmkrv_chatbot_enabled" value="yes" <?php checked('yes', get_option('nmkrv_chatbot_enabled', 'yes')); ?> />
                                Show chatbot on all frontend pages
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Custom Logo URL</th>
                        <td>
                            <input type="text" name="nmkrv_chatbot_logo_url" value="<?php echo esc_attr(get_option('nmkrv_chatbot_logo_url', plugin_dir_url(__FILE__) . 'assets/logo.png')); ?>" class="regular-text" />
                            <p class="description">URL to the NMKRV crest or logo PNG.</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Vercel Backend URL (MongoDB)</th>
                        <td>
                            <input type="url" name="nmkrv_chatbot_vercel_url" value="<?php echo esc_attr(get_option('nmkrv_chatbot_vercel_url', '')); ?>" class="regular-text" placeholder="https://your-chatbot-dashboard.vercel.app" />
                            <p class="description">Optional dual-write endpoint for real-time analytics command center.</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Google Sheets Webhook URL</th>
                        <td>
                            <input type="url" name="nmkrv_chatbot_sheets_url" value="<?php echo esc_attr(get_option('nmkrv_chatbot_sheets_url', '')); ?>" class="regular-text" placeholder="https://script.google.com/macros/s/.../exec" />
                            <p class="description">Optional Google Apps Script webhook to append inquiry leads into Google Sheets.</p>
                        </td>
                    </tr>
                </table>
                <?php submit_button(); ?>
            </form>
        </div>
        <?php
    }

    /**
     * REST API Routes
     */
    public function register_rest_routes() {
        register_rest_route('nmkrv-chatbot/v1', '/log', array(
            'methods'             => 'POST',
            'callback'            => array($this, 'handle_telemetry_log'),
            'permission_callback' => '__return_true'
        ));

        register_rest_route('nmkrv-chatbot/v1', '/leads', array(
            'methods'             => 'GET',
            'callback'            => array($this, 'get_leads'),
            'permission_callback' => function () {
                return current_user_can('manage_options');
            }
        ));
    }

    public function handle_telemetry_log($request) {
        $body = $request->get_json_params();
        if (empty($body)) {
            return new WP_REST_Response(array('success' => false, 'message' => 'No payload'), 400);
        }

        $events = isset($body['events']) ? $body['events'] : array($body);
        $existing_leads = get_option('nmkrv_chatbot_captured_leads', array());

        foreach ($events as $event) {
            if (isset($event['eventType']) && $event['eventType'] === 'lead_captured') {
                $existing_leads[] = array(
                    'timestamp' => isset($event['timestamp']) ? sanitize_text_field($event['timestamp']) : current_time('mysql'),
                    'name'      => isset($event['data']['name']) ? sanitize_text_field($event['data']['name']) : '',
                    'phone'     => isset($event['data']['phone']) ? sanitize_text_field($event['data']['phone']) : '',
                    'email'     => isset($event['data']['email']) ? sanitize_email($event['data']['email']) : '',
                    'program'   => isset($event['data']['program']) ? sanitize_text_field($event['data']['program']) : '',
                    'url'       => isset($event['url']) ? esc_url_raw($event['url']) : ''
                );
            }
        }

        // Keep last 1000 leads in WordPress options
        if (count($existing_leads) > 1000) {
            $existing_leads = array_slice($existing_leads, -1000);
        }
        update_option('nmkrv_chatbot_captured_leads', $existing_leads, false);

        return new WP_REST_Response(array('success' => true, 'logged' => count($events)), 200);
    }

    public function get_leads($request) {
        $leads = get_option('nmkrv_chatbot_captured_leads', array());
        return new WP_REST_Response(array('success' => true, 'leads' => $leads), 200);
    }
}

NMKRV_Chatbot_Plugin::get_instance();
