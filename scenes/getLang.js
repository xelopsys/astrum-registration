const Stage = require("telegraf/stage");
const { session } = require("telegraf/session");
const Scene = require("telegraf/scenes/base");
const { leave } = Stage;
const stage = new Stage();
const { composer, middleware } = require("../core/bot.js");

const getLang = new Scene("getLang");

getLang.on("text", async (ctx) => {
  ctx.session.lang = ctx.message.text;
  console.log(ctx.session.lang);
  if (ctx.session.lang === "🇺🇿O’zbekcha") {
    await ctx.reply("Iltimos, telefon raqamingizni jo’nating📱", {
      reply_markup: {
        keyboard: [[{ text: "📱 Raqamni jo`natish", request_contact: true }]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  }
  if (ctx.session.lang === "🇷🇺Русский") {
    await ctx.reply("Пожалуйста, отправьте свой контактный номер📱", {
      reply_markup: {
        keyboard: [[{ text: "📱 Отправить контакт", request_contact: true }]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  }
  if (ctx.session.lang === "🇬🇧English") {
    await ctx.reply("Please, send your contact number📱", {
      reply_markup: {
        keyboard: [[{ text: "📱 Send contact", request_contact: true }]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  }
  // console.log(ctx.session.userId)

  await ctx.scene.leave("getLang");
  await ctx.scene.enter("getNumber");
});

module.exports = getLang;
