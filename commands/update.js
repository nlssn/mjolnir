const { exec } = require('child_process');

module.exports = {
   name: 'update',
   description: 'Updates the Valheim server to the latest version',
   execute(message, args) {
      message.channel.send("Updating the server! :sparkles:");
      
      const script = exec('.././vhserver update');

      script.stdout.on('data', data => {
         console.log(data);
      });

      script.stderr.on('data', data => {
         console.error(data);
      });
   },
};