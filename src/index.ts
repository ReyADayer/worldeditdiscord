import {Client} from 'discord.js';

const client = new Client();
const DISCORD_TOKEN = process.env.DISCORD_TOKEN

client.on('message', (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content === 'ping') {
    message.reply('Pong!').then(response => {
      console.log(response)
    });
  }
});

client.login(DISCORD_TOKEN).then(response => {
  console.log(response)
});