const { exec } = require('child_process');

module.exports = {
   name: 'restart',
   description: 'Restarts the Valheim server',
   execute(message, args) {
      message.channel.send("Restarting the server! Go grab a snack while you wait :meat_on_bone:");
      
      const script = exec('.././vhserver restart');

      script.stdout.on('data', data => {
         console.log(data);
      });

      script.stderr.on('data', data => {
         console.error(data);
      });
   },
};