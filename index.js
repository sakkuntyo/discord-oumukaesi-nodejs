const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.author.bot) return;
  console.log(msg);
  msg.channel.send(msg.content)
});

client.login('<token>');
