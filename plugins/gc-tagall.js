let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*πΌπ΄π½ππ°πΉπ΄:* ${pesan}`
let teks = `*βΊπΈπ½ππΎπ²π°π½π³πΎ - πΆπππΏπΎβΊ\n\nβ ${oi}\n\nβ *π΄ππΈπππ΄ππ°π*\n`
for (let mem of participants) {
teks += `β£β₯ @${mem.id.split('@')[0]}\n`}
teks += `*β* *IG: @COMUNIDAD.DKN* \n\n*ββββββββββββββββ*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(todos|todas|esclavos|esclavas|muchanchos|muchanchas|equipos|jugadores|jugadoras)$/i
handler.admin = true
handler.group = true
export default handler
