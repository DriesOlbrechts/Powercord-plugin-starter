const { Plugin } = require('powercord/entities');

module.exports = class Text extends Plugin {
  startPlugin () {
    this.registerCommand(
      'text',
      ['guide'],
      'A simple guide to plugins',
      '{c}',
      (args) => ({
        send: true,
        result: 'Sends a chat message from your account'
      })
    );
  }
};
