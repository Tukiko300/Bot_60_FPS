/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
No hay nada que donar...

Mi número se ha baneado
¿Que hago? 
------------------------------------------------------------------------------------------------
Pues habla con la empresa, yo 
No tengo la culpa :v
https://faq.whatsapp.com/android?lg=es&lc=PY&eea=0&anid=2c3ba50e-8911-471b-bb7d-472c5ef41545

`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://www.paypal.me/TheShadowBrokers133', '𝙿𝙰𝚈𝙿𝙰𝙻', null, null, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|whatsApp.com|apoyar$/i
export default handler
