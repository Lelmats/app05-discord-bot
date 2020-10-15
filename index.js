import Discord from 'discord.js';

const client = new Discord.Client();

const TOKEN_API = 'NzYyNzEyMjMzNzE2NzQ0MjYy.X3tJHw._oMjZRblfrnMQD0nGiiZ1L_-Sjg';

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
client.login(TOKEN_API);