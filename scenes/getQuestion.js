const Stage = require("telegraf/stage");
const { session } = require("telegraf/session");
const Scene = require("telegraf/scenes/base");
const { leave } = Stage;
// const stage = new Stage();
// const { composer, middleware } = require('../bot.js')
// const bot = new telegraf(data.token);

// const User = require('../database/user.model.js');

const getQuestion = new Scene("getQuestion");


getQuestion.on("text", async (ctx) => {
    // if (ctx.message.text === "◀️ Назад") {
    //     return ctx.reply(
    //         "Вы уже вернулись в самое начало. Введите, пожалуйста, свое имя"
    //     );
    // }
    ctx.session.question = ctx.message.text;
    console.log(ctx.session.question)
    if (ctx.session.lang === 'ENG') {
        ctx.reply(
            "is everything ok en",
            {
                reply_markup: {
                    keyboard: [["yes-en", "back-en"]],
                    resize_keyboard: true,
                    one_time_keyboard: true,
                },
            }
        );
    }
    if (ctx.session.lang === 'рус') {
        ctx.reply("is everything ok ru",
            {
                reply_markup: {
                    keyboard: [["yes-ru", "back-ru"]],
                    resize_keyboard: true,
                    one_time_keyboard: true,
                },
            });
    }
    if (ctx.session.lang === 'UZB') {
        ctx.reply("is everything ok uz",
            {
                reply_markup: {
                    keyboard: [["yes-uz", "back-uz"]],
                    resize_keyboard: true,
                    one_time_keyboard: true,
                },
            });
    }
    console.log(ctx.session.number)
    await ctx.scene.leave("getQuestion");
    await ctx.scene.enter("checkAll");

});



module.exports = getQuestion