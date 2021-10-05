const { Command } = require('yuuko');

module.exports = new Command('help', (message) => {
    message.channel.createMessage("**__Pixl Help**__ \n \n **Moderation** \n `!ban <user> <reason> <delete>` - bans a user either deleting messages or not deleting messages (example: `!ban @urmom mom disrespect d` would ban user @urmom for mom disrespect and delete their messages on the server \n !mute <user> <reason> <time> - ");
    // todo: finish
})