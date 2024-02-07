import { Markup } from "telegraf";
import { bot } from "../bot";
import { IProduct, paymentText } from "../payment";

export const robuxMenu = (ctx: any) => {
    ctx.reply('Выбери тариф:', Markup.inlineKeyboard(
        [
            [
                Markup.button.callback('80R за 100₽', '80r'),
            ],
            [
                Markup.button.callback('170R за 200₽', '170r'),
            ],
            [
                Markup.button.callback('350R за 400₽', '350r'),
            ],
            [
                Markup.button.callback('800R за 800₽', '800r'),
            ],
            [
                Markup.button.callback('Назад', 'back'),
            ],
        ]
    ));
}

const actionsList = [
    {
        name: '80r',
        price: 100,
    },
    {
        name: '170r',
        price: 200,
    },
    {
        name: '350r',
        price: 400,
    },
    {
        name: '800r',
        price: 800,
    }
]

actionsList.map(({ name, price }) => {
    bot.action(name, (ctx) => ctx.reply(paymentText(IProduct.robux, price)));
});