const util = require('util')
const exec = util.promisify(require('child_process').exec)

module.exports = {
   name: 'start',
   description: 'Starts the server',
   async execute(message, args) {
      try {
         const { stdout, stderr } = await exec('.././vhserver start')
         console.log('stdout:', stdout)
         console.log('stderr:', stderr)

         message.channel.send('The server has been started! :crossed_swords:')
      } catch (error) {
         console.log('There was an error starting the server: \n' + error)
         message.channel.send('Failed to start the server :poop:')
      }
   },
}
