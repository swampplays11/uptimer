const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const colors = require('./../../colors.json')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "developer",
  description: "Shows all commands of the bot",
  botPermission: [],
  authorPermission: [],
  aliases: ["newhelp"],
  ownerOnly: false,
  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("<a:757683476756562084:873297833581744218> <a:757683476836122725:873297883250688020> <a:757683476580401184:873297902502551562>")
      
      .addField(
        "About Me:",
        "Hi I am Swampplays11! I am a bot developer who codes in node.js! I have been coding since June of 2021. Some of my hobbies are playing playing video games and coding! ",
      )
      .setThumbnail("https://cdn.discord.comavatars/787693578775298089/3895b672d1e13acc5496f44bd9707ed6.png?size=128")
      .setFooter("")

      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('💞 • Invite Me') 
      .setURL("https://discord.com/api/oauth2/autho");
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🤔 • Support Server') 
      .setURL("https://discord.gg/m5KxRy39tU");
      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🎬 • Youtube Channel') 
      .setURL("https://www.youtube.com/c/RogmitOp/videos");



      return message.channel.send(helpEmbed,{
        button: [button1,button2],
      });

  },
};



/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */