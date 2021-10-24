const Discord = require('discord.js');
const {Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = "?";

Client.on('ready', () => {
    console.log(`Logged in!`); 
})

Client.on('message', async message => {
    if(message.content.startsWith(`{prefix}test`)){
        message.channel.send("You gay");
    }
})



client.login(process.env.token);