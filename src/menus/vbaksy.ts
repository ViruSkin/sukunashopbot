import { Markup } from "telegraf";
import { bot } from "../bot";
import { IProduct, paymentText } from "../payment";

export const vbaksyMenu = (ctx: any) => {
    ctx.reply('Выбери тариф:', Markup.inlineKeyboard(
        [
            [
                Markup.button.callback('1000 В-Баксов за 450₽', '1000v'),
            ],
            [
                Markup.button.callback('2800 В-Баксов за 1000₽', '2800v'),
            ],
            [
                Markup.button.callback('5000 В-Баксов за 1750₽', '5000v'),
            ],
            [
                Markup.button.callback('13500 В-Баксов за 4000₽', '13500v'),
            ],
            [
                Markup.button.callback('Назад', 'back'),
            ],
        ]
    ));
}


const actionsList = [
    {
        name: '1000v',
        price: 450,
    },
    {
        name: '2800v',
        price: 1000,
    },
    {
        name: '5000v',
        price: 1750,
    },
    {
        name: '13500v',
        price: 4000,
    }
]

actionsList.map(({ name, price }) => {
    bot.action(name, (ctx) => ctx.reply(paymentText(IProduct.vbaksy, price)));
});