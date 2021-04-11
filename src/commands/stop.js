const util = require('util')
const exec = util.promisify(require('child_process').exec)

module.exports = {
   name: 'stop',
   description: 'Stops the server',
   async execute(message, args) {
      try {
         const { stdout, stderr } = await exec('.././vhserver stop')
         console.log('stdout:', stdout)
         console.log('stderr:', stderr)

         message.channel.send('The server has been stopped! :skull:')
      } catch (error) {
         console.log('There was an error stopping the server: \n' + error)
         message.channel.send('Failed to stop the server :poop:')
      }
   },
}
