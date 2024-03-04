const AWS = require('aws-sdk');
const fs = require('fs');

// Configure AWS SDK
AWS.config.update({region: 'us-east-1'});

// Create a new Lex Model Building Service client
const lexModels = new AWS.LexModelBuildingService();

// Read bot configuration from bot.json
const botConfig = JSON.parse(fs.readFileSync('./src/bot.json', 'utf8'));

// Deploy bot
lexModels.putBot(botConfig, (err, data) => {
  if (err) {
    console.error('Failed to deploy bot:', err);
  } else {
    console.log('Bot deployed successfully:', data);
  }
});