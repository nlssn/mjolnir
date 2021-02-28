module.exports = {
   name: 'ready',
   once: true,
   execute(client) {
      console.log(`${client.user.tag} HAS ARRIVED!`);
      console.log(`(The bot is running, connected to your Discord and ready to be used)`);
   }
};