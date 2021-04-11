const util = require('util')
const exec = util.promisify(require('child_process').exec)

module.exports = {
   name: 'restart',
   description: 'Restarts the server',
   async execute(message, args) {
      try {
         const { stdout, stderr } = await exec('.././vhserver restart')
         console.log('stdout:', stdout)
         console.log('stderr:', stderr)

         message.channel.send('The server has been restarted! :recycle:')
      } catch (error) {
         console.log('There was an error restarting the server: \n' + error)
         message.channel.send('Failed to restart the server :poop:')
      }
   },
}
