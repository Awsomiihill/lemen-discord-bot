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

class OaeCommand extends Command {
    constructor() {
        super('slava', {
           aliases: ['o','a','e'] 
        });
    }

    exec(message) {
        return message.reply('ukrainie');
    }
}

module.exports = PingCommand;
module.exports = OaeCommand;
