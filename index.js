const TekegramBot = require('node-tlegram-api')
const TOKEN = "536830135:AAHaXtPTyORphk-z1MseCR00GwHYcFqMMNo"
const bot = new TekegramBot(TOKEN,{polling:true})
bot.on('messege',msg => {
    bot.sendMessage(msg.chat.id,`hello ${msg.from.firs_name}` )}
