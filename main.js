const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.json');

client.on('ready', () => {
  console.log(`Bot Foi Iniciado, Com ${client.users.size} Usuários, Em ${client.channels.size} Canais, Em ${client.guilds.size} Servidores`);
  client.user.setGame(`${client.username} f`);
});

client.on('guildCreate', guild => {
  console.log(`O Bot Entrou Nos Servidores ${client.name} (id: ${guild.id}), População: ${guild.memberCount} Membros!`);
  client.user.setActivity(`${client.username} f`);
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
    r_text[0] = `voce é um Lolzeiro, sai daqui`;
    r_text[1] = `voce é um C O D I S T A safado`;
    r_text[2] = `voce já soltou sua ULT da Mercy hj? Patetico...`;
    r_text[3] = `voce só joga com ASH e acha que é PRO`;
    r_text[4] = `voce Famoso Global carregado, clbc ruim`;
    r_text[5] = `voce joga PUBG com 15 FPS e ainda me divirto, kk`;
    r_text[6] = `voce é jogador de FOGO GRÁTIS, aqui você tem acesso livre e permissão de ADMINISTRATOR, sejá bem-vindo MEU REI!`;

    let i = Math.floor(7*Math.random());

    const quemsou = await message.channel.send('calma ae filho');
    quemsou.edit(r_text[i]);
  }
});

client.login(config.token);
