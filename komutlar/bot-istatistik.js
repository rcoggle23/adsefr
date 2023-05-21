


const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/attachments/749380170351116290/750088540288712914/B0oBpM.png`)
.addField("__**Bot Verileri**__", `  **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <:a_:1109866752428490974>  **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <:a_:1109866752428490974>  **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `  **Bot Sahibi**  <@768757288940208138> \n ** bıkmış#0099** \n\n <:a_:1109866752428490974> \ **Bot Geliştiricisi**  <@768757288940208138> \n **bıkmış#0099** \n\n <:a_:768757288940208138>  **Bot Sahibi**  <@768757288940208138> \n **Xir9999** \n`)
.addField("__**Sürümler**__", `  **Discord.js Sürümü** **|**  **v${Discord.version}** \n  **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `  **${client.ws.ping}** ms`,true)
.addField("**__Müzik Oynatılan__** ", "  " +client.voice.connections.size + " Sunucu", true)
    .setImage(`https://geekflare.com/wp-content/uploads/2021/02/discord-bot-hosting-1200x385.jpg`)
.setColor("#ffffff")
message.channel.send(lordcreative)
}

exports.config = {
name: "botbilgi",
aliases: []
}