module.exports = (bot) => {
bot.status({
  text: "Hi I`m back!",
  type: "LISTENING",
  status: "Online",
  time: 30
})

bot.status({
  text: "Chatting With Someone",
  type: "WATCHING",
  status: "online",
  time: 30
})

bot.status({
  text: "KuroNekos Studio",
  type: "STREAMING",
  url: "https://www.twitch.tv/shikochiko",
  time: 60
})
} 