const Commando = require('discord.js-commando');
const {Client, Attachment} = require('discord.js');
const bot = new Commando.Client();
const config = require('./config.json');

//heroku
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');
bot.registry.registerCommandsIn(__dirname + '/path + commands + yt-down')

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
  if(message.content == 'quem sou') {
    //const attachment = new Attachment('./meme.png');
 
    let r_text = new Array ();
     r_text[0] = `${message.author} é um Lolzeiro, sai daqui \n https://tenor.com/view/chris-tucker-friday-bye-felicia-gif-9020686`;
     r_text[1] = `${message.author} é um C O D I S T A safado \n https://tenor.com/view/angry-face-chewing-jim-carrey-gif-10933295`;
     r_text[2] = `${message.author} já soltou sua ULT da Mercy hj? kkkkk jogo ruim... \n https://tenor.com/view/deadpool-clapping-nice-good-great-gif-5220411`;
     r_text[3] = `${message.author} só joga com ASH e acha que é PRO \n https://tenor.com/view/ew-disgust-gif-3671470`;
     r_text[4] = `${message.author} Famoso Global carregado, kjjjj coitado \n https://tenor.com/view/alyssa-forever-stifled-laugh-ops-oh-gif-8547622`;
     r_text[5] = `${message.author} joga PUBG com 15FPS e ainda acha divertido, kk eae men \n https://tenor.com/view/you-got-this-good-luck-friends-chandler-joey-gif-10927531`;
     r_text[6] = `${message.author} é jogador de FRI, aqui você tem acesso livre e permissão de ADMINISTRATOR, seja bem-vindo MEU REI! \n https://tenor.com/view/lets-do-this-come-on-suit-uncomfortable-nbc-gif-13711263`;
 
    let i = Math.floor(7*Math.random());
 
    //message.channel.send(`${r_text[i]}`, attachment);
    message.channel.send(r_text[i]);
   }

   if(message.content == 'comandos') {
    message.channel.send('COMANDOS DO SERVIDOR \n \n quem sou == Mensagens Aleatorias Sobre o GAME Bosta Que Você Joga \n !tocar LINKDOYOTUBE == Bot Irá Reproduzir Sua Música \n !sair == Bot Irá Parar de Reproduzir a Música e Irá Sair da Sala \n \n OS ÚNICOS COMANDOS QUE PRECISAM DE EXCLAMAÇÃO "!" SÃO OS COMANDOS PARA REPRODUZIR MÚSICA');
   }
});

bot.login(config.token);
