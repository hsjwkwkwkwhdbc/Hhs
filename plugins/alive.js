const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let des = `*HELLO ${pushname}*
*╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ 」*
*│◈ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 -* 69.69MB / 696969MB
*│◈ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 -* 40 minutes, 6 seconds
*╰──────────●●►*
║✧ *Developer :* Ankit Kumar🏓

╚════════════════◊

╔════════════════◊
║ _*Instagram*_ : instagram.com/xnkit69
╚════════════════◊
  
╔════════════════◊
║ _*Telegram*_ : t.me/xnkitkumar
╚════════════════◊

╔════════════════◊
║ _*Github*_ : github.com/xnkit69
╚════════════════◊

╔════════════════◊
║ _*Website*_ : xnkitk.netlify.app
╚════════════════◊

> *©Powered by Ankit🏓*
`
return await conn.sendMessage(from,{image: {url: `https://envs.sh/kD5.jpg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
