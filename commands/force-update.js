const { exec } = require('child_process');

module.exports = {
   name: 'force-update',
   description: `Updates the Valheim server without checking if there's a new version`,
   execute(message, args) {
      message.channel.send("Forcing an update of the server! :desktop: :punch:");
      
      const script = exec('.././vhserver force-update');

      script.stdout.on('data', data => {
         console.log(data);
      });

      script.stderr.on('data', data => {
         console.error(data);
      });
   },
};