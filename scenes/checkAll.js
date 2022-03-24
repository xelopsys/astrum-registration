const data = require('../data.js')
const Stage = require("telegraf/stage");
const { session } = require("telegraf/session");
const Scene = require("telegraf/scenes/base");
const { leave } = Stage;
// const stage = new Stage();
// const { composer, middleware } = require('../bot.js')
// const bot = new telegraf(data.token);

const UserTg = require('../database/user.model.js');

const checkAll = new Scene("checkAll");

const mongoose = require('mongoose')
const main = async () => {
    const URI = `mongodb+srv://xelopsys:xelopsys@astrum.dfoka.mongodb.net/astrum?retryWrites=true&w=majority`;
    await mongoose
        .connect(
            URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then((result) => {
            console.log("Connected to db");
        });

    // checkAll.on('text', async (ctx) => {
    //     if (ctx.session.isStudent === 'YES-RU' || ctx.session.isStudent === 'YES-UZ' || ctx.session.isStudent === 'YES-EN') {
    //         await UserTg.create({ language: ctx.session.lang, phoneNumber: ctx.session.number, name: ctx.session.name, dateOfBirth: ctx.session.year, isStudent: true });
    //     }
    //     if (ctx.session.isStudent === 'NO-RU' || ctx.session.isStudent === 'NO-UZ' || ctx.session.isStudent === 'NO-EN') {
    //         await UserTg.create({ language: ctx.session.lang, phoneNumber: ctx.session.number, name: ctx.session.name, dateOfBirth: ctx.session.year, isStudent: false });
    //     }
    //     await ctx.reply('thank you')
    //     await ctx.scene.leave('checkAll')
    // })
    checkAll.hears('yes-ru', async (ctx) => {
        await ctx.reply('thank you, u can go back', {
            reply_markup: {
                keyboard: [["back-ru"]],
                resize_keyboard: true,
                one_time_keyboard: true,
            }
        })

        if (ctx.session.questionType === 'ru-edu') {
            await UserTg.create({ language: ctx.session.lang, phoneNumber: ctx.session.number, name: ctx.session.name, dateOfBirth: ctx.session.year, isStudent: true, questionType: ctx.session.questionType, question: ctx.session.question });
            ctx.telegram.sendMessage(
                data.education,
                `Новая заявка! \n\nФ.И.О: [${ctx.session.name}](tg://user?id=${ctx.from.id});\nГод рождения: ${ctx.session.year};\nОбразование: ${ctx.session.lang};` +
                `\nТема диплома: ${ctx.session.isStudent};\nЯзыки: ${ctx.session.questionType};\nВладение компьютером: ${ctx.session.question};` +
                `\nНомер: ${ctx.session.number}`,
                { parse_mode: "markdown" }
            );
        }
        if (ctx.session.questionType === 'ru-sale') {
            await UserTg.create({ language: ctx.session.lang, phoneNumber: ctx.session.number, name: ctx.session.name, dateOfBirth: ctx.session.year, isStudent: true, questionType: ctx.session.questionType, question: ctx.session.question });
            ctx.telegram.sendMessage(
                data.sales,
                `Новая заявка! \n\nФ.И.О: [${ctx.session.name}](tg://user?id=${ctx.from.id});\nГод рождения: ${ctx.session.year};\nОбразование: ${ctx.session.lang};` +
                `\nТема диплома: ${ctx.session.isStudent};\nЯзыки: ${ctx.session.questionType};\nВладение компьютером: ${ctx.session.question};` +
                `\nНомер: ${ctx.session.number}`,
                { parse_mode: "markdown" }
            );
        }
        if (ctx.session.questionType === 'ru-other' || ctx.session.questionType === 'ru-offer-compl') {
            await UserTg.create({ language: ctx.session.lang, phoneNumber: ctx.session.number, name: ctx.session.name, dateOfBirth: ctx.session.year, isStudent: true, questionType: ctx.session.questionType, question: ctx.session.question });
            ctx.telegram.sendMessage(
                data.admin,
                `Новая заявка! \n\nФ.И.О: [${ctx.session.name}](tg://user?id=${ctx.from.id});\nГод рождения: ${ctx.session.year};\nОбразование: ${ctx.session.lang};` +
                `\nТема диплома: ${ctx.session.isStudent};\nЯзыки: ${ctx.session.questionType};\nВладение компьютером: ${ctx.session.question};` +
                `\nНомер: ${ctx.session.number}`,
                { parse_mode: "markdown" }
            );
        }
        ctx.session = null
    })

    checkAll.hears('yes-ru', async (ctx) => {
        await ctx.reply('thank you, u can go back', {
            reply_markup: {
                keyboard: [["back-ru"]],
                resize_keyboard: true,
                one_time_keyboard: true,
            }
        })

        if (ctx.session.questionType === 'ru-edu') {
            await UserTg.create({ language: ctx.session.lang, phoneNumber: ctx.session.number, name: ctx.session.name, dateOfBirth: ctx.session.year, isStudent: true, questionType: ctx.session.questionType, question: ctx.session.question });
            ctx.telegram.sendMessage(
                data.education,
                `Новая заявка! \n\nФ.И.О: [${ctx.session.name}](tg://user?id=${ctx.from.id});\nГод рождения: ${ctx.session.year};\nОбразование: ${ctx.session.lang};` +
                `\nТема диплома: ${ctx.session.isStudent};\nЯзыки: ${ctx.session.questionType};\nВладение компьютером: ${ctx.session.question};` +
                `\nНомер: ${ctx.session.number}`,
                { parse_mode: "markdown" }
            );
        }
        if (ctx.session.questionType === 'ru-sale') {
            await UserTg.create({ language: ctx.session.lang, phoneNumber: ctx.session.number, name: ctx.session.name, dateOfBirth: ctx.session.year, isStudent: true, questionType: ctx.session.questionType, question: ctx.session.question });
            ctx.telegram.sendMessage(
                data.sales,
                `Новая заявка! \n\nФ.И.О: [${ctx.session.name}](tg://user?id=${ctx.from.id});\nГод рождения: ${ctx.session.year};\nОбразование: ${ctx.session.lang};` +
                `\nТема диплома: ${ctx.session.isStudent};\nЯзыки: ${ctx.session.questionType};\nВладение компьютером: ${ctx.session.question};` +
                `\nНомер: ${ctx.session.number}`,
                { parse_mode: "markdown" }
            );
        }
        if (ctx.session.questionType === 'ru-other' || ctx.session.questionType === 'ru-offer-compl') {
            await UserTg.create({ language: ctx.session.lang, phoneNumber: ctx.session.number, name: ctx.session.name, dateOfBirth: ctx.session.year, isStudent: true, questionType: ctx.session.questionType, question: ctx.session.question });
            ctx.telegram.sendMessage(
                data.admin,
                `Новая заявка! \n\nФ.И.О: [${ctx.session.name}](tg://user?id=${ctx.from.id});\nГод рождения: ${ctx.session.year};\nОбразование: ${ctx.session.lang};` +
                `\nТема диплома: ${ctx.session.isStudent};\nЯзыки: ${ctx.session.questionType};\nВладение компьютером: ${ctx.session.question};` +
                `\nНомер: ${ctx.session.number}`,
                { parse_mode: "markdown" }
            );
        }
        ctx.session = null
    })
}

main().catch((err) => {
    console.log(err.message);
})


module.exports = checkAll