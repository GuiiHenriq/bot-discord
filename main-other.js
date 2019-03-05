const {Client, Attachment} = require('discord.js');
const client = new Client();
const config = require('./config.json');

client.on('ready', () => {
  console.log(`Bot Foi Iniciado, Com ${client.users.size} Usuários, Em ${client.channels.size} Canais, Em ${client.guilds.size} Servidores`);
  client.user.setGame(`HE HE HE`);
});

client.on('guildCreate', guild => {
  console.log(`O Bot Entrou Nos Servidores ${client.name} (id: ${guild.id}), População: ${guild.memberCount} Membros!`);
  client.user.setActivity(`HE HE HE`);
});

client.on('guildDelete', guild => {
  console.log(`O Bot Foi Removido do Servidor ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${clients.guilds.size} Servers`);
});

client.on('message', async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  //if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();

  // Comando QUEM EU SOU
  if(comando === 'quemsou') {
   const attachment = new Attachment('./meme.png');

   let r_text = new Array ();
    r_text[0] = `${message.author} é um Lolzeiro, sai daqui`;
    r_text[1] = `${message.author} é um C O D I S T A safado`;
    r_text[2] = `${message.author} já soltou sua ULT da Mercy hj? Patético...`;
    r_text[3] = `${message.author} só joga com ASH e acha que é PRO`;
    r_text[4] = `${message.author} Famoso Global carregado, kjjjj`;
    r_text[5] = `${message.author} joga PUBG com 15 FPS e ainda acha divertido, kk eae men`;
    r_text[6] = `${message.author} é jogador de FRI, aqui você tem acesso livre e permissão de ADMINISTRATOR, seja bem-vindo MEU REI!`;

   let i = Math.floor(7*Math.random());

   message.channel.send(`${r_text[i]}`, attachment);
  }

  //Comando Musica
  if(commando === 'tocar') {
    
  }
});

client.login(config.token);
