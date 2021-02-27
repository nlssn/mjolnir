require('dotenv').config();

const { exec } = require('child_process');
const { Client } = require('discord.js');
const client = new Client();
const { prefix, token } = require('./config.json');

client.on('ready', () => {
   console.log(`${client.user.tag} is ready.`);
});

client.on('message', message => {
   if (!message.content.startsWith(prefix) || message.author.bot) return;

   const [cmd, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);
      
   if(cmd === 'start') {
      message.channel.send("Starting the server! Get ready :crossed_swords:");
      start();
   }

   if(cmd === 'stop') {
      message.channel.send("Stopping the server! :skull:");
      stop();
   }

   if(cmd === 'restart') {
      message.channel.send("Restarting the server! Go grab a snack while you wait :meat_on_bone:");
      restart();
   }
});

client.login(token);


function start() {
   const startScript = exec('.././vhserver start');

   startScript.stdout.on('data', data => {
      console.log(data);
   });
   
   startScript.stderr.on('data', data => {
      console.error(data);
   });
}

function stop() {
   const stopScript = exec('.././vhserver stop');

   stopScript.stdout.on('data', data => {
      console.log(data);
   });

   stopScript.stderr.on('data', data => {
      console.error(data);
   });
}

function restart() {
   const restartScript = exec('.././vhserver restart');

   restartScript.stdout.on('data', data => {
      console.log(data);
   });

   restartScript.stderr.on('data', data => {
      console.error(data);
   });
}
