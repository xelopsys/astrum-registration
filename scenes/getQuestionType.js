const Stage = require("telegraf/stage");
const { session } = require("telegraf/session");
const Scene = require("telegraf/scenes/base");
const { leave } = Stage;
// const stage = new Stage();
// const { composer, middleware } = require('../bot.js')
// const bot = new telegraf(data.token);


const getQuestionType = new Scene("getQuestionType");

getQuestionType.on('text', async (ctx) => {
    ctx.session.questionType = ctx.message.text

    if (ctx.session.lang === 'рус') {
        if (ctx.session.questionType === 'ru-edu') {
            await ctx.reply('What u want to ask about education of Astrum ru', {
                reply_markup: {
                    keyboard: [['back-ru']],
                    resize_keyboard: true,
                    one_time_keyboard: true,
                }
            })
        }
        if (ctx.session.questionType === 'ru-sale') {
            await ctx.reply('What u want to ask about payment of Astrum ru', {
                reply_markup: {
                    keyboard: [['back-ru']],
                    resize_keyboard: true,
                    one_time_keyboard: true,
                }
            })
        }
        if (ctx.session.questionType === 'ru-other') {
            await ctx.reply('What u want to ask about of Astrum ru', {
                reply_markup: {
                    keyboard: [['back-ru']],
                    resize_keyboard: true,
                    one_time_keyboard: true,
                }
            })
        }
        if (ctx.session.questionType === 'ru-offer-compl') {
            await ctx.reply('what u want to offer to Astrum or complain about Astrum ru', {
                reply_markup: {
                    keyboard: [['back-ru']],
                    resize_keyboard: true,
                    one_time_keyboard: true,
                }
            })
        }
    }



    if (ctx.session.lang === 'UZB') {
        if (ctx.session.questionType === 'uz-edu') {
            await ctx.reply('What u want to ask about education of Astrum uz', {
                reply_markup: {
                    keyboard: [['back-uz']],
                    resize_keyboard: true,
                    one_time_keyboard: true,
                }
            })
        }
        if (ctx.session.questionType === 'uz-sale') {
            await ctx.reply('What u want to ask about payment of Astrum uz', {
                reply_markup: {
                    keyboard: [['back-uz']],
                    resize_keyboard: true,
                    one_time_keyboard: true,
                }
            })
        }
        if (ctx.session.questionType === 'uz-other') {
            await ctx.reply('What u want to ask about of Astrum uz', {
                reply_markup: {
                    keyboard: [['back-uz']],
                    resize_keyboard: true,
                    one_time_keyboard: true,
                }
            })
        }
        if (ctx.session.questionType === 'uz-offer-compl') {
            await ctx.reply('what u want to offer to Astrum or complain about Astrum uz', {
                reply_markup: {
                    keyboard: [['back-uz']],
                    resize_keyboard: true,
                    one_time_keyboard: true,
                }
            })
        }
    }




    if (ctx.session.lang === 'ENG') {
        if (ctx.session.questionType === 'en-edu') {
            await ctx.reply('What u want to ask about education of Astrum en', {
                reply_markup: {
                    keyboard: [['back-en']],
                    resize_keyboard: true,
                    one_time_keyboard: true,
                }
            })
        }
        if (ctx.session.questionType === 'en-sale') {
            await ctx.reply('What u want to ask about payment of Astrum en', {
                reply_markup: {
                    keyboard: [['back-en']],
                    resize_keyboard: true,
                    one_time_keyboard: true,
                }
            })
        }
        if (ctx.session.questionType === 'en-other') {
            await ctx.reply('What u want to ask about of Astrum en', {
                reply_markup: {
                    keyboard: [['back-en']],
                    resize_keyboard: true,
                    one_time_keyboard: true,
                }
            })
        }
        if (ctx.session.questionType === 'en-offer-compl') {
            await ctx.reply('what u want to offer to Astrum or complain about Astrum en', {
                reply_markup: {
                    keyboard: [['back-en']],
                    resize_keyboard: true,
                    one_time_keyboard: true,
                }
            })
        }
    }
    await ctx.scene.leave('getQuestionType');
    await ctx.scene.enter('getQuestion');


})


// getQuestionType.on('text', async (ctx) => {
//     ctx.session.number = ctx.message.contact.phone_number
//     console.log(ctx.session.number)
//     if (ctx.session.lang == 'рус') {
//         await ctx.replyWithHTML('Please send me ur FIO rus')
//         console.log(ctx.session.lang)
//     }
//     if (ctx.session.lang == 'UZB') {
//         await ctx.replyWithHTML('please send me ur FIO uzb')
//     }
//     if (ctx.session.lang == 'ENG') {
//         await ctx.replyWithHTML('Please send me ur FIO ENG')
//     }


// })

module.exports = getQuestionType