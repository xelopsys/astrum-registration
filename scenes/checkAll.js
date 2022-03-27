const data = require("../core/data.js");
const Stage = require("telegraf/stage");
const { session } = require("telegraf/session");
const Scene = require("telegraf/scenes/base");
const { leave } = Stage;
const { composer, middleware } = require("../core/bot");
const pkg = require('axios')
const axios = pkg;
const express = require("express");
const app = express();
const URL = data.url;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const UserTg = require("../database/user.model.js");

const checkAll = new Scene("checkAll");

const mongoose = require("mongoose");
const main = async () => {
  const URI = `mongodb+srv://xelopsys:xelopsys@astrum.dfoka.mongodb.net/astrum?retryWrites=true&w=majority`;
  await mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((result) => {
      console.log("Connected to db");
    });

  // app.get('/', (req, res) => {
  //     res.sendFile(__dirname + '/doc/index.html');
  // })
  // app.post('/user/create', async (req, res) => {
  //     const { name, email, dateOfBirth, password } = req.body;
  //     const hasPassword = await bcrypt.hash(password, 10);
  //     try {
  //         const user = await User.create({ name, email, dateOfBirth, password: hasPassword });
  //         res.json({ data: user });
  //     } catch (err) {
  //         console.log(err.message);
  //         res.status(501).json({ error: err })
  //     }
  // })

  checkAll.hears(["back", "orqaga", "назад"], async (ctx) => {
    ctx.session.back = ctx.message.text;

    //english****
    try {
      await UserTg.findOneAndUpdate({
        user_id: ctx.session.user_id,
        questionType: ctx.session.questionType,
        question: ctx.session.question,
      });
      console.log("updated");
    } catch (err) {
      console.log(err.message);
    }

    if (ctx.session.lang === "🇬🇧English") {
      if (ctx.session.isStudent === "yes") {
        await ctx.reply("what you are seeking for?", {
          reply_markup: {
            keyboard: [
              ["🖥about education", "💸about payments"],
              ["other", "offer and complains"],
            ],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
      }
      if (ctx.session.isStudent === "no") {
        await ctx.reply("what you are interested in?", {
          reply_markup: {
            keyboard: [
              ["🖥about education courses"],
              ["💸about education courses payments"],
              ["other"],
            ],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
      }
      await ctx.scene.leave("checkAll");
      await ctx.scene.enter("getQuestionType");
    }

    //uzbek****

    if (ctx.session.lang === "🇺🇿O’zbekcha") {
      if (ctx.session.isStudent === "ha") {
        await ctx.reply("nimani izlayapsiz?", {
          reply_markup: {
            keyboard: [
              ["🖥O'qish haqida", "💸to'lovlar haqida"],
              ["boshqa", "taklif va shikoyat"],
            ],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
      }
      if (ctx.session.isStudent === "yo'q") {
        await ctx.reply("nima sizni qiziqtiryapti?", {
          reply_markup: {
            keyboard: [
              ["🖥o'quv kurslari haqida"],
              ["💸o'quv kurslari to`lovi haqida"],
              ["boshqa"],
            ],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
      }
      await ctx.scene.leave("checkAll");
      await ctx.scene.enter("getQuestionType");
    }

    //russian****

    if (ctx.session.lang === "🇷🇺Русский") {
      if (ctx.session.isStudent === "да") {
        await ctx.reply("что вы ищете?", {
          reply_markup: {
            keyboard: [
              ["🖥об образовании", "💸об оплате"],
              ["другое", "предложение и жалобы"],
            ],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
      }
      if (ctx.session.isStudent === "нет") {
        await ctx.reply("что вас интересует?", {
          reply_markup: {
            keyboard: [["🖥об образовании", "💸об оплате курсов"], ["другое"]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
      }
      await ctx.scene.leave("checkAll");
      await ctx.scene.enter("getQuestionType");
    }
  });

  //************************** */

  checkAll.on("text", async (ctx) => {
    ctx.session.done = ctx.message.text;

    // if (ctx.session.lang === '🇷🇺Русский') {
    //     if (ctx.session.done !== 'да' || ctx.session.done !== '/start' || ctx.session.done !== '/help') {
    //         await ctx.reply('Пожалуйста, подтвердите свои данные. Oтправлена ли информация правильно?', {
    //             reply_markup: {
    //                 keyboard: [["да", "назад"]],
    //                 resize_keyboard: true,
    //                 one_time_keyboard: true,
    //             },
    //         })
    //     }
    // }
    // if (ctx.session.lang === '🇺🇿O’zbekcha') {
    //     if (ctx.session.done !== 'ha' || ctx.session.done !== '/start' || ctx.session.done !== '/help') {
    //         await ctx.reply(`Iltimos, maʼlumotlaringizni tasdiqlang. Yuborilgan ma'lumotlar to'g'rimi?`, {
    //             reply_markup: {
    //                 keyboard: [["ha", "orqaga"]],
    //                 resize_keyboard: true,
    //                 one_time_keyboard: true,
    //             },
    //         })
    //     }
    // }
    // if (ctx.session.lang === '🇬🇧English') {
    //     if (ctx.session.done !== 'yes' || ctx.session.done !== '/start' || ctx.session.done !== '/help') {
    //         await ctx.reply(`Please confirm your data. Is sent information correct?`, {
    //             reply_markup: {
    //                 keyboard: [["yes", "back"]],
    //                 resize_keyboard: true,
    //                 one_time_keyboard: true,
    //             },
    //         })
    //     }
    // }

    // ****

    let userData = await axios.get(URL).then((res) => {
      return res.data;
    });

    if (ctx.message.text !== "/start") {
      if (ctx.session.done === "yes") {
        if (ctx.session.lang === "🇬🇧English") {
          if (ctx.session.isStudent === "yes") {
            try {
              for (let key of userData.data) {
                if (key["user_id"] !== ctx.from.id) {
                  await UserTg.create({
                    user_id: ctx.session.user_id,
                    language: ctx.session.lang,
                    phoneNumber: ctx.session.number,
                    name: ctx.session.name,
                    dateOfBirth: ctx.session.year,
                    isStudent: true,
                    questionType: ctx.session.questionType,
                    question: ctx.session.question,
                    answer: "text",
                  });
                }
              }
              console.log("created");
              let user = await UserTg.findOneAndUpdate(
                { user_id: ctx.session.user_id, name: ctx.session.name },
                {
                  $addToSet: {
                    questionType: ctx.session.questionType,
                    question: ctx.session.question,
                    answer: "text",
                  },
                },
                { new: true, upsert: true }
              );
              console.log("updated");
            } catch (err) {
              console.log(err.message);
            }

            console.log("do not hope");
          }

          if (ctx.session.isStudent === "no") {
            try {
              for (let key of userData.data) {
                if (key["user_id"] !== ctx.from.id) {
                  await UserTg.create({
                    user_id: ctx.session.user_id,
                    language: ctx.session.lang,
                    phoneNumber: ctx.session.number,
                    name: ctx.session.name,
                    dateOfBirth: ctx.session.year,
                    isStudent: false,
                    questionType: ctx.session.questionType,
                    question: ctx.session.question,
                    answer: "text",
                  });
                }
              }
              // console.log('created')
              let user = await UserTg.findOneAndUpdate(
                { user_id: ctx.session.user_id, name: ctx.session.name },
                {
                  $addToSet: {
                    questionType: ctx.session.questionType,
                    question: ctx.session.question,
                    answer: "text",
                  },
                },
                { new: true, upsert: true }
              );
              // console.log('updated')
            } catch (err) {
              console.log(err.message);
            }
          }
          await ctx.reply(
            `Press the button 'Send information', to send your question to the admin`,
            {
              reply_markup: {
                keyboard: [["Send information"]],
                resize_keyboard: true,
                one_time_keyboard: true,
              },
            }
          );
        }
        await ctx.scene.leave("checkAll");
        await ctx.scene.enter("sendMessageTo");
      }

      if (ctx.session.done === "ha") {
        if (ctx.session.lang === "🇺🇿O’zbekcha") {
          if (ctx.session.isStudent === "ha") {
            try {
              for (let key of userData.data) {
                if (key["user_id"] !== ctx.from.id) {
                  await UserTg.create({
                    user_id: ctx.session.user_id,
                    language: ctx.session.lang,
                    phoneNumber: ctx.session.number,
                    name: ctx.session.name,
                    dateOfBirth: ctx.session.year,
                    isStudent: true,
                    questionType: ctx.session.questionType,
                    question: ctx.session.question,
                    answer: "text",
                  });
                }
              }
              // console.log('created')
              let user = await UserTg.findOneAndUpdate(
                { user_id: ctx.session.user_id, name: ctx.session.name },
                {
                  $addToSet: {
                    questionType: ctx.session.questionType,
                    question: ctx.session.question,
                    answer: "text",
                  },
                },
                { new: true, upsert: true }
              );
              // console.log('updated')
            } catch (err) {
              console.log(err.message);
            }
          }
          if (ctx.session.isStudent === "yo'q") {
            try {
              for (let key of userData.data) {
                if (key["user_id"] !== ctx.from.id) {
                  await UserTg.create({
                    user_id: ctx.session.user_id,
                    language: ctx.session.lang,
                    phoneNumber: ctx.session.number,
                    name: ctx.session.name,
                    dateOfBirth: ctx.session.year,
                    isStudent: false,
                    questionType: ctx.session.questionType,
                    question: ctx.session.question,
                    answer: "text",
                  });
                }
              }
              // console.log('created')
              let user = await UserTg.findOneAndUpdate(
                { user_id: ctx.session.user_id, name: ctx.session.name },
                {
                  $addToSet: {
                    questionType: ctx.session.questionType,
                    question: ctx.session.question,
                    answer: "text",
                  },
                },
                { new: true, upsert: true }
              );
              // console.log('updated')
            } catch (err) {
              console.log(err.message);
            }
          }
          await ctx.reply(
            `Savolingizni adminga jo'natish uchun, iltimos 'Ma'lumotlarni jo'natish' tugmasini bosing`,
            {
              reply_markup: {
                keyboard: [["Ma'lumotlarni jo'natish"]],
                resize_keyboard: true,
                one_time_keyboard: true,
              },
            }
          );
        }
        await ctx.scene.leave("checkAll");
        await ctx.scene.enter("sendMessageTo");
      }

      if (ctx.session.done === "да") {
        if (ctx.session.lang === "🇷🇺Русский") {
          if (ctx.session.isStudent === "да") {
            try {
              for (let key of userData.data) {
                if (key["user_id"] !== ctx.from.id) {
                  await UserTg.create({
                    user_id: ctx.session.user_id,
                    language: ctx.session.lang,
                    phoneNumber: ctx.session.number,
                    name: ctx.session.name,
                    dateOfBirth: ctx.session.year,
                    isStudent: true,
                    questionType: ctx.session.questionType,
                    question: ctx.session.question,
                    answer: "text",
                  });
                }
              }
              // console.log('created')
              let user = await UserTg.findOneAndUpdate(
                { user_id: ctx.session.user_id, name: ctx.session.name },
                {
                  $addToSet: {
                    questionType: ctx.session.questionType,
                    question: ctx.session.question,
                    answer: "text",
                  },
                },
                { new: true, upsert: true }
              );
              // console.log('updated')
            } catch (err) {
              console.log(err.message);
            }
          }
          if (ctx.session.isStudent === "нет") {
            try {
              for (let key of userData.data) {
                if (key["user_id"] !== ctx.from.id) {
                  await UserTg.create({
                    user_id: ctx.session.user_id,
                    language: ctx.session.lang,
                    phoneNumber: ctx.session.number,
                    name: ctx.session.name,
                    dateOfBirth: ctx.session.year,
                    isStudent: false,
                    questionType: ctx.session.questionType,
                    question: ctx.session.question,
                    answer: "text",
                  });
                }
              }
              // console.log('created')
              let user = await UserTg.findOneAndUpdate(
                { user_id: ctx.session.user_id, name: ctx.session.name },
                {
                  $addToSet: {
                    questionType: ctx.session.questionType,
                    question: ctx.session.question,
                    answer: "text",
                  },
                },
                { new: true, upsert: true }
              );
              // console.log('updated')
            } catch (err) {
              console.log(err.message);
            }
          }
          await ctx.reply(
            `Нажмите кнопку «Отправить данные», чтобы отправить свой вопрос администратору`,
            {
              reply_markup: {
                keyboard: [["Отправить данные"]],
                resize_keyboard: true,
                one_time_keyboard: true,
              },
            }
          );
        }

        await ctx.scene.leave("checkAll");
        await ctx.scene.enter("sendMessageTo");
      }
    }
  });
  app.get("/users", async (req, res) => {
    const users = await UserTg.find();

    res.json({ data: users });
  });
  app.listen(data.port, () => {
    console.log(`App has been started on the port: ${data.port}`);
  });
};

main().catch((err) => {
  console.log(err.message);
});

module.exports = checkAll;
