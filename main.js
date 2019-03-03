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

client.login(config.token);