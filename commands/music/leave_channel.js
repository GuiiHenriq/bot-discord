const commando = require('discord.js-commando');

// Componente Global Para o BOT Sair da Sala
class LeaveChannelCommand extends commando.Command {

  constructor(client) {
    super(client,{
      name: 'sair',
      group: 'music',
      memberName: 'sair',
      description: 'Vou Tocar Umas Musicas Para Debochar Legal'
    });
  }

  // Verificação para Ver se Você Esta Expulsando o BOT Na Sala Certa
  async run(message, args) {
    if(message.guild.voiceConnection){
      message.guild.voiceConnection.disconnect();
    }
    else {
      message.reply('Quer Me Expulsar e Nem Sabe kkkj')
    }
  }

}
module.exports = LeaveChannelCommand;
