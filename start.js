// const telegraf = require("telegraf");
const data = require("./data");
const Stage = require("telegraf/stage");
const { session } = require("telegraf/session");
const Scene = require("telegraf/scenes/base");
const { leave } = Stage;
const stage = new Stage();
const { composer, middleware } = require('./bot.js')
// const bot = new telegraf(data.token);
const {
    getLang,
    getNumber,
    getName,
    getDateOfBirth,
    isStudent,
    getQuestionType,
    getQuestion,
    checkAll
} = require('./scenes/index.js')




stage.register(getLang, getNumber, getName, getDateOfBirth, isStudent, getQuestionType, getQuestion, checkAll);

// const getYear = new Scene("getYear");
// stage.register(getYear);
// const getDateOfBirth = new Scene("getDateOfBirth");
// stage.register(getDateOfBirth);
// const getEduc = new Scene("getEduc");
// stage.register(getEduc);
// const getTheme = new Scene("getTheme");
// stage.register(getTheme);
// const getLangs = new Scene("getLangs");
// stage.register(getLangs);
// const getCompSkills = new Scene("getCompSkills");
// stage.register(getCompSkills);
// const getNumber = new Scene("getNumber");
// stage.register(getNumber);
// const check = new Scene("check");
// stage.register(check);


composer.use(stage.middleware());


// composer.hears("️⬅️ На главную", (ctx) => {
//     ctx.reply("Введите фамилию, имя и отчество", {
//         reply_markup: { remove_keyboard: true },
//     });
//     ctx.scene.enter("getName");
// });


composer.start(async (ctx) => {
    await ctx.reply('Please choose the language', {

        reply_markup: {
            keyboard: [["рус", "UZB", "ENG"]],
            resize_keyboard: true,
            one_time_keyboard: true,
        },
    })
    await ctx.scene.enter('getLang');


})


// // composer.start((ctx) => {
// //   ctx.reply("Введите фамилию, имя и отчество", {
// //     reply_markup: { remove_keyboard: true },
// //   });
// //   ctx.scene.enter("getName");
// // });

// getName.command("start", async (ctx) => {
//     ctx.reply("Начнем заново. Введите имя, фамилию и отчество", {
//         reply_markup: { remove_keyboard: true },
//     });
//     await ctx.scene.leave("getEduc");
//     ctx.scene.enter("getName");
// });

// // getName.on("text", async (ctx) => {
// //   if (ctx.message.text === "◀️ Назад") {
// //     return ctx.reply(
// //       "Вы уже вернулись в самое начало. Введите, пожалуйста, свое имя"
// //     );
// //   }

// //   ctx.session.name = ctx.message.text;
// //   ctx.reply(
// //     "Введидте год рождения" +
// //     `\n\nУже введенные данные:\nФ.И.О: ${ctx.session.name}`,
// //     {
// //       reply_markup: {
// //         keyboard: [["◀️ Назад"]],
// //         resize_keyboard: true,
// //         one_time_keyboard: true,
// //       },
// //     }
// //   );
// //   await ctx.scene.leave("getName");
// //   ctx.scene.enter("getYear");
// // });

// getYear.hears(/^[0-9]{4}$/, async (ctx) => {
//     ctx.session.year = ctx.message.text;
//     ctx.reply(
//         "А теперь расскажите о своем образовании. В каком вузе Вы учились и на каком факультете?" +
//         `\n\nУже введенные данные:\nФ.И.О: ${ctx.session.name};\nГод рождения: ${ctx.session.year}`,
//         {
//             reply_markup: {
//                 keyboard: [["◀️ Назад", "❌ Стереть все"]],
//                 resize_keyboard: true,
//                 one_time_keyboard: true,
//             },
//         }
//     );
//     await ctx.scene.leave("getYear");
//     ctx.scene.enter("getEduc");
// });

// getYear.hears("◀️ Назад", async (ctx) => {
//     ctx.reply("Введите фамилию, имя и отчество", {
//         reply_markup: { remove_keyboard: true },
//     });
//     await ctx.scene.leave("getYear");
//     ctx.scene.enter("getName");
// });

// getYear.on("text", async (ctx) => {
//     ctx.reply(
//         "Введидте только год рождения в формате 1990" +
//         `\n\nУже введенные данные:\nФ.И.О: ${ctx.session.name}`,
//         {
//             reply_markup: {
//                 keyboard: [["◀️ Назад", "❌ Стереть все"]],
//                 resize_keyboard: true,
//                 one_time_keyboard: true,
//             },
//         }
//     );
// });

// getEduc.hears("◀️ Назад", async (ctx) => {
//     ctx.reply(
//         "Введидте год рождения" +
//         `\n\nУже введенные данные:\nФ.И.О: ${ctx.session.name}`,
//         {
//             reply_markup: {
//                 keyboard: [["◀️ Назад", "❌ Стереть все"]],
//                 resize_keyboard: true,
//                 one_time_keyboard: true,
//             },
//         }
//     );
//     await ctx.scene.leave("getEduc");
//     ctx.scene.enter("getYear");
// });

// getEduc.hears(["❌ Стереть все", "/start"], async (ctx) => {
//     ctx.reply("Начнем заново. Введите имя, фамилию и отчество", {
//         reply_markup: { remove_keyboard: true },
//     });
//     await ctx.scene.leave("getEduc");
//     ctx.scene.enter("getName");
// });

// getEduc.on("text", async (ctx) => {
//     ctx.session.educ = ctx.message.text;
//     ctx.reply(
//         "Напишите тему Вашей дипломной работы" +
//         `\n\nУже введенные данные:\nФ.И.О: ${ctx.session.name};\nГод рождения: ${ctx.session.year};\nОбразование: ${ctx.session.educ}`,
//         {
//             reply_markup: {
//                 keyboard: [["◀️ Назад", "❌ Стереть все"]],
//                 resize_keyboard: true,
//                 one_time_keyboard: true,
//             },
//         }
//     );
//     await ctx.scene.leave("getEduc");
//     ctx.scene.enter("getTheme");
// });

// getTheme.hears("◀️ Назад", async (ctx) => {
//     ctx.reply(
//         "А теперь расскажите о своем образовании. В каком вузе Вы учились и на каком факультете?" +
//         `\n\nУже введенные данные:\nФ.И.О: ${ctx.session.name};\nГод рождения: ${ctx.session.year}`,
//         {
//             reply_markup: {
//                 keyboard: [["◀️ Назад", "❌ Стереть все"]],
//                 resize_keyboard: true,
//                 one_time_keyboard: true,
//             },
//         }
//     );
//     await ctx.scene.leave("getTheme");
//     ctx.scene.enter("getEduc");
// });

// getTheme.hears(["❌ Стереть все", "/start"], async (ctx) => {
//     ctx.reply("Начнем заново. Введите имя, фамилию и отчество", {
//         reply_markup: { remove_keyboard: true },
//     });
//     await ctx.scene.leave("getTheme");
//     ctx.scene.enter("getName");
// });

// getTheme.on("text", async (ctx) => {
//     ctx.session.theme = ctx.message.text;
//     ctx.reply(
//         "Какими Вы языками и на каком уровне владеете? \n\nНапример: \nEnglish - Intermediate\nРусский - родной" +
//         `\n\nУже введенные данные:\nФ.И.О: ${ctx.session.name};\nГод рождения: ${ctx.session.year};\nОбразование: ${ctx.session.educ};` +
//         `\nТема диплома: ${ctx.session.theme}`,
//         {
//             reply_markup: {
//                 keyboard: [["◀️ Назад", "❌ Стереть все"]],
//                 resize_keyboard: true,
//                 one_time_keyboard: true,
//             },
//         }
//     );
//     await ctx.scene.leave("getTheme");
//     ctx.scene.enter("getLangs");
// });

// getLangs.hears("◀️ Назад", async (ctx) => {
//     ctx.reply(
//         "Напишите тему Вашей дипломной работы" +
//         `\n\nУже введенные данные:\nФ.И.О: ${ctx.session.name};\nГод рождения: ${ctx.session.year};\nОбразование: ${ctx.session.educ};`,
//         {
//             reply_markup: {
//                 keyboard: [["◀️ Назад", "❌ Стереть все"]],
//                 resize_keyboard: true,
//                 one_time_keyboard: true,
//             },
//         }
//     );
//     await ctx.scene.leave("getLangs");
//     ctx.scene.enter("getTheme");
// });

// getLangs.hears(["❌ Стереть все", "/start"], async (ctx) => {
//     ctx.reply("Начнем заново. Введите имя, фамилию и отчество", {
//         reply_markup: { remove_keyboard: true },
//     });
//     await ctx.scene.leave("getLangs");
//     ctx.scene.enter("getName");
// });

// getLangs.on("text", async (ctx) => {
//     ctx.session.langs = ctx.message.text;
//     ctx.reply(
//         "Какими компьютерными программами и на каком уровне Вы владеете?" +
//         "\n\nНапример: \nMS Office - в совершенстве,\nAutoCad - средний" +
//         `\n\nУже введенные данные:\nФ.И.О: ${ctx.session.name};\nГод рождения: ${ctx.session.year};\nОбразование: ${ctx.session.educ};` +
//         `\nТема диплома: ${ctx.session.theme};\nЯзыки: ${ctx.session.langs}`,
//         {
//             reply_markup: {
//                 keyboard: [["◀️ Назад", "❌ Стереть все"]],
//                 resize_keyboard: true,
//                 one_time_keyboard: true,
//             },
//         }
//     );
//     await ctx.scene.leave("getLangs");
//     ctx.scene.enter("getCompSkills");
// });

// getCompSkills.hears("◀️ Назад", async (ctx) => {
//     ctx.reply(
//         "Какими Вы языками и на каком уровне владеете? \n\nНапример: \nEnglish - Intermediate\nРусский - родной" +
//         `\n\nУже введенные данные:\nФ.И.О: ${ctx.session.name};\nГод рождения: ${ctx.session.year};\nОбразование: ${ctx.session.educ};` +
//         `\nТема диплома: ${ctx.session.theme}`,
//         {
//             reply_markup: {
//                 keyboard: [["◀️ Назад", "❌ Стереть все"]],
//                 resize_keyboard: true,
//                 one_time_keyboard: true,
//             },
//         }
//     );
//     await ctx.scene.leave("getCompSkills");
//     ctx.scene.enter("getLangs");
// });

// getCompSkills.hears(["❌ Стереть все", "/start"], async (ctx) => {
//     ctx.reply("Начнем заново. Введите имя, фамилию и отчество", {
//         reply_markup: { remove_keyboard: true },
//     });
//     await ctx.scene.leave("getCompSkills");
//     ctx.scene.enter("getName");
// });

// getCompSkills.on("text", async (ctx) => {
//     ctx.session.compSkills = ctx.message.text;
//     ctx.reply(
//         'Нажмите кнопку "Отправить контакт" ниже, чтобы поделиться номером.' +
//         `\n\nУже введенные данные:\nФ.И.О: ${ctx.session.name};\nГод рождения: ${ctx.session.year};\nОбразование: ${ctx.session.educ};` +
//         `\nТема диплома: ${ctx.session.theme};\nЯзыки: ${ctx.session.langs};\nВладение компьютером: ${ctx.session.compSkills}`,
//         {
//             reply_markup: {
//                 keyboard: [
//                     [{ text: "📱 Отправить контакт", request_contact: true }],
//                     ["◀️ Назад", "❌ Стереть все"],
//                 ],
//                 resize_keyboard: true,
//                 one_time_keyboard: true,
//             },
//         }
//     );
//     await ctx.scene.leave("getCompSkills");
//     ctx.scene.enter("getNumber");
// });

// getNumber.hears("◀️ Назад", async (ctx) => {
//     ctx.reply(
//         "Какими компьютерными программами и на каком уровне Вы владеете?" +
//         "\n\nНапример: \nMS Office - в совершенстве,\nAutoCad - средний" +
//         `\n\nУже введенные данные:\nФ.И.О: ${ctx.session.name};\nГод рождения: ${ctx.session.year};\nОбразование: ${ctx.session.educ};` +
//         `\nТема диплома: ${ctx.session.theme};\nЯзыки: ${ctx.session.langs}`,
//         {
//             reply_markup: {
//                 keyboard: [["◀️ Назад", "❌ Стереть все"]],
//                 resize_keyboard: true,
//                 one_time_keyboard: true,
//             },
//         }
//     );
//     await ctx.scene.leave("getNumber");
//     ctx.scene.enter("getCompSkills");
// });

// getNumber.hears(["❌ Стереть все", "/start"], async (ctx) => {
//     ctx.reply("Начнем заново. Введите имя, фамилию и отчество", {
//         reply_markup: { remove_keyboard: true },
//     });
//     await ctx.scene.leave("getNumber");
//     ctx.scene.enter("getCompSkills");
//     ctx.session = null;
// });

// getNumber.on("contact", async (ctx) => {
//     ctx.session.phone = ctx.message.contact.phone_number;
//     ctx.reply(
//         '❗️ Проверьте все данные и нажмите "Все верно", если они корректны: ' +
//         `\n\nФ.И.О: ${ctx.session.name};\nГод рождения: ${ctx.session.year};\nОбразование: ${ctx.session.educ};` +
//         `\nТема диплома: ${ctx.session.theme};\nЯзыки: ${ctx.session.langs};\nВладение компьютером: ${ctx.session.compSkills};` +
//         `\nНомер: ${ctx.session.phone}`,
//         {
//             reply_markup: {
//                 keyboard: [["️✅ Все верно"], ["◀️ Назад", "❌ Стереть все"]],
//                 resize_keyboard: true,
//                 one_time_keyboard: true,
//             },
//             parse_mode: "markdown",
//         }
//     );
//     await ctx.scene.leave("getNumber");
//     ctx.scene.enter("check");
// });

// check.hears("️✅ Все верно", (ctx) => {
//     ctx.reply("✅ Спасибо! Ваша заявка принята. Мы Вам перезвоним.", {
//         reply_markup: {
//             keyboard: [["️⬅️ На главную"]],
//             resize_keyboard: true,
//             one_time_keyboard: true,
//         },
//     });
//     ctx.scene.leave("main");

//     for (let key of data.admins) {
//         composer.telegram.sendMessage(
//             key,
//             `Новая заявка! \n\nФ.И.О: [${ctx.session.name}](tg://user?id=${ctx.from.id});\nГод рождения: ${ctx.session.year};\nОбразование: ${ctx.session.educ};` +
//             `\nТема диплома: ${ctx.session.theme};\nЯзыки: ${ctx.session.langs};\nВладение компьютером: ${ctx.session.compSkills};` +
//             `\nНомер: ${ctx.session.phone}`,
//             { parse_mode: "markdown" }
//         );
//     }
//     ctx.session = null;
// });

// check.hears("◀️ Назад", async (ctx) => {
//     ctx.reply(
//         'Нажмите кнопку "Отправить контакт" ниже, чтобы поделиться номером.' +
//         `\n\nУже введенные данные:\nФ.И.О: ${ctx.session.name};\nГод рождения: ${ctx.session.year};\nОбразование: ${ctx.session.educ};` +
//         `\nТема диплома: ${ctx.session.theme};\nЯзыки: ${ctx.session.langs};\nВладение компьютером: ${ctx.session.compSkills}`,
//         {
//             reply_markup: {
//                 keyboard: [
//                     [{ text: "📱 Отправить контакт", request_contact: true }],
//                     ["◀️ Назад", "❌ Стереть все"],
//                 ],
//                 resize_keyboard: true,
//                 one_time_keyboard: true,
//             },
//         }
//     );
//     await ctx.scene.leave("check");
//     ctx.scene.enter("getNumber");
// });

// check.hears(["❌ Стереть все", "/start"], async (ctx) => {
//     ctx.reply("Начнем заново. Введите имя, фамилию и отчество", {
//         reply_markup: { remove_keyboard: true },
//     });
//     await ctx.scene.leave("getNumber");
//     ctx.scene.enter("getCompSkills");
//     ctx.session = null;
// });

middleware(composer);

