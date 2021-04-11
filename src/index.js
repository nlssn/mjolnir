// Import required packages
const fs = require('fs')
const { Client, Collection } = require('discord.js')

// Get the .env config
require('dotenv').config()

// Instance of bot
const bot = new Client()

// Commands collection
bot.commands = new Collection()

// Load command files
const commandFiles = fs
   .readdirSync('./src/commands')
   .filter((file) => file.endsWith('.js'))

// Loop trough command files and add commands to collection
for (const file of commandFiles) {
   const command = require(`./commands/${file}`)

   bot.commands.set(command.name, command)
}

// Ready
bot.once('ready', () => {
   console.log(`${bot.user.tag} has logged in`)
})

// Message handling
bot.on('message', (message) => {
   if (!message.content.startsWith(process.env.PREFIX) || message.author.bot)
      return

   const args = message.content
      .slice(process.env.PREFIX.length)
      .trim()
      .split(/ +/)
   const command = args.shift().toLowerCase()

   if (!bot.commands.has(command))
      return message.channel.send(`There's no ${command} command`)

   try {
      bot.commands.get(command).execute(message, args)
   } catch (error) {
      console.error(error)
      message.reply('There was an error trying to execute that command :poop:')
   }
})

// Log in
bot.login(process.env.DISCORD_TOKEN)
