const { exec } = require('child_process');

module.exports = {
   name: 'start',
   description: 'Starts the Valheim server',
   execute(message, args) {
      message.channel.send("Starting the server! Get ready :crossed_swords:");
      
      const script = exec('.././vhserver start');

      script.stdout.on('data', data => {
         console.log(data);
      });

      script.stderr.on('data', data => {
         console.error(data);
      });
   },
};