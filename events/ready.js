module.exports = {
   name: 'ready',
   once: true,
   execute() {
      console.log(`${client.user.tag} HAS ARRIVED!`);
      console.log(`(The bot is running, connected to your Discord and ready to be used)`);
   }
};