const { exec } = require('child_process');

module.exports = {
   name: 'backup',
   description: 'Backs up the Valheim server',
   execute(message, args) {
      message.channel.send("Backing up the server! :package:");
      
      const script = exec('.././vhserver backup');

      script.stdout.on('data', data => {
         console.log(data);
      });

      script.stderr.on('data', data => {
         console.error(data);
      });
   },
};