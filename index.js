const {prefix, token, bot_info} = require('./botconfig.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
<<<<<<< HEAD
const expfile = require('./expfile.json');
=======
const leveling = require('discord-leveling');

const mongoose = require("mongoose");
>>>>>>> c06ed8a5c8342eb2ced2d1ec853c410070cbd7ef

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file=>file.endsWith('.js'));




client.once('ready', () => {
  console.log(bot_info.name);
  console.log(bot_info.version);



});

client.once('disconnect', () => {

  console.log('Disconnect');
});




for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}




client.on ('message', async message => {

  if(!message.content.startsWith(prefix) || message.author.bot){
    return;
  }









  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if(!client.commands.has(command)){
    return;
  }
  try{
    client.commands.get(command).execute(message, args);
  }catch(error){
    console.error(error);
    message.reply("Issue loading command");
  }







});










client.login(token);
