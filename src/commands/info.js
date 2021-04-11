const fetch = require('node-fetch')

module.exports = {
   name: 'info',
   description: 'Information about the server',
   async execute(message, args) {
      let info = await fetch(
         `https://api.battlemetrics.com/servers?filter[search]="${process.env.SERVER_NAME}"`
      )
         .then((res) => res.json())
         .then((json) => {
            return json.data[0].attributes
         })

      if (!info) return message.channel.send('Could not fetch the server info')

      message.channel.send({
         embed: {
            color: 3447003,
            title: info.name,
            fields: [
               { name: 'IP', value: info.ip },
               {
                  name: 'Status',
                  value:
                     info.status.charAt(0).toUpperCase() + info.status.slice(1),
               },
               { name: 'Players online    ', value: `${info.players} / 10` },
            ],
         },
      })
   },
}
