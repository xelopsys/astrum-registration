
const Stage = require("telegraf/stage");
const { session } = require("telegraf/session");
const Scene = require("telegraf/scenes/base");
const { leave } = Stage;
const stage = new Stage();
const { composer, middleware } = require('../bot.js')


const getLang = new Scene("getLang");


getLang.on('text', async (ctx) => {
    ctx.session.lang = ctx.message.text
    console.log(ctx.session.lang)
    if (ctx.session.lang === 'UZB') {
        await ctx.reply('please send me ur contact uz', {
            reply_markup: {
                keyboard: [
                    [{ text: "📱 Отправить контакт", request_contact: true }]
                ],
                resize_keyboard: true,
                one_time_keyboard: true,
            },
        })
    }
    if (ctx.session.lang === 'рус') {
        await ctx.reply('пожалуйста send me ur contact', {
            reply_markup: {
                keyboard: [
                    [{ text: "📱 Отправить контакт", request_contact: true }]
                ],
                resize_keyboard: true,
                one_time_keyboard: true,
            },
        })
    }
    if (ctx.session.lang === 'ENG') {
        await ctx.reply('please send me ur contact en', {
            reply_markup: {
                keyboard: [
                    [{ text: "📱 Отправить контакт", request_contact: true }]
                ],
                resize_keyboard: true,
                one_time_keyboard: true,
            },
        })
    }

    await ctx.scene.leave("getLang");
    await ctx.scene.enter("getNumber");
})

// getLang.hears('UZB', async (ctx) => {
//     ctx.session.lang = ctx.message.text
//     console.log(ctx.session.lang)
//     await ctx.reply('please send me ur contact uz', {
//         reply_markup: {
//             keyboard: [
//                 [{ text: "📱 Отправить контакт", request_contact: true }]
//             ],
//             resize_keyboard: true,
//             one_time_keyboard: true,
//         },
//     })
// })
// getLang.hears('ENG', async (ctx) => {
//     ctx.session.lang = ctx.message.text
//     console.log(ctx.session.lang)
//     await ctx.reply('please send me ur contact en', {
//         reply_markup: {
//             keyboard: [
//                 [{ text: "📱 Отправить контакт", request_contact: true }]
//             ],
//             resize_keyboard: true,
//             one_time_keyboard: true,
//         },
//     })
// })
// getLang.hears('рус', async (ctx) => {
//     ctx.session.lang = ctx.message.text
//     console.log(ctx.session.lang)
//     await ctx.reply('пожалуйста send me ur contact', {
//         reply_markup: {
//             keyboard: [
//                 [{ text: "📱 Отправить контакт", request_contact: true }]
//             ],
//             resize_keyboard: true,
//             one_time_keyboard: true,
//         },
//     })

// })





module.exports = getLang