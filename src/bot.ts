import { Context, Markup, Telegraf } from 'telegraf'
import 'dotenv/config'
export const bot = new Telegraf<Context>(process.env.BOT_TOKEN!)

import { mainMenu } from './menus/main'



bot.start((ctx) => {
    console.log('start')
    mainMenu(ctx)
});


bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))