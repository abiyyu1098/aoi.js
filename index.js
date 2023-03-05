require('dotenv').config();
const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env["Token"],
prefix: ["$getServerVar[prefix]","<@!$clientID>","<@$clientID>","S!"],
intents: ["GUILDS", "GUILD_MESSAGES"],
mobilePlatform: true
})

//Events
bot.onMessage(); 

//ehehe biar rapi
require('./handler/status')(bot)
require('./handler/variables')(bot)
require('./handler/botready')(bot)

const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./commands/') 
loader.setColors( loader.themes.default )