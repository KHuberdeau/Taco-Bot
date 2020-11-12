const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

const time = new Date();

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {

    switch(message.content.toLowerCase()) {
        case "!ping":
            message.channel.send('Pong');
            break;
        case "!kalor":
            message.channel.send("Man that guy is cool");
            break;
        case "!joel":
            message.channel.send("Wishes he had function of two arms");
            break;
        case "!korden":
            message.channel.send("Probably paranoid right now");
            break;
        case "!roll10":
            message.channel.send(random(10));
            break;
        case "!rollus":
            message.channel.send(randomUs(3));
            break;
    };
});

function random(max) {
    let floor = 1;
    return Math.floor(Math.random() * Math.floor(max));
};

function randomUs(max) {
    let floor = 1;
    let nameResult = "";
    let result = Math.floor(Math.random() * Math.floor(max));
    if (result === 1) {
        nameResult ="Kalor";
    }
    else if (result === 2) {
        nameResult = "Korden";
    }
    else {
        nameResult = "Joel";
    }
    return nameResult;
};

client.login(config.token);