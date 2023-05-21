const Discord = require("discord.js");
const Alone = "#36393e";
const AloneDogru = "#22BF41";
const AloneHata = "#f30707";  
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = function(client, message, args) {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;


const onerisiz = new Discord.MessageEmbed()
.setColor(AloneHata)
.setTitle("• Hata: 0014 •")
.setDescription("Öneri gönderebilmek için bir öneri belirtiniz.")
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2023`);

const onerili = new Discord.MessageEmbed()
.setColor(AloneDogru)
.setTitle("Voixy | Başarılı")
.setDescription("Öneriniz alınmıştır! Teşekkür ederiz.")
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2023`);  
  

  var öneri = args.slice(0).join(" ");
 
  var guildID = "1108785729015926814"; // Sunucu ID
 
  var channelID = "1109826543494115328"; // Kanal ID
 
  if (!öneri) {
    return message.channel.send(embed);
  } else {
    var embed = new Discord.MessageEmbed()
 
      .setTimestamp()
 
      .setColor("RANDOM")
 
      .setAuthor("<:a_:1109866752428490974>  Yeni Bir Öneri!", client.user.avatarURL())
 
      .addField("<:a_:1109866752428490974>  • Öneren Kullanıcı:", message.author.tag, true)
 
      .addField("<:a_:1109866752428490974>  • Öneren Kullanıcı ID:", message.author.id,true)
 
      .addField("<:a_:1109866752428490974>  • Önerisi:", öneri)
    
      .setThumbnail(message.author.avatarURL());
 
    client.guilds
      .cache.get(guildID)
      .channels.cache.get(channelID)
      .send(embed);

    message.channel.send(onerili);
  }
};
 
exports.config = {
  name: "öneri",
  aliases: ["istek"],
};

 