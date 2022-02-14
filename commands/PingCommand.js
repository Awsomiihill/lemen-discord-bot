const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('o', {
           aliases: ['o','a','e'] 
        });
    }

    exec(message) {
        return message.reply('!O');
    }
}

module.exports = PingCommand;
