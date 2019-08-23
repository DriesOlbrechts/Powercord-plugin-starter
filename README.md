# Powercord-plugin-starter
A short guide on how to make a Powercord plugin

## setup
There are 2 necessary to make a plugin:
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
As you can see it contains very basic things:
-
  - The name of the plugin
  - The version of the plugin
  - The description of what your plugin does
  - The author: In my case my discord tag but this can be anything
  - The license: here MIT as example but there's a bunch of other licences you can take a look at.

This is all needed for the plugins tab in settings, where you will be able to find your plugin listed among others
### index.js

The index file of your plugin, this is where the magic happens.
In this example I will only show two very basic things, to send text messages and to send embeds through Clyde
Text message
-



