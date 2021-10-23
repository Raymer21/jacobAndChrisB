const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('config.json');

const prefix = config.prefix;

client.on('ready', () => {
    console.log(`Logged in!`);
})

client.on('message', async message => {
    if(message.content.startsWith(`{prefix}test`)){
        message.channel.send("You gay");
    }
})



client.login(config.token);