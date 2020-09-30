const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  var toplam = db.fetch(`toplamKayit_${message.author.id}`)
  const genelrol = message.guild.roles.find(r => r.id === "755055746403532910"); 
  const kız = message.guild.roles.find(r => r.id === "759073022572757042"); 
  const misafir = message.guild.roles.find(r => r.id === "759681366270541865"); 
  const log = message.guild.channels.find(c => c.id === "759078294091071569"); 
  const tag = "TAG";
  if(!message.member.roles.array().filter(r => r.id === "759073034295443477")[0]) { 
    return message.channel.send("**Bu İşlemi Gerçekleştirmek İçin Kayıt Sorumlusu Olman Gerekli!**");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("**Kayıt edeceğin kullanıcıyı etiketlemelisin.**")
    const c = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("**Kayıt Etmek için İasim girmen gerek.**")
      if(!yas) return message.channel.send("**Kayıt etmek için Bir yaş girmen gerek.**")
    c.addRole(genelrol)
    c.addRole(kız)
    c.removeRole(misafir)
    c.setNickname(`${tag} ${nick}・${yas}`)
    db.add(`bayanKayit_${message.author.id}`, 1)
    db.add(`toplamKayit_${message.author.id}`, 1)
    const embed = new Discord.RichEmbed()
    .setAuthor("Kız Kayıt Yapıldı")
    .addField(`<a:1881_alarm:759095654751535114> Kaydı Yapılan Kullanıcı\n`, `${c.user.tag}`)
    .addField(`<a:1881_tik:759095635441221692> Kaydı Yapan Yetkili\n`, `${message.author.tag}`)
    .addField(`<a:1881_elmas:759095648582107147> Yeni İsim\n`, `${tag} ${nick} , ${yas}`)
    .addField(`<a:1881_elmas:759095648582107147> Toplam Kayıt\n`, toplam || 0)
    .setFooter("1881 Registery - Kayıt Sistemi")
    .setColor("#ffcbdb")
    log.send(embed)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k"],
  permLevel: 0
};
exports.help = {
  name: "k",
  description: "k",
  usage: "k"
};

