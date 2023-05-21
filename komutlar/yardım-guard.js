 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async(client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Voixy   Koruma Komutları`, client.user.avatarURL())
.setColor('#ffffff')
.setDescription(`<:a_:1109866752428490974>   Voixy  botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__YAKINDA__`,`<:a_:1109866752428490974>  Bu Komut Çok Yakında Eklenecektir.`)
.addField(`__Bilgilendirme__`,`<:a_:1109866752428490974>  \`${prefix}davet\` |  Voixy'yi Sunucunuza Davet Edersiniz\n<:a_:1109866752428490974>  \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <:a_:1109866752428490974>  \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://geekflare.com/wp-content/uploads/2021/02/discord-bot-hosting-1200x385.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "guard",
  aliases: []
}

