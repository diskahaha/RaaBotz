let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Asal   :*
│ *Kapan Mati    :*
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

module.exports = handler
