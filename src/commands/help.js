module.exports = {
   name: 'help',
   description: 'Shows all available commands',
   execute(message, args) {
      message.channel.send(
         `Here are all the available commands:\n\n**!info** - Info about the server\n**!start** - Starts the server\n**!stop** - Stops the server\n**!restart** - Restart the server\n**!update** - Updates the server\n**!update force** - Forcefully updates the server\n**!backup** - Not implemented yet`
      )
   },
}
