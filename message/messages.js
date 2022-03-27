// const { session } = require('telegraf')
const { composer, middleware } = require("../core/bot");
const data = require("../core/data");
const UserTg = require('../database/user.model.js');
const { session } = require("telegraf/session");
const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const URL = data.url



let user_id;
composer.on("text", async (ctx) => {
  let users = await axios.get(URL).then(res => { return res.data })
  if (ctx.session?.replyId) {
    console.log(ctx.session.replyId)
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

      await UserTg.findOneAndUpdate({ user_id: ctx.session.replyId }, { $addToSet: { answer: ctx.message.text } }, { new: true, upsert: true })
      console.log('success')
    } catch (err) {
      console.log(err)
    }

    await ctx.telegram
      .sendMessage(
        ctx.session.replyId,
        `Hi ${ctx.from.username} ${ctx.chat.id}👋! \nHere is reply to your message: \n<i>${ctx.message.text}</i>`,
        {
          parse_mode: "HTML",
        }
      )




    ctx.session.replyId = null;
    return;
  }

  user_id = ctx.from.id;
  // let username = ctx.from.username;

});

composer.action(/reply_(.+)/, async (ctx) => {
  if (!ctx.session) {
    ctx.session = {};
  }

  ctx.session.replyId = ctx.match[1];
  // let data = await axios.get(URL).then(res => { return res.data })
  // console.log(data)
  // console.log(data.data.data.user_id)
  await ctx.reply(
    `Send me your answer...${ctx.session.replyId} ${ctx.chat.message}Your answer will be after <i>'Hi there 👋! You gave a '</i>`
  );
  return ctx.editMessageText('asdsadsd')
});



middleware(composer);
