const fs = require('fs');

global.window = {};
global.document = { getElementById: () => null };

// Load chatbot-data.js by executing in global context
const dataCode = fs.readFileSync('chatbot-data.js', 'utf8');
const vm = require('vm');
vm.runInThisContext(dataCode);

const scriptCode = fs.readFileSync('script.js', 'utf8');
vm.runInThisContext(scriptCode.slice(scriptCode.indexOf('function levenshteinDistance'), scriptCode.indexOf('function handleUserSubmit')));

const queries = [
  'who is BCA HOD',
  'who is Commerce HOD',
  'Dr. Malini',
  'who is Dr. Sheela',
  'Dr. Kannan',
  'download prospectus',
  'how to reach campus',
  'where is the college',
  'who is placement officer',
  'Mrs. Sumana'
];

queries.forEach(q => {
  const res = resolveUserQuery(q);
  console.log(`\n===================\nQUERY: "${q}"`);
  console.log('TYPE:', res.type);
  if (res.type === 'flow') {
    console.log('FLOW ID:', res.flowId);
    console.log('FLOW MESSAGE SNIPPET:', CHAT_FLOWS[res.flowId]?.message?.slice(0, 150).replace(/\n/g, ' '));
  } else {
    console.log('MESSAGE SNIPPET:', res.message?.slice(0, 200).replace(/\n/g, ' '));
  }
});
