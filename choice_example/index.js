const { Plugin } = require('powercord/entities');

module.exports = class Choice extends Plugin {
  startPlugin () {
    this.registerCommand(
      'choice',
      [],
     'You get to pick',
      '{c} [embed or text]',
      (args) => {
                
                if(args[0].toLowerCase() === 'text'){
                return  {
                  send: true,
                  result: 'Sends a chat message from your account'
                }  
              }
                
                
                else if(args[0].toLowerCase() === 'embed'){
                return {
                      send: false,
                      result:{
                      type: 'rich',
                      title: 'This will send an embed through Clyde',
                      fields:[ 
                             {name: 'You can add a field title',value: 'and field value' ,inline:false},
                             ],
                      color: 0x000000 //Color is represented in hex format like in this example for black
                    }
                  }
                  }
              }
            
            
            
    )   
    }
  }

