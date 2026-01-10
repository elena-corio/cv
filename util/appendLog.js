/**
 * appendLog.js
 * Simple utility to append prompt/response entries to JSONL log file.
 * 
 * Usage (Node.js):
 *   node scripts/appendLog.js "Your prompt here" "Assistant reply here"
 */

const fs = require('fs');
const path = require('path');

const LOG_FILE = path.join(__dirname, '..', 'logs', 'chat-log.jsonl');
const LOG_DIR = path.dirname(LOG_FILE);

/**
 * Append a single log entry (JSON Line format)
 * @param {string} prompt - User's prompt/question
 * @param {string} response - Assistant's response/reply
 * @param {object} meta - Optional metadata (sessionId, tags, etc.)
 */
function appendLog(prompt, response, meta = {}) {
  // Ensure logs directory exists
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }

  const entry = {
    timestamp: new Date().toISOString(),
    prompt,
    response,
    metadata: meta
  };

  try {
    fs.appendFileSync(LOG_FILE, JSON.stringify(entry) + '\n', 'utf8');
    console.log(`✓ Logged at ${entry.timestamp}`);
  } catch (err) {
    console.error(`✗ Error writing log: ${err.message}`);
    process.exit(1);
  }
}

// CLI usage
if (require.main === module) {
  const [prompt, response] = process.argv.slice(2);
  
  if (!prompt || !response) {
    console.error('Usage: node appendLog.js "<prompt>" "<response>"');
    process.exit(1);
  }

  appendLog(prompt, response, {
    cliCommand: 'appendLog.js',
    timestamp: new Date().toISOString()
  });
}

module.exports = { appendLog };
