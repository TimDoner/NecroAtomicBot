const Discord = require('discord.js');
module.exports = {

  name:"restart",
  execute(message,args){

    console.log(message.author.id);
    // if(message.author.id != '360135256155750421'){
    //   return message.channel.send('Only owner can restart bot');
    // }

    message.channel.send('Bot Restart is commencing....');
    process.exit();
  }
}
