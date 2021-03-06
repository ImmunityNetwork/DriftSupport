const { RichEmbed } = require('discord.js');


module.exports.run = async (bot, message, args) => {
    let embed = new RichEmbed()
        .setTitle("Drift Information - ")
        .setDescription("Some information about Drift!")
        .setThumbnail("https://cdn.discordapp.com/attachments/390285194617421835/394940813865385995/FFADA4B0-4EF6-4441-BAE8-C525975E7418.png")
        .setColor("#1bade2")
        .addField("Drift Version - ", "1.0")
        .addField("Drift Bot - ", "A multipurpose Bot that is free but comes with limited permissions compared to Drifter, but still still enough for a Discord Server to be satisfied.")
        .addField("Drifter Bot - ", "A Premium Bot that users pay to use with more permissions and other benefits on the official discord server.")
        .addField("Drift Discord Server - ", "[Click to join](https://discord.gg/JYXwCgV), Stay up-to-date with all the updates to Drift!")
    message.channel.send({embed: embed}).then(message => message.delete(60000));
}

module.exports.help = {
    name: "about",
    description:"Read some information about Drift!"
}

//---
//Drift Bot - A multipurpose Bot that is free but comes with limited permissions compared to Drifter, but still still enough to be satisfied.
//Drifter Bot - A Premuim Bot that users pay to use with more permissions and other benefits on the official discord server.
//
//Drift Bot Discord Server - Is very important to be in due to information about outages, updates or other important things.
//Drift Bot Website - Official Website you can share with your friends to obtain Drift Bot in your discord!
//---
