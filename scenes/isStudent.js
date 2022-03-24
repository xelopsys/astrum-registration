const Stage = require("telegraf/stage");
const { session } = require("telegraf/session");
const Scene = require("telegraf/scenes/base");
const { leave } = Stage;
// const stage = new Stage();
// const { composer, middleware } = require('../bot.js')
// const bot = new telegraf(data.token);


const isStudent = new Scene("isStudent");

// getName.on('contact', async (ctx) => {
//     if (ctx.session.lang === 'рус') {
//         await ctx.replyWithHTML('Please send me ur FIO rus')
//         console.log(ctx.session.lang)
//     }
//     if (ctx.session.lang === 'UZB') {
//         await ctx.replyWithHTML('please send me ur FIO uzb')
//     }
//     if (ctx.session.lang === 'ENG') {
//         await ctx.replyWithHTML('Please send me ur FIO ENG')
//     }
// })

isStudent.hears('YES-RU', async (ctx) => {
    ctx.session.isStudent = ctx.message.text;
    console.log(ctx.session.isStudent)
    await ctx.reply('what you want to ask', {
        reply_markup: {
            keyboard: [
                ['ru-edu', 'ru-sale'],
                ['ru-other', 'ru-offer-compl']
            ],
            resize_keyboard: true,
            one_time_keyboard: true,
        },
    })
    await ctx.scene.leave("isStudent");
    await ctx.scene.enter("getQuestionType");
})
isStudent.hears('NO-RU', async (ctx) => {
    ctx.session.isStudent = ctx.message.text;
    console.log(ctx.session.isStudent)
    await ctx.reply('what you want to ask', {
        reply_markup: {
            keyboard: [
                ['ru-edu', 'ru-sale'],
                ['ru-other', 'ru-offer-compl']
            ],
            resize_keyboard: true,
            one_time_keyboard: true,
        },
    })
    await ctx.scene.leave("isStudent");
    await ctx.scene.enter("getQuestionType");
})


//******************************UZ */
isStudent.hears('YES-UZ', async (ctx) => {
    ctx.session.isStudent = ctx.message.text;
    console.log(ctx.session.isStudent)
    await ctx.reply('what you want to ask', {
        reply_markup: {
            keyboard: [
                ['uz-edu', 'uz-sale'],
                ['uz-other', 'uz-offer-compl']
            ],
            resize_keyboard: true,
            one_time_keyboard: true,
        },
    })
    await ctx.scene.leave("isStudent");
    await ctx.scene.enter("getQuestionType");
})
isStudent.hears('NO-UZ', async (ctx) => {
    ctx.session.isStudent = ctx.message.text;
    console.log(ctx.session.isStudent)
    await ctx.reply('what you want to ask', {
        reply_markup: {
            keyboard: [
                ['uz-edu', 'uz-sale'],
                ['uz-other', 'uz-offer-compl']
            ],
            resize_keyboard: true,
            one_time_keyboard: true,
        },
    })
    await ctx.scene.leave("isStudent");
    await ctx.scene.enter("getQuestionType");
})


//******************************EN */



isStudent.hears('YES-EN', async (ctx) => {
    ctx.session.isStudent = ctx.message.text;
    console.log(ctx.session.isStudent)
    await ctx.reply('what you want to ask', {
        reply_markup: {
            keyboard: [
                ['en-edu', 'en-sale'],
                ['en-other', 'en-offer-compl']
            ],
            resize_keyboard: true,
            one_time_keyboard: true,
        },
    })
    await ctx.scene.leave("isStudent");
    await ctx.scene.enter("getQuestionType");
})
isStudent.hears('NO-EN', async (ctx) => {
    ctx.session.isStudent = ctx.message.text;
    console.log(ctx.session.isStudent)
    await ctx.reply('what you want to ask', {
        reply_markup: {
            keyboard: [
                ['en-edu', 'en-sale'],
                ['en-other', 'en-offer-compl']
            ],
            resize_keyboard: true,
            one_time_keyboard: true,
        },
    })
    await ctx.scene.leave("isStudent");
    await ctx.scene.enter("getQuestionType");
})



// isStudent.on("text", async (ctx) => {
//     // if (ctx.message.text === "◀️ Назад") {
//     //     return ctx.reply(
//     //         "Вы уже вернулись в самое начало. Введите, пожалуйста, свое имя"
//     //     );
//     // }

//     if (ctx.session.isStudent === 'YES-RU' || ctx.session.isStudent === 'NO-RU') {
//         ctx.reply(
//             "Введидте год рождения ENG example dd/mm/yyyy"
//             // {
//             //     reply_markup: {
//             //         keyboard: [["◀️ Назад"]],
//             //         resize_keyboard: true,
//             //         one_time_keyboard: true,
//             //     },
//             // }
//         );
//     }
//     if (ctx.session.lang === 'рус') {
//         ctx.reply("Введидте год рождения рус example dd/mm/yyyy");
//     }
//     if (ctx.session.lang === 'UZB') {
//         ctx.reply("Введидте год рождения UZB example dd/mm/yyyy");
//     }
//     // console.log(ctx.session.number)


// });



module.exports = isStudent