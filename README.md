# Powercord-plugin-starter
A short guide on how to make a Powercord plugin
If you just wanna figure out by yourself, check the two folders in this repository or go to:
https://github.com/powercord-org/powercord/tree/v2/src/Powercord/plugins
and use those plugins to figure out the basic things you need and teach yourself 


## setup
There are 2 necessary files to make a plugin:
 - The index.js file which contains the code
 - The manifest.json which contains some info about the plugin
### Manifest.json
Let's start with the manifest.json file
```
{
  "name": "plugin-starter",
  "version": "0.0.1",
  "description": "Example on how to make a plugin",
  "author": "Dodo#1797",
  "license": "MIT"
}
```
#### As you can see it contains very basic things:

  - The name of the plugin
  - The version of the plugin
  - The description of what your plugin does
  - The author: In my case my discord tag but this can be anything
  - The license: here MIT as example but there's a bunch of other licences you can take a look at.

This is all needed for the plugins tab in settings, where you will be able to find your plugin listed among others
### index.js

The index file of your plugin, this is where the magic happens.
In this example I will only show two very basic things, to send text messages and to send embeds through Clyde

inside of the `startPlugin()` function, you register the command
You pass it the name of the command, any optional aliasses, a description, the usage and then a function.
Arguments is the one where you put your code.
To send a message you need to pass an object containing a `send` and `result` property.
the `send` property is a boolean, true or false. true sends the message as the user, false will send it as Clyde.
the `result` property is the text or embed info you will be sending.

#### Text message
```js
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
```
#### Embed message
```js
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
```
When sending an embed you pass a few more things to result:
 - The type of message, which is `rich` for RichEmbed.
 - The title of the embed
 - An array of field objects with `name`, `value` and whether or not the field is inline
 - The color of the embed in hex format 

##### You want more code?
In case you dont want to just pass a message,but want to actually use some code here is a small example on how to do that
```js
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



```

## Discord
And finally, Powercord has an official discord where you can ask help with your plugin development:
https://discordapp.com/invite/5eSH46g





