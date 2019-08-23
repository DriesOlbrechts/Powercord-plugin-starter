
const { Plugin } = require('powercord/entities');

module.exports = class Embed extends Plugin {
  startPlugin () {
    this.registerCommand(
      'embed',
      [],
      'A simple guide to plugins',
      '{c}',
      (args) => ({
        send: false,
        result: {
                      type: 'rich',
                      title: 'This will send an embed through Clyde',
                      fields:[ 
                        {name: 'You can add a field title',value: 'and field value' ,inline:false},
                        
                    
                    ],
                    color: 0x000000 //Color is represented in hex format like in this example for black
                    }
      })
    );
  }
};
