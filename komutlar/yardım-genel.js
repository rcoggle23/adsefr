  
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffffff') 
.setAuthor(`Voixy   Genel Komutlar`, client.user.avatarURL())
.setDescription(`<:a_:1109866752428490974>  Voixy botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Komut Sayısı__`,`<:a_:1109866752428490974>  \`${prefix}komutlar\` Botun Komut Sayısını Gösterir`,true)
.addField(`__Davet Et__`,`<:a_:1109866752428490974>  \`${prefix}davet\` Botumuzu Davet Edersiniz`,true)
.addField(`__Bot Bilgi__`,`<:a_:1109866752428490974>  \`${prefix}botbilgi\` Botumuzun İstatistikleri`,true)
.addField(`__Bot Shard__`,`<:a_:1109866752428490974>  \`${prefix}shard\` Shard Bilgilerini Gösterir`,true)
.addField(`__Profil__`,`<:a_:1109866752428490974>  \`${prefix}profil\` Kullanıcı Profilinizi Gösterir`,true)
.addField(`__Oylama__`,`<:a_:1109866752428490974>  \`${prefix}oylama\` Sunucuda Oylama Başlatır`,true)
.addField(`__Duyuru__`,`<:a_:1109866752428490974>  \`${prefix}duyuru\` Sunucuda Duyuru Yapar`,true)
.addField(`__Bilgilendirme__`,`<:a_:1109866752428490974>  \`${prefix}davet\` |  Voixy'yi Sunucunuza Davet Edersiniz\n<:a_:1109866752428490974>  \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <:a_:1109866752428490974>  \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://geekflare.com/wp-content/uploads/2021/02/discord-bot-hosting-1200x385.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "genel",
  aliases: []
}
