const { Client } = require('yuuko');
const path = require("path");
const { brotliCompressSync } = require('zlib');
require('dotenv').config();

let prefix = "!";

const bot = new Client({
    token: process.env.TOKEN,
    prefix: process.env.PREFIX,
    ignoreBots: true,
});

bot.editStatus('dnd');

bot.on('error', (err) => {
    console.log(err);
});

bot.extendContext({
    prefix: prefix,
});

bot
    .addDir(path.join(__dirname, 'commands'))
    .addDir(path.join(__dirname, 'events'))
    .connect();

const csv = require('csv-parser');
const fs = require('fs');
fs.createReadStream('infra.csv')
    .pipe(csv())
    .on('data', (row) => {
        console.log(row);
    })
    .on('end', () => {
        console.log("successfully read infra.csv");
    });
