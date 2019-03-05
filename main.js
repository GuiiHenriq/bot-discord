const Commando = require('discord.js-commando');
const {Client, Attachment} = require('discord.js');
const bot = new Commando.Client();
const config = require('./config.json');


//Heroku ONLINE
const express = require('express');
const path = require('path');
const PORT = process.env.port || 5000;
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

bot.on('ready', () => {
  console.log('Funcionando...');
});

bot.on('message', function(message) {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();

  if(message.content == 'hello') {
    message.channel.send('Oi');
  }

  //if(comando === 'quemsou') ESSE FUNCIONA COM A EXCLAMACAO, EX: !quemsou
  if(message.content == 'quemsou') {
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

   if(message.content == 'comandos') {
    message.channel.send('Comandos Do Servidor == Mensagens Aleatorias Sobre o GAME Bosta Que Você Joga: quemsou | Musical (por enquanto só funciona com links do youtube, me desculpe): !tocar & !sair | OS ÚNICOS COMANDOS QUE PRECISAM DE EXCLAMAÇÃO "!" SÃO OS DO BOT MUSICAL');
   }
});

bot.login(config.token);
