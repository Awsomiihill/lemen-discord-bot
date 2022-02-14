const { Listener } = require('discord-akairo');

class CommandBlockedListener extends Listener {
    constructor() {
        super('commandBlocked', {
            emitter: 'commandHandler',
            eventName: 'commandBlocked'
        });
    }

    exec(message, command, reason) {
        return message.channel.send(`${message.author.username} was ae from using ${command.id} because he z ${reason}!`);
    }
}

module.exports = CommandBlockedListener;
