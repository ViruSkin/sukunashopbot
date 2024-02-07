import { Markup } from "telegraf";
import { bot } from "../bot";
import { goldaMenu } from "./golda";
import { vbaksyMenu } from "./vbaksy";
import { steamMenu } from "./steam";
import { robuxMenu } from "./robux";


export const mainMenu = (ctx: any) => {
    ctx.reply('Выбери товар:', Markup.inlineKeyboard(
        [
            [
                Markup.button.callback('Голда', 'golda'),
                Markup.button.callback('В-БАКСЫ', 'v-baksy'),
            ],
            [
                Markup.button.callback('Steam', 'steam'),
                Markup.button.callback('Robux', 'robux'),
            ],
        ]
    ));
}

bot.action('back', (ctx) => mainMenu(ctx));

bot.action('golda', (ctx) => goldaMenu(ctx));
bot.action('v-baksy', (ctx) => vbaksyMenu(ctx));
bot.action('steam', (ctx) => steamMenu(ctx));
bot.action('robux', (ctx) => robuxMenu(ctx));