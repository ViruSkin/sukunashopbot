import { Markup } from "telegraf";
import { bot } from "../bot";
import { IProduct, paymentText } from "../payment";

export const steamMenu = (ctx: any) => {
    ctx.reply('Выбери тариф:', Markup.inlineKeyboard(
        [
            [
                Markup.button.callback('50₽ Баланс за 100₽', '50r'),
            ],
            [
                Markup.button.callback('100₽ Баланс за 170₽', '100r'),
            ],
            [
                Markup.button.callback('250₽ Баланс за 350₽', '250r'),
            ],
            [
                Markup.button.callback('500₽ Баланс за 665₽', '500r'),
            ],
            [
                Markup.button.callback('750₽ Баланс за 1000₽', '750r'),
            ],
            [
                Markup.button.callback('1000₽ Баланс за 1300₽', '1000r'),
            ],
            [
                Markup.button.callback('2500₽ Баланс за 3200₽', '2500r'),
            ],
            [
                Markup.button.callback('5000₽ Баланс за 6000₽', '5000r'),
            ],
            [
                Markup.button.callback('7500₽ Баланс за 9000₽', '7500r'),
            ],
            [
                Markup.button.callback('10000₽ Баланс за 12000₽', '10000r'),
            ],
            [
                Markup.button.callback('12500₽ Баланс за 15000₽', '12500r'),
            ],
            [
                Markup.button.callback('15000₽ Баланс за 18000₽', '15000r'),
            ],
            [
                Markup.button.callback('Назад', 'back'),
            ],
        ]
    ));
}

const actionsList = [
    {
        name: '50r',
        price: 100,
    },
    {
        name: '100r',
        price: 170,
    },
    {
        name: '250r',
        price: 350,
    },
    {
        name: '500r',
        price: 665,
    },
    {
        name: '750r',
        price: 1000,
    },
    {
        name: '1000r',
        price: 1300,
    },
    {
        name: '2500r',
        price: 3200,
    },
    {
        name: '5000r',
        price: 6000,
    },
    {
        name: '7500r',
        price: 9000,
    },
    {
        name: '10000r',
        price: 12000,
    },
    {
        name: '12500r',
        price: 15000,
    },
    {
        name: '15000r',
        price: 18000,
    }
]

actionsList.map(({ name, price }) => {
    bot.action(name, (ctx) => ctx.reply(paymentText(IProduct.steam, price)));
});