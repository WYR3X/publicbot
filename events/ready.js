const Discord = require("discord.js")


module.exports = bot => {
     console.log(`${bot.user.username} Başarıyla aktif oldu!`)
//bot.user.setActivity("Shizuka", {type: "STREAMING", url:"https://twitch.tv/wyrex_youtube"});

    let statuses = [ 
        `!yardım - 1881 Registery 7/24 Aktif!`,
        `1881 Club - Her Daim!`,
        `!yardım - 1881 Registery 7/24 Aktif!`,
        `Yapımcım : WyReX#1881`


    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "STREAMING", url:"https://twitch.tv/wyrex_youtube"});

    }, 10000)

}