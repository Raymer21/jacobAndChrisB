const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "?";

client.on('ready', () => {
    console.log(`Logged in!`);
})

client.on('message', async message => {
    if(message.content.startsWith(`{prefix}test`)){
        message.channel.send("You gay");
    }
})



client.login(process.env.token);