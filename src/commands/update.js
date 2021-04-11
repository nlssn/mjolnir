const util = require('util')
const exec = util.promisify(require('child_process').exec)

module.exports = {
   name: 'update',
   description: 'Updates the server',
   async execute(message, args) {
      const forced = args[0] === 'force' ? true : false

      if (forced) {
         script = '.././vhserver force-update'
      } else {
         script = '.././vhserver update'
      }

      try {
         const { stdout, stderr } = await exec(script)
         console.log('stdout:', stdout)
         console.log('stderr:', stderr)

         if (forced) {
            message.channel.send(
               'The server has been updated ..WITH FORCE! :punch:'
            )
         } else {
            message.channel.send('The server has been updated! :sparkles:')
         }
      } catch (error) {
         console.log('There was an error updating the server: \n' + error)
         message.channel.send('Failed to update the server :poop:')
      }
   },
}
