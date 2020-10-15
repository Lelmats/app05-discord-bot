import Discord from 'discord.js';
const {token} = require('./config.json');
const client = new Discord.Client();

client.on('ready', ()=>{
    console.log(`Bot logged at: ${client.user.tag}`);
});

client.on('message', message =>{
    if(message.content === 'Pueta'){
        message.reply('Tu Pueta');
    }
});
client.on('message', message =>{
    if(message.content === 'Buebo'){
        message.reply('Nio');
    }
});
client.login(token);