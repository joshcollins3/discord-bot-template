const { Client, Intents, Message } = require('discord.js');
const auth = require('./auth.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });

client.login(auth.token);

client.once('ready', async () => {
    console.log('Logged in as ' + client.user.tag);
    channel = await client.channels.fetch('') // Insert channel ID
});


client.on("messageCreate", async (msg) => {
    let content = msg.content;

    if (content.includes('')) { // Insert command
        msg.reply('') //Insert response
    }

    if (content.startsWith('')) { // Command to add role
        let mentionedUser = msg.mentions.members.first();
        let newRole = msg.guild.roles.cache.find(role => role.name === ''); // Insert role name
        console.log(mentionedUser);
        if (newRole) {
            mentionedUser.roles.add(newRole);
        }
        msg.channel.send(`${mentionedUser.displayName} roles added.`);
    }
    else if (content.toLowerCase().includes('')) { // Command to remove role
        let mentionedUser = msg.mentions.members.first();
        let oldRole = msg.guild.roles.cache.find(role => role.name === ''); // Insert role name
        console.log(mentionedUser)
        if (oldRole) {
            mentionedUser.roles.remove(oldRole)
        }
        msg.channel.send(`${mentionedUser.displayName} roles removed.`);
    }
})