const { prefix, required_role } = require('../config.json');

module.exports = {
   name: 'message',
   execute(message, client) {
      if (!message.content.startsWith(prefix) || message.author.bot) return;

      // If there's a required role, check that the user sending the command has that role
      if (required_role.use && !message.member.roles.cache.some(role => role.name === required_role.name)) {
         message.reply(`Sorry, you don't have the right privileges to use Mjölnir.`);
         return;
      }
   
      const args = message.content.slice(prefix.length).trim().split(/ +/);
      const commandName = args.shift().toLowerCase();
      
      if (!client.commands.has(commandName)) return;
   
      try {
         client.commands.get(commandName).execute(message, args);
      } catch (error) {
         console.error(error);
         message.reply('There was an error trying to execute that command!');
      }
   }
};