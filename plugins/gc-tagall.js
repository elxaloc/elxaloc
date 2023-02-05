let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`
let teks = `*⺀𝙸𝙽𝚅𝙾𝙲𝙰𝙽𝙳𝙾 - 𝙶𝚁𝚄𝙿𝙾⺀*\n\n*VENTA DEL 🤖 wa.me/+51904841810*\n\n❏ ${oi}\n\n❏ *IG: @COMUNIDAD.DKN*\n`
for (let mem of participants) {
teks += `┣➥ @${mem.id.split('@')[0]}\n`}
teks += `*└*  𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂  ᷦ\n\n*▌│█║▌║▌║║▌║▌║▌║█*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(todos|todas|esclavos|esclavas|muchanchos|muchanchas|equipos|jugadores|jugadoras)$/i
handler.admin = true
handler.group = true
export default handler
