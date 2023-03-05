module.exports = {
 name: "func",
 usage: "func <func-name>",
 code: `
$title[1;$noMentionMessage;https://akarui.leref.ga/v/5/functions/usd$replaceText[$toLowerCase[$noMentionMessage];$;;-1]]
$description[1;
**__Func__**:
\`$jsonRequest[https://api.leref.ga/functions/$noMentionMessage;data[$get[index]].name]\`

**__Description__**:
\`\`\`
$jsonRequest[https://api.leref.ga/functions/$noMentionMessage;data[$get[index]].desc]
\`\`\`

**__Usage__**:
\`\`\`js
$jsonRequest[https://api.leref.ga/functions/$noMentionMessage;data[$get[index]].usage]
\`\`\`
]
$color[1;BLUE]
$thumbnail[1;https://cdn.discordapp.com/attachments/951187568731488266/970054814065123408/aoijs.png]
$addTimestamp[1]
$let[index;
$jsonRequest[https://api.leref.ga/functions/$noMentionMessage;data.findIndex((x) => x.name === "$noMentionMessage")]
]
$suppressErrors[The specified function was not found!]
$onlyIf[$message!=;Enter a function!]
`
};