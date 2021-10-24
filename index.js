const {Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

(async () => {
    client.login(process.env.token);

})

const prefix = "?";

Client.on('ready', () => {
    console.log(`Logged in!`); 
})

Client.on('message', async message => {
    if(message.content.startsWith(`{prefix}test`)){
        message.channel.send("You gay");
    }
})