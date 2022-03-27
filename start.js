// const telegraf = require("telegraf");
const data = require("./core/data.js");
const Stage = require("telegraf/stage");
const { session } = require("telegraf/session");
const Scene = require("telegraf/scenes/base");
const { leave } = Stage;
const stage = new Stage();
const axios = require('axios')
// const express = require('express');
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
const URL = data.url
const { composer, middleware } = require("./core/bot.js");

const {
  getLang,
  getNumber,
  getName,
  getDateOfBirth,
  isStudent,
  getQuestionType,
  getQuestion,
  checkAll,
  getBack,
  sendMessageTo,
} = require("./scenes/index.js");


stage.register(
  getLang,
  getNumber,
  getName,
  getDateOfBirth,
  isStudent,
  getQuestionType,
  getQuestion,
  checkAll,
  getBack,
  sendMessageTo,
);

composer.use(stage.middleware());

// composer.hears("️⬅️ На главную", (ctx) => {
//     ctx.reply("Введите фамилию, имя и отчество", {
//         reply_markup: { remove_keyboard: true },
//     });
//     ctx.scene.enter("getName");
// });

composer.start(async (ctx) => {

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
  await ctx.scene.enter("getLang");


});

// composer.on('text', async (ctx) => {
//   await ctx.reply(`Please, to restart bot send command\n` + `/start`)
// })
// composer.on('text', async (ctx, next) => {
//   await ctx.reply('message is sent!')
//   await leave()
// })

middleware(composer);
