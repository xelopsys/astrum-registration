const Stage = require("telegraf/stage");
const { session } = require("telegraf/session");
const Scene = require("telegraf/scenes/base");
const { leave } = Stage;
// const stage = new Stage();
// const { composer, middleware } = require('../bot.js')
// const bot = new telegraf(data.token);

const getNumber = new Scene("getNumber");

getNumber.on("contact", async (ctx) => {
  ctx.session.number = ctx.message.contact.phone_number;
  // console.log(ctx.session.number);
  if (ctx.session.lang === "🇷🇺Русский") {
    await ctx.replyWithHTML(
      "Пожалуйста, пришлите ваше полное имя, имя и фамилию"
    );
    // console.log(ctx.session.lang);
  }
  if (ctx.session.lang === "🇺🇿O’zbekcha") {
    await ctx.replyWithHTML(
      `Iltimos, to'liq ismingizni, ya'ni ism va familya, jo'nating`
    );
  }
  if (ctx.session.lang === "🇬🇧English") {
    await ctx.replyWithHTML("Please, send your full name, name and surname");
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
    await ctx.scene.leave("getNumber");
    await ctx.scene.enter("getLang");
  }

  await ctx.scene.leave("getNumber");
  await ctx.scene.enter("getName");
});

module.exports = getNumber;
