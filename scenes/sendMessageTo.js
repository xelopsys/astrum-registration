// const { session } = require('telegraf')
const { composer, middleware } = require("../core/bot");
const data = require("../core/data");
const Stage = require("telegraf/stage");
const { session } = require("telegraf/session");
const Scene = require("telegraf/scenes/base");
const { leave } = Stage;
const { Markup, Extra } = require("telegraf");



const sendMessageTo = new Scene("sendMessageTo");
// const { session } = require('telegraf')

// let user_id;
sendMessageTo.on("text", async (ctx) => {
  if (ctx.session?.replyId) {
    await ctx.telegram
      .sendMessage(
        ctx.session.replyId,
        `Hi there 👋! \nHere is reply to your message: \n<i>${ctx.message.text}</i>`,
        {
          parse_mode: "HTML",
        }
      )
      .then();
    ctx.session.replyId = null;
    return;
  }
  ctx.session.send = ctx.message.text
  ctx.session.userId = ctx.from.id;
  ctx.session.username = ctx.from.username;
  if (ctx.session.send === "Ma'lumotlarni jo'natish" || ctx.session.send === "Send information" || ctx.session.send === "Отправить данные") {
    if (ctx.from.id !== 5145112024) {
      if (ctx.session.questionType === "🖥об образовании" || ctx.session.questionType === "🖥O`qish haqida" || ctx.session.questionType === "🖥about education") {
        await ctx.telegram
          .sendMessage(
            data.education,
            `Для кого: ${ctx.session.questionType}\n` +
            `Выбранный язык: ${ctx.session.lang}\n` +
            `Имя: ${ctx.session.name}\n` +
            `Год рождения: ${ctx.session.year}\n` +
            `Телефонный номер: ${ctx.session.number}\n` +
            `Является студентом Astrum: ${ctx.session.isStudent}\n` +
            `Вопрос пользователя: ${ctx.session.question}\n`,
            {
              parse_mode: "HTML",
              reply_markup: {
                inline_keyboard: [
                  [{ text: "Reply", callback_data: "reply_" + ctx.session.userId }],
                ],
                reply_markup: true,
                one_time_keyboard: true,
              },
            }
          )
          .catch()
          .then();
      }

    }

    if (ctx.session.questionType === "💸about payments" || ctx.session.questionType === "💸to`lovlar haqida" || ctx.session.questionType === "💸об оплате" || ctx.session.questionType === "💸об оплате курсов" || ctx.session.questionType === "💸o`quv kurslari to`lovi haqida" || ctx.session.questionType === "💸about education courses payments") {
      await ctx.telegram
        .sendMessage(
          data.sales,
          `Для кого: ${ctx.session.questionType}\n` +
          `Выбранный язык: ${ctx.session.lang}\n` +
          `Имя: ${ctx.session.name}\n` +
          `Год рождения: ${ctx.session.year}\n` +
          `Телефонный номер: ${ctx.session.number}\n` +
          `Является студентом Astrum: ${ctx.session.isStudent}\n` +
          `Вопрос пользователя: ${ctx.session.question}\n`,
          {
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [{ text: "Reply", callback_data: "reply_" + ctx.session.userId }],
              ],
              reply_markup: true,
              one_time_keyboard: true,
            },
          }
        )
        .catch()
        .then();
    }


    if (ctx.session.questionType === "другое" || ctx.session.questionType === "предложение и жалобы" || ctx.session.questionType === "boshqa" || ctx.session.questionType === "taklif va shikoyat" || ctx.session.questionType === "other" || ctx.session.questionType === "offer and complains") {
      await ctx.telegram
        .sendMessage(
          data.admin,
          `Для кого: ${ctx.session.questionType}\n` +
          `Выбранный язык: ${ctx.session.lang}\n` +
          `Имя: ${ctx.session.name}\n` +
          `Год рождения: ${ctx.session.year}\n` +
          `Телефонный номер: ${ctx.session.number}\n` +
          `Является студентом Astrum: ${ctx.session.isStudent}\n` +
          `Вопрос пользователя: ${ctx.session.question}\n`,
          {
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [{ text: "Reply", callback_data: "reply_" + ctx.session.userId }],
              ],
              reply_markup: true,
              one_time_keyboard: true,
            },
          }
        )
        .catch()
        .then();
    }
  }

  if (ctx.session.lang === '🇺🇿O’zbekcha') {
    await ctx.reply('Rahmat! Imkon qadar tez orada biz sizga javob yo`llaymiz. Orqaga qaytishingiz mumkin.', {
      reply_markup: {
        keyboard: [["orqaga"]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    })
    await ctx.scene.leave('sendMessageTo')
    await ctx.scene.enter('getBack')
  }
  if (ctx.session.lang === '🇷🇺Русский') {
    await ctx.reply('Спасибо! Мы ответим вам как можно скорее. Вы можете вернуться.', {
      reply_markup: {
        keyboard: [["назад"]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    })
    await ctx.scene.leave('sendMessageTo')
    await ctx.scene.enter('getBack')
  }
  if (ctx.session.lang === '🇬🇧English') {
    await ctx.reply('Thanks! We will reply to you as soon as possible. You can go back.', {
      reply_markup: {
        keyboard: [["back"]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    })
    await ctx.scene.leave('sendMessageTo')
    await ctx.scene.enter('getBack')

    // await ctx.scene.leave('sendMessageTo')
  }

  // await ctx.scene.enter('reply')
});

sendMessageTo.action(/reply_(.+)/, async (ctx) => {
  if (!ctx.session) {
    ctx.session = {};
  }
  ctx.session.replyId = ctx.match[1];
  // ctx.session.admin = ctx.chat.username
  await ctx.reply(
    `Send me your answer...  Your answer will be after <i>'Hi there 👋! You gave a '</i>`
  );
  await ctx.scene.leave('sendMessageTo')

});


module.exports = sendMessageTo
