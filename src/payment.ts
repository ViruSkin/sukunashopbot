export enum IProduct {
  golda = 'напишите свой 🆔',
  vbaksy = 'напишите свой Логин и Пароль от Xbox (Microsoft)',
  steam = 'напишите свой логин от аккаунта Steam',
  robux = 'напишите свой 🆔'
}

export const paymentText = (product: IProduct, sum: number) => {
  return `
Пополните баланс:
Карта: 4279380641429750
Номер: 89148912629
Сумма: ${sum} рублей
Отправьте скриншот оплаты для подтверждения
и ${product}`

}