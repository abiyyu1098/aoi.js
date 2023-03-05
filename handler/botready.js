module.exports = (bot) => {
bot.readyCommand({
    channel: "",
    code: `$messageChannelSend[\`\`\`
╭─━━━━━━━━━━━━━━━━━━─╮
  Client: $userTag[$clientID]
  Ping: $ping ms
  Bot Creator: $username[$botOwnerID]#$discriminator[$botOwnerID]
  Commands loaded: $commandsCount
  ╰─━━━━━━━━━━━━━━━━━━─╯\`\`\`;961225777368686644]
    $log[
  ╭─━━━━━━━━━━━━━━━━━━─╮
  Client: $userTag[$clientID]
  Ping: $ping ms
  Bot Creator: $username[$botOwnerID]#$discriminator[$botOwnerID]
  Commands loaded: $commandsCount
  ╰─━━━━━━━━━━━━━━━━━━─╯
  ]`
})
} 