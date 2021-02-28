module.exports = {
   name: 'info',
   description: 'Prints info about the Valheim server',
   execute(message, args) {
      message.channel.send({
         embed: {
            color: 3447003,
            title: "About the sever",
            fields: [
               { name: "IP", value: "0.0.0.0" },
               { name: "Players", value: "X / 10" },
               { name: "Uptime", value: "10hours 43minutes"}
            ]
         }
      });
   },
};