const { EventListener } = require('yuuko');

module.exports = new EventListener('ready', (context) => {
    console.log("Pixl // Logged In")
});
