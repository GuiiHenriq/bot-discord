const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');

function Play(connection, message) {
  let server = servers[message.guild.id];
  server.dipatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
  server.queue.shift();
  server.dipatcher.on('end', () => {
    if(server.queue[0]){
      Play(connection, message);
    }
    else {
      connection.disconnect();
    }
  });
}

class JoinChannelCommand extends commando.Command {

  constructor(client) {
    super(client,{
      name: 'tocar',
      group: 'music',
      memberName: 'tocar',
      description: 'Vou Tocar Umas Musicas Para Debochar Legal'
    });
  }

  async run(message, args) {
    if(message.member.voiceChannel) {
      if(!message.guild.voiceConnection) {
        if(!servers[message.guild.id]) {
          servers[message.guild.id] = {queue: []}
        }

        message.member.voiceChannel.join()
          .then(connection => {
            let server = servers[message.guild.id];
            message.reply('Vou Tocar Umas Musicas Para Debochar Legal!');
            server.queue.push(args);
            Play(connection, message);
          })
      }
    }
    else {
      message.reply('Tu tem que tá em uma sala de Voz crl!');
    }
  }

}
module.exports = JoinChannelCommand;
