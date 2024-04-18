const shell = require('shelljs');
const fs = require('fs');

// Check if .env file exists
if (!fs.existsSync('.env')) {
  // Copy the content of .env.example to .env
  shell.cp('.env.example', '.env');
}

// Execute npm run start
shell.exec('npm run deploy');