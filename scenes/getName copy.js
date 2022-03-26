const Stage = require("telegraf/stage");
const { session } = require("telegraf/session");
const Scene = require("telegraf/scenes/base");
const { leave } = Stage;
const { Markup, Extra } = require("telegraf");
// const stage = new Stage();
// const { composer, middleware } = require('../bot.js')
// const bot = new telegraf(data.token);

// const User = require('../database/user.model.js');

const getName = new Scene("getName");

getName.on("text", async (ctx) => {
  // if (ctx.message.text === "◀️ Назад") {
  //     return ctx.reply(
  //         "Вы уже вернулись в самое начало. Введите, пожалуйста, свое имя"
  //     );
  // }

  ctx.session.name = ctx.message.text;
  if (ctx.session.lang === "🇷🇺Русский") {
    ctx.replyWithHTML(
      `Пожалуйста, отправьте свой год рождения в формате YYYY 4 цифрами`,
      {
        // reply_markup: Markup.inlineKeyboard([
        //     [
        //         Markup.callbackButton(`back`, `back`),],
        // ]),
      }
    );
  }
  if (ctx.session.lang === "🇺🇿O’zbekcha") {
    ctx.reply(
      "Iltimos, tug'ilgan yilingizni YYYY kabi 4 ta raqam bilan yuboring"
    );
  }
  if (ctx.session.lang === "🇬🇧English") {
    ctx.reply("Please, send your year of birth like YYYY in 4 digits");
  }
  console.log(ctx.session.number);
  await ctx.scene.leave("getName");
  await ctx.scene.enter("getDateOfBirth");
});

// getName.action('back', async (ctx) => {
//     await ctx.reply('asdasd')
//     await ctx.scene.leave("getName");
//     await ctx.scene.enter("getDateOfBirth");

// })

module.exports = getName;
