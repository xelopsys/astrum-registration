const Stage = require("telegraf/stage");
const { session } = require("telegraf/session");
const Scene = require("telegraf/scenes/base");
const { leave } = Stage;
const { Markup, Extra } = require("telegraf");
// const stage = new Stage();
// const { composer, middleware } = require('../bot.js')
// const bot = new telegraf(data.token);

// const User = require('../database/user.model.js');

const aboutCourses = new Scene("aboutCourses");

aboutCourses.on("text", async (ctx) => {
  ctx.session.course = ctx.message.text;
  if (ctx.session.course === "Fullstack") {
    if (ctx.session.lang === "🇷🇺Русский") {
      await ctx.reply(
        `
            
            `,

        {
          reply_markup: {
            keyboard: [["Я хочу зарегистрироваться"]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        }
      );
      await ctx.scene.leave("aboutCourse");
      await ctx.scene.enter("wantRegister");
    }

    if (ctx.session.lang === "🇺🇿O’zbekcha") {
      await ctx.reply(
        `
            
            `,

        {
          reply_markup: {
            keyboard: [["Ro`yxatdan o`tishni xohlayman"]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        }
      );
      await ctx.scene.leave("aboutCourse");
      await ctx.scene.enter("wantRegister");
    }

    if (ctx.session.lang === "🇬🇧English") {
      await ctx.reply(
        `
            
            `,

        {
          reply_markup: {
            keyboard: [["I want to register"]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        }
      );
      await ctx.scene.leave("aboutCourse");
      await ctx.scene.enter("wantRegister");
    }
  }
});

module.exports = aboutCourses;
