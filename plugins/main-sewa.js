let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    pepe = 'https://i.ibb.co/BzR1jRq/08a088fe953b.jpg'
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "◈",
        "description": `
‼️‼️‼️‼️‼️ ‼️‼️‼️‼️ ‼️
‼️⛶══════════⛶‼️
‼️⛶▒▒▒▒▒▒▒▒▒▒⛶‼️
‼️⛶▒███▒▒███▒⛶‼️
‼️⛶▒███▒███▒▒⛶‼️
‼️⛶▒██████▒▒▒⛶‼️
‼️⛶▒█████▒▒▒▒⛶‼️
‼️⛶▒██████▒▒▒⛶‼️
‼️⛶▒███▒███▒▒⛶‼️
‼️⛶▒███▒▒███▒⛶‼️
‼️⛶▒▒▒▒▒▒▒▒▒▒⛶‼️
‼️⛶▒▒▒▒▒▒▒▒▒▒⛶‼️
‼️⛶▒▒▄████▄▒▒⛶‼️
‼️⛶▒███▀▀███▒⛶‼️
‼️⛶▒███▒▒███▒⛶‼️
‼️⛶▒███▒▒███▒⛶‼️
‼️⛶▒███▒▒███▒⛶‼️
‼️⛶▒███▄▄███▒⛶‼️
‼️⛶▒▒▀████▀▒▒⛶‼️
‼️⛶▒▒▒▒▒▒▒▒▒▒⛶‼️
‼️⛶▒▒▒▒▒▒▒▒▒▒⛶‼️
‼️⛶▒██▄▒▒███▒⛶‼️
‼️⛶▒███▄▒███▒⛶‼️
‼️⛶▒████▄███▒⛶‼️
‼️⛶▒████████▒⛶‼️
‼️⛶▒███▀████▒⛶‼️
‼️⛶▒███▒▀███▒⛶‼️
‼️⛶▒███▒▒▀██▒⛶‼️
‼️⛶▒▒▒▒▒▒▒▒▒▒⛶‼️
‼️⛶▒▒▒▒▒▒▒▒▒▒⛶‼️
‼️⛶▒▄██████▄▒⛶‼️
‼️⛶▒████████▒⛶‼️
‼️⛶▒▒▒████▒▒▒⛶‼️
‼️⛶▒▒▒████▒▒▒⛶‼️
‼️⛶▒▒▒████▒▒▒⛶‼️
‼️⛶▒▒▒████▒▒▒⛶‼️
‼️⛶▒▒▒████▒▒▒⛶‼️
‼️⛶▒▒▒▒▒▒▒▒▒▒⛶‼️
‼️⛶▒▒▒▒▒▒▒▒▒▒⛶‼️
‼️⛶▒▒▄████▄▒▒⛶‼️
‼️⛶▒███▀▀███▒⛶‼️
‼️⛶▒███▒▒███▒⛶‼️
‼️⛶▒███▒▒███▒⛶‼️
‼️⛶▒███▒▒███▒⛶‼️
‼️⛶▒███▄▄███▒⛶‼️
‼️⛶▒▒▀████▀▒▒⛶‼️
‼️⛶▒▒▒▒▒▒▒▒▒▒⛶‼️
‼️⛶▒▒▒▒▒▒▒▒▒▒⛶‼️
‼️⛶▒███▒▒▒▒▒▒⛶‼️
‼️⛶▒███▒▒▒▒▒▒⛶‼️
‼️⛶▒███▒▒▒▒▒▒⛶‼️
‼️⛶▒███▒▒▒▒▒▒⛶‼️
‼️⛶▒███▒▒▒▒▒▒⛶‼️
‼️⛶▒███▒▒▄██▒⛶‼️
‼️⛶▒███▄▄███▒⛶‼️
‼️⛶▒▀█████▀▒▒⛶‼️
‼️⛶▒▒▒▒▒▒▒▒▒▒⛶‼️
‼️⛶══════════⛶‼️
‼️‼️‼️‼️‼️‼️‼️‼️‼️
`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "klik untuk melihat harga",
                    "products": [
                        {
                            "productId": "4730029423700586"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "4730029423700586",
                "jpegThumbnail": baper
            },
            "businessOwnerJid": "62895604670507@s.whatsapp.net"
        },
        "footerText": "https://wa.me/c/6282114579641\n\nowner number : wa.me/6282114579641"
    }
    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m, contextInfo: { mentionedJid: conn.parseMention(listMessage.description) } })
}
handler.help = ['sewabot', 'premium']
handler.tags = ['main']
handler.command = /^(sewabot|premium)$/i

module.exports = handler
