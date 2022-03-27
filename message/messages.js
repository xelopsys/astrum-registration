// const { session } = require('telegraf')
const { composer, middleware } = require("../core/bot");
const data = require("../core/data");
const UserTg = require("../database/user.model.js");
const { session } = require("telegraf/session");
const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const URL = data.url;

let user_id;
composer.on("text", async (ctx) => {
  let users = await axios.get(URL).then((res) => {
    return res.data;
  });
  if (ctx.session.replyId) {
    // console.log(ctx.session.replyId)
    // console.log(ctx.session.replyId);
    // console.log(ctx.message.text)
    // ctx.session.answer = ctx.message.text
    // for (let i in data.data) {
    //   if (data.data[i].user_id === ctx.session.replyId) {

    //     })
    //   }
    //   // console.log(data.data[i].answer)
    // }
    // for (let i in data.data) {
    //   if (data.data[i].user_id === ctx.session.replyId) {
    //     if (data.data[i].answer === "text") {
    //       await UserTg.updateOne({ answer: ctx.session.answer }, function (err) {
    //         if (err) {
    //           console.log(err.message)
    //         } else {
    //           console.log('success')
    //         }
    //       })
    //     }
    //   }
    // }
    // ctx.session.answer = ctx.message.text
    // console.log(ctx.sesion.answer)

    try {
      await UserTg.findOneAndUpdate(
        { user_id: ctx.session.replyId },
        { $addToSet: { answer: ctx.message.text } },
        { new: true, upsert: true }
      );
      console.log("success");
    } catch (err) {
      console.log(err);
    }

    await ctx.telegram.sendMessage(
      ctx.session.replyId,
      `Hi ${ctx.from.username} 👋! \nHere is answer to your question: \n<i>${ctx.message.text}</i>`,
      {
        parse_mode: "HTML",
      }
    );

    ctx.session.replyId = null;
    return;
  }

  user_id = ctx.from.id;
  // let username = ctx.from.username;
});

composer.action(/reply_(.+)/, async (ctx) => {
  let users_data = await axios.get(URL).then((res) => {
    return res.data;
  });
  if (!ctx.session) {
    ctx.session = {};
  }

  ctx.session.replyId = ctx.match[1];
  // let data = await axios.get(URL).then(res => { return res.data })
  // console.log(data)
  // console.log(data.data.data.user_id)
  await ctx.reply(
    `${ctx.from.username}, Пожалуйста, отправьте свой ответ данному "${ctx.session.replyId}" пользователю.`
  );

  await ctx.editMessageText(`
  ${ctx.from.username} принимал вопрос от пользователя: ${ctx.session.replyId}
  `)
  // for (let i in users_data.data) {
  //   if (users_data.data[i] === ctx.session.replyId) {
  //     await ctx.editMessageText(
  //       `ID: ${ctx.session.replyId}\n` +
  //       `Для кого:` + users_data.data[i].questionType[i] + `\n` +
  //       `Выбранный язык: ${users_data.data[i].language}\n` +
  //       `Имя: ${users_data.data[i].name}\n` +
  //       `Год рождения: ${users_data.data[i].dateOfBirth}\n` +
  //       `Телефонный номер: ${users_data.data[i].phoneNumber}\n` +
  //       `Является студентом Astrum: ${users_data.data[i].isStudent}\n` +
  //       `Вопрос пользователя: ${users_data.data[i].question[i]}\n` +
  //       `Answer of admin: ${users_data.data[i].answer[i]}`,
  //     );
  //   }
  // }
});

middleware(composer);
