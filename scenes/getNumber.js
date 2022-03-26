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
  console.log(ctx.session.number);
  if (ctx.session.lang === "🇷🇺Русский") {
    await ctx.replyWithHTML(
      "Пожалуйста, пришлите ваше полное имя, имя и фамилию"
    );
    console.log(ctx.session.lang);
  }
  if (ctx.session.lang === "🇺🇿O’zbekcha") {
    await ctx.replyWithHTML(
      `Iltimos, to'liq ismingizni, ya'ni ism va familya, jo'nating`
    );
  }
  if (ctx.session.lang === "🇬🇧English") {
    await ctx.replyWithHTML("Please, send your full name, name and surname");
  }
  await ctx.scene.leave("getNumber");
  await ctx.scene.enter("getName");
});

module.exports = getNumber;
