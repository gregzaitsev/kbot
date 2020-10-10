require('dotenv').config()
const { Telegraf } = require('telegraf')
const fs = require('fs');

const token = fs.readFileSync(".bot_token");
const bot = new Telegraf(token);

bot.catch((err) => {
  console.log('==== Ooops', err)
})

bot.start((ctx) => ctx.reply(`
Hi ${ctx.from.first_name}!
My name is KBot.
`))

// bot answers to /help command
bot.help((ctx) => ctx.reply('Do whatever'));

bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.hears('Hi', (ctx) => ctx.reply('Hey there'));

bot.on('text', async (ctx) => {
  ctx.reply(`What ${ctx.message.text}?`);
});

bot.launch();
