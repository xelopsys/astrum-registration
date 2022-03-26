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
// 🗣
isStudent.hears("да", async (ctx) => {
  ctx.session.isStudent = ctx.message.text;
  console.log(ctx.session.isStudent);
  await ctx.reply("что вы ищете?", {
    reply_markup: {
      keyboard: [
        ["🖥об образовании", "💸об оплате"],
        ["другое", "предложение и жалобы"],
      ],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
  await ctx.scene.leave("isStudent");
  await ctx.scene.enter("getQuestionType");
});
isStudent.hears("нет", async (ctx) => {
  ctx.session.isStudent = ctx.message.text;
  console.log(ctx.session.isStudent);
  await ctx.reply("что вас интересует?", {
    reply_markup: {
      keyboard: [["🖥об образовании", "💸об оплате курсов"], ["другое"]],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
  await ctx.scene.leave("isStudent");
  await ctx.scene.enter("getQuestionType");
});

//******************************UZ */
isStudent.hears("ha", async (ctx) => {
  ctx.session.isStudent = ctx.message.text;
  console.log(ctx.session.isStudent);
  await ctx.reply("nimani izlayapsiz?", {
    reply_markup: {
      keyboard: [
        ["🖥O`qish haqida", "💸to`lovlar haqida"],
        ["boshqa", "taklif va shikoyat"],
      ],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
  await ctx.scene.leave("isStudent");
  await ctx.scene.enter("getQuestionType");
});
isStudent.hears("yo'q", async (ctx) => {
  ctx.session.isStudent = ctx.message.text;
  console.log(ctx.session.isStudent);
  await ctx.reply("nima sizni qiziqtiryapti?", {
    reply_markup: {
      keyboard: [
        ["🖥o`quv kurslari haqida"],
        ["💸o`quv kurslari to`lovi haqida"],
        ["boshqa"],
      ],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
  await ctx.scene.leave("isStudent");
  await ctx.scene.enter("getQuestionType");
});

//******************************EN */

isStudent.hears("yes", async (ctx) => {
  ctx.session.isStudent = ctx.message.text;
  console.log(ctx.session.isStudent);
  await ctx.reply("what you are seeking for?", {
    reply_markup: {
      keyboard: [
        ["🖥about education", "💸about payments"],
        ["other", "offer and complains"],
      ],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
  await ctx.scene.leave("isStudent");
  await ctx.scene.enter("getQuestionType");
});
isStudent.hears("no", async (ctx) => {
  ctx.session.isStudent = ctx.message.text;
  console.log(ctx.session.isStudent);
  await ctx.reply("what you are interested in?", {
    reply_markup: {
      keyboard: [
        ["🖥about education courses"],
        ["💸about education courses payments"],
        ["other"],
      ],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
  await ctx.scene.leave("isStudent");
  await ctx.scene.enter("getQuestionType");
});

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

module.exports = isStudent;
