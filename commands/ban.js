const { Command } = require('yuuko');

// ban command
// usage: !ban @ <reason> delete
// bans specified user and DM's them

module.exports = new Command(['ban', 'remove', 'b'], (message, args) => {
    user = message.mentions[0];
    d = false;
    for (let i = 0; i < args.length; i++) {
        if (args[i] === "-del") {
            d = true;
        }
    }
    user.ban(d ? 7 : 0, args[1])
})