# Mjölnir

A Discord bot that let's you start, stop and restart a Valheim server. It's basically just a way to access LGSM (Linux Game Server Managers) scripts trough Discord.

## Requirements
This bot relies on your Valheim server being installed using (LinuxGSM_)[https://linuxgsm.com]. The bot uses predefined LGSM scripts to execute it's commands.

You also need NodeJS and NPM installed.
# Installation
Make sure you're doing this as the "vhserver" user.

1. Start by cloning the repository and installing the packages
```
git clone https://github.com/nlssn/gh-mjolnir.git gh-mjolnir
cd gh-mjolnir
npm install
```
2. To be able to connect to a Discord server via DiscordJS you will need a bot token.
(Here's a guide)[#0] on how to get a token.

Add a .env-file and store your Discord API-key as the variable `DISCORD_TOKEN`. Your file will look something like this:
```
DISCORD_KEY=a_long_string_of_random_characters
```

3. Start the bot by running the following command within the gh-mjolnir directory
```
npm run start
```

## Available commands
_NOTE! The default prefix is !. The prefix must be used before the command for it to work._

* **start** - Starts the server
* **stop** - Stops the server
* **restart** - Restarts the server

## To-Do
* [ ] Make sure the bot can run forever
* [ ] Standardize the way commands are handled
* [ ] Add backup command
* [ ] Add info command (prints server IP, player count, etc.)

## Problems / Suggestions
If you have any problems or suggestions for features, please post them (here)[https://github.com/nlssn/gh-mjolnir/issues].