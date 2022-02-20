const { Command } = require('discord-akairo');

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
module.exports = OaeCommand;