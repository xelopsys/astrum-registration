// const telegraf = require("telegraf");
const data = require("./core/data.js");
const Stage = require("telegraf/stage");
const { session } = require("telegraf/session");
const Scene = require("telegraf/scenes/base");
const { leave } = Stage;
const stage = new Stage();
const { composer, middleware } = require("./core/bot.js");
// const bot = new telegraf(data.token);
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
  ).then(r => console.log(r));
  console.log(ctx.chat.id)
  await ctx.scene.enter("getLang");
});

// composer.on('text', async (ctx) => {
//   await ctx.reply(`Please, to restart bot send command\n` + `/start`)
// })


middleware(composer);
