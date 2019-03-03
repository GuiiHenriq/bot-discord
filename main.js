const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.json');

client.on('ready', () => {
  console.log(`Bot Foi Iniciado, Com ${client.users.size} Usuários, Em ${client.channels.size} Canais, Em ${client.guilds.size} Servidores`);
  client.user.setGame(`${client.username} Pro Alto`);
});

client.on('guildCreate', guild => {
  console.log(`O Bot Entrou Nos Servidores ${client.name} (id: ${guild.id}), População: ${guild.memberCount} Membros!`);
  client.user.setActivity(`${client.username} Pro Alto`);
});

client.on('guildDelete', guild => {
  console.log(`O Bot Foi Removido do Servidor ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${clients.guilds.size} Servers`);
});

client.on('message', async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();

  // First Command
  if(comando === 'quemsou') {
    let r_text = new Array ();
    r_text[0] = '1';
    r_text[1] = '2';
    r_text[2] = '3';
    r_text[3] = '4';
    r_text[4] = '5';
    r_text[5] = '6';
    r_text[6] = '7';
    let i = Math.floor(7*Math.random());

    const quemsou = await message.channel.send('calma');
    quemsou.edit(r_text[i]);
  }
});

client.login(config.token);
