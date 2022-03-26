const Stage = require("telegraf/stage");
const { session } = require("telegraf/session");
const Scene = require("telegraf/scenes/base");
const { leave } = Stage;
// const stage = new Stage();
// const { composer, middleware } = require('../bot.js')
// const bot = new telegraf(data.token);

// const User = require('../database/user.model.js');

const getQuestion = new Scene("getQuestion");

getQuestion.hears(["back", "orqaga", "назад"], async (ctx) => {
  ctx.session.back = ctx.message.text;


  //english****


  if (ctx.session.lang === "🇬🇧English") {
    if (ctx.session.isStudent === "yes") {
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
    }
    if (ctx.session.isStudent === "no") {
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
    }
    await ctx.scene.leave("getQuestion");
    await ctx.scene.enter("getQuestionType");
  }

  //uzbek****


  if (ctx.session.lang === "🇺🇿O’zbekcha") {
    if (ctx.session.isStudent === "ha") {
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
    }
    if (ctx.session.isStudent === "yo'q") {
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
    }
    await ctx.scene.leave("getQuestion");
    await ctx.scene.enter("getQuestionType");
  }

  //russian****

  if (ctx.session.lang === "🇷🇺Русский") {
    if (ctx.session.isStudent === "да") {
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
    }
    if (ctx.session.isStudent === "нет") {
      await ctx.reply("что вас интересует?", {
        reply_markup: {
          keyboard: [
            ["🖥об образовании", "💸об оплате курсов"],
            ["другое"],
          ],
          resize_keyboard: true,
          one_time_keyboard: true,
        },
      });
    }
    await ctx.scene.leave("getQuestion");
    await ctx.scene.enter("getQuestionType");
  }
});


getQuestion.on("text", async (ctx) => {
  // if (ctx.message.text === "◀️ Назад") {
  //     return ctx.reply(
  //         "Вы уже вернулись в самое начало. Введите, пожалуйста, свое имя"
  //     );
  // }

  ctx.session.question = ctx.message.text;
  // if (ctx.session.question === 'back' || ctx.session.question === 'orqaga' || ctx.session.question === 'назад') {
  //     await ctx.scene.leave('getQuestion')
  //     await ctx.scene.enter('getQuestion')
  // }

  console.log(ctx.session.question);
  if (
    ctx.session.back !== "back" ||
    ctx.session.back !== "orqaga" ||
    ctx.session.back !== "назад"
  ) {
    if (ctx.session.lang === "🇬🇧English") {
      ctx.reply("Every information, that is sent, is correct?", {
        reply_markup: {
          keyboard: [["yes", "back"]],
          resize_keyboard: true,
          one_time_keyboard: true,
        },
      });
    }
    if (ctx.session.lang === "🇷🇺Русский") {
      ctx.reply("Каждая отправляемая информация верна?", {
        reply_markup: {
          keyboard: [["да", "назад"]],
          resize_keyboard: true,
          one_time_keyboard: true,
        },
      });
    }
    if (ctx.session.lang === "🇺🇿O’zbekcha") {
      ctx.reply("Har bir yuborilgan ma'lumot to'g'rimi?", {
        reply_markup: {
          keyboard: [["ha", "orqaga"]],
          resize_keyboard: true,
          one_time_keyboard: true,
        },
      });
    }
    // console.log(ctx.session.number)
    await ctx.scene.leave("getQuestion");
    // await ctx.scene.enter("getQuestion");
    await ctx.scene.enter("checkAll");
  }
});

module.exports = getQuestion;
