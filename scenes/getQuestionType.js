const Stage = require("telegraf/stage");
const { session } = require("telegraf/session");
const Scene = require("telegraf/scenes/base");
const { leave } = Stage;
// const stage = new Stage();
// const { composer, middleware } = require('../bot.js')
// const bot = new telegraf(data.token);

const getQuestionType = new Scene("getQuestionType");

getQuestionType.on("text", async (ctx) => {
  ctx.session.questionType = ctx.message.text;
  if (
    ctx.session.isStudent === "ha" ||
    ctx.session.isStudent === "yes" ||
    ctx.session.isStudent === "да"
  ) {
    if (ctx.session.lang === "🇷🇺Русский") {
      if (ctx.session.questionType === "🖥об образовании") {
        await ctx.reply("Что вы хотите спросить об образовании Astrum", {
          reply_markup: {
            keyboard: [["назад"]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
      }
      if (ctx.session.questionType === "💸об оплате") {
        await ctx.reply("Что вы хотите спросить об оплате Astrum", {
          reply_markup: {
            keyboard: [["назад"]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
      }
      if (ctx.session.questionType === "другое") {
        await ctx.reply("Какой у вас вопрос?", {
          reply_markup: {
            keyboard: [["назад"]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
      }
      if (ctx.session.questionType === "предложение и жалобы") {
        await ctx.reply(
          "что вы хотите предложить Astrum или пожаловаться на Astrum?",
          {
            reply_markup: {
              keyboard: [["назад"]],
              resize_keyboard: true,
              one_time_keyboard: true,
            },
          }
        );
      }
      await ctx.scene.leave("getQuestionType");
      await ctx.scene.enter("getQuestion");
    }

    if (ctx.session.lang === "🇺🇿O’zbekcha") {
      if (ctx.session.questionType === "🖥O'qish haqida") {
        await ctx.reply("O`qish haqida qanday savolingiz bor?", {
          reply_markup: {
            keyboard: [["orqaga"]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
      }
      if (ctx.session.questionType === "💸to'lovlar haqida") {
        await ctx.reply("To`lovlar masalasida qanday savolingiz bor", {
          reply_markup: {
            keyboard: [["orqaga"]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
      }
      if (ctx.session.questionType === "boshqa") {
        await ctx.reply("Qiziqtirayotgan savolingizni yozib qoldiring.", {
          reply_markup: {
            keyboard: [["orqaga"]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
      }
      if (ctx.session.questionType === "taklif va shikoyat") {
        await ctx.reply("Qanday shikoyat va takliflaringiz bor?", {
          reply_markup: {
            keyboard: [["orqaga"]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
      }
      await ctx.scene.leave("getQuestionType");
      await ctx.scene.enter("getQuestion");
    }

    if (ctx.session.lang === "🇬🇧English") {
      if (ctx.session.questionType === "🖥about education") {
        await ctx.reply("What you are interested in to ask about education?", {
          reply_markup: {
            keyboard: [["back"]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
      }
      if (ctx.session.questionType === "💸about payments") {
        await ctx.reply(
          "What kind of question you want to ask about payments?",
          {
            reply_markup: {
              keyboard: [["back"]],
              resize_keyboard: true,
              one_time_keyboard: true,
            },
          }
        );
      }
      if (ctx.session.questionType === "other") {
        await ctx.reply("Insert your question, you are interested in, to ask", {
          reply_markup: {
            keyboard: [["back"]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
      }
      if (ctx.session.questionType === "offer and complains") {
        await ctx.reply("what you want to offer to Astrum or complain about?", {
          reply_markup: {
            keyboard: [["back"]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
      }
      await ctx.scene.leave("getQuestionType");
      await ctx.scene.enter("getQuestion");
    }

    await ctx.scene.leave("getQuestionType");
    await ctx.scene.enter("getQuestion");
  }

  if (
    ctx.session.isStudent === "yo'q" ||
    ctx.session.isStudent === "no" ||
    ctx.session.isStudent === "нет"
  ) {
    if (ctx.session.lang === "🇷🇺Русский") {
      if (ctx.session.questionType === "🖥об образовании") {
        await ctx.reply("О каком курсе вы хотите получить информацию?", {
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Fullstack",
                  url: "https://astrum.uz/subjects/full-stack",
                },
                {
                  text: "Data Science",
                  url: "https://astrum.uz/subjects/data-science",
                },
              ],
              [
                {
                  text: "Software Engineering",
                  url: "https://astrum.uz/subjects/software-engineering",
                },
              ],
              [{ text: "назад", callback_data: "back" }],
            ],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
        await ctx.scene.leave("getQuestionType");
        // await ctx.scene.enter("getQuestion");
      }
      if (ctx.session.questionType === "💸об оплате курсов") {
        await ctx.reply("Что вас интересует об оплате?", {
          reply_markup: {
            keyboard: [["назад"]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
        await ctx.scene.leave("getQuestionType");
        await ctx.scene.enter("getQuestion");
      }
      if (ctx.session.questionType === "другое") {
        await ctx.reply("Какой у вас вопрос?", {
          reply_markup: {
            keyboard: [["назад"]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
        await ctx.scene.leave("getQuestionType");
        await ctx.scene.enter("getQuestion");
      }
    }

    if (ctx.session.lang === "🇺🇿O’zbekcha") {
      if (ctx.session.questionType === "🖥o'quv kurslari haqida") {
        await ctx.reply("Qaysi yo`nalish haqida ma'lumot olmoqchisiz?", {
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Fullstack",
                  url: "https://astrum.uz/subjects/full-stack",
                },
                {
                  text: "Data Science",
                  url: "https://astrum.uz/subjects/data-science",
                },
              ],
              [
                {
                  text: "Software Engineering",
                  url: "https://astrum.uz/subjects/software-engineering",
                },
              ],
              [{ text: "orqaga", callback_data: "back" }],
            ],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
      }
      if (ctx.session.questionType === "💸o'quv kurslari to`lovi haqida") {
        await ctx.reply("To`lovlar masalasida qanday savolingiz bor", {
          reply_markup: {
            keyboard: [["orqaga"]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
        await ctx.scene.leave("getQuestionType");
        await ctx.scene.enter("getQuestion");
      }
      if (ctx.session.questionType === "boshqa") {
        await ctx.reply("Qiziqtirayotgan savolingizni yozib qoldiring.", {
          reply_markup: {
            keyboard: [["orqaga"]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
        await ctx.scene.leave("getQuestionType");
        await ctx.scene.enter("getQuestion");
      }
    }

    if (ctx.session.lang === "🇬🇧English") {
      if (ctx.session.questionType === "🖥about education courses") {
        await ctx.reply("About what course you want to get information?", {
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Fullstack",
                  url: "https://astrum.uz/subjects/full-stack",
                },
                {
                  text: "Data Science",
                  url: "https://astrum.uz/subjects/data-science",
                },
              ],
              [
                {
                  text: "Software Engineering",
                  url: "https://astrum.uz/subjects/software-engineering",
                },
              ],
              [{ text: "back", callback_data: "back" }],
            ],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
      }
      if (ctx.session.questionType === "💸about education courses payments") {
        await ctx.reply("What do you want to ask about payment of courses?", {
          reply_markup: {
            keyboard: [["back"]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
        await ctx.scene.leave("getQuestionType");
        await ctx.scene.enter("getQuestion");
      }
      if (ctx.session.questionType === "other") {
        await ctx.reply("What you are interested in? Insert your question", {
          reply_markup: {
            keyboard: [["back"]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
        await ctx.scene.leave("getQuestionType");
        await ctx.scene.enter("getQuestion");
      }
    }
    if (ctx.message.text === "/start") {
      await ctx.reply(
        `Iltimos, davom ettirish uchun qulay tilni tanlang.\n\n` +
          `Чтобы продолжать , пожалуйста, сперва выберите язык.\n\n` +
          `Please, choose tha language to continue`,
        {
          reply_markup: {
            keyboard: [["🇺🇿O’zbekcha", "🇷🇺Русский", "🇬🇧English"]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        }
      );
      // console.log(ctx.chat.id)
      await ctx.scene.leave("getQuestionType");
      await ctx.scene.enter("getLang");
    }

    await ctx.scene.leave("getQuestionType");
    // await ctx.scene.enter("getBack");
    await ctx.scene.enter("getQuestion");
  }
});

module.exports = getQuestionType;
