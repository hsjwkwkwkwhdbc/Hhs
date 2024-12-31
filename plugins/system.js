const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "system",
    desc: "Check bot online or no.",
    category: "main",
    react: "📟",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    let status = `
*────────────────────────────────────────*
_*❇️ ANKIT USERBOT SYSTEM ❇️*_
*────────────────────────────────────────*

*────────────────────────────────────────*
❖ *ᴜᴘᴛɪᴍᴇ :* _11 minutes, 44 seconds_
❖ *ʀᴀᴍ ᴜꜱᴀɢᴇ :*  _69.69MB / 696969MB_
❖ *ʜᴏꜱᴛ ɴᴀᴍᴇ :* ankit@69
❖ *ᴏᴡɴᴇʀ :* Ankit🏓
*────────────────────────────────────────*

> Created By Ankit🏓❗    
`

    return reply(`${status}`)



}catch(e){
    console.log(e)
    reply(`${e}`)
    }
    })


//__________ping______

cmd({
    pattern: "ping",
    desc: "Check bot online or no.",
    category: "main",
    react: "🚀",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*Pong...*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `_*📍Ankit Userbot Speed : ${ping}ms*_` }, { quoted: mek })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})


