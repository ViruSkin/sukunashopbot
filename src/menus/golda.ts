import { Markup } from "telegraf";
import { IProduct, paymentText } from "../payment";
import { bot } from "../bot";

export const goldaMenu = (ctx: any) => {
    ctx.reply('Выбери тариф:', Markup.inlineKeyboard(
        [
            [
                Markup.button.callback('100G за 140₽', '100g'),
            ],
            [
                Markup.button.callback('500G за 550₽', '500g'),
            ],
            [
                Markup.button.callback('1000G за 999₽', '1000g'),
            ],
            [
                Markup.button.callback('3000G за 2500₽', '3000g'),
            ],
            [
                Markup.button.callback('Назад', 'back'),
            ],
        ]
    ));
}


const actionsList = [
    {
        name: '100g',
        price: 140,
    },
    {
        name: '500g',
        price: 550,
    },
    {
        name: '1000g',
        price: 999,
    },
    {
        name: '3000g',
        price: 2500,
    }
]

bot.action('backGolda', (ctx) => goldaMenu(ctx));
actionsList.map(({ name, price }) => {
    bot.action(name, (ctx) => ctx.reply(paymentText(IProduct.golda, price), Markup.inlineKeyboard(
        [
            Markup.button.callback('Оплатил', 'paid'),
            Markup.button.callback('Отмена', 'backGolda'),
        ],
    )));
});