const { exec } = require('child_process');

module.exports = {
   name: 'stop',
   description: 'Stops the Valheim server',
   execute(message, args) {
      message.channel.send("Stopping the server! :skull:");
      
      const script = exec('.././vhserver stop');

      script.stdout.on('data', data => {
         console.log(data);
      });

      script.stderr.on('data', data => {
         console.error(data);
      });
   },
};