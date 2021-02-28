# Mjölnir | Control your Valheim server from Discord

A Discord bot that let's you start, stop and restart a Valheim server. It's basically just a way to access LinuxGSM_ (Linux Game Server Managers) scripts trough Discord.

## Requirements
This bot relies on your Valheim server being installed using [LinuxGSM_](https://linuxgsm.com). The bot uses LGSM scripts to execute it's commands.

You also need NodeJS and NPM installed.
# Installation
_NOTE! Make sure you're doing this as the "vhserver" user._

1. Start by cloning the repository and installing the packages
```
git clone https://github.com/nlssn/gh-mjolnir.git gh-mjolnir
cd gh-mjolnir
npm install
```
2. To be able to connect to a Discord server you will need a bot token.
[Here's a guide](#0) on how to get a token. Store your token as a string called `token` inside `config.json`. Your config file will look something like this:
```
{
   "prefix": "!",
   "token": "a_long_string_of_random_characters"
}
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
* [ ] Optionally require users to have a certain role within Discord to use the bot
* [ ] Add backup command
* [ ] Add info command (prints server IP, player count, etc.)

## Problems / Suggestions
If you have any problems or suggestions for features, please post them [here](https://github.com/nlssn/gh-mjolnir/issues).