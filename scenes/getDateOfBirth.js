const Stage = require("telegraf/stage");
const { session } = require("telegraf/session");
const Scene = require("telegraf/scenes/base");
const { leave } = Stage;
const stage = new Stage();



const getDateOfBirth = new Scene("getDateOfBirth");


getDateOfBirth.hears(/^[0-9]{4}$/, async (ctx) => {
    ctx.session.year = ctx.message.text;
    if (ctx.session.lang === 'рус') {
        await ctx.reply(
            'Are you a student of Astrum',
            {
                reply_markup: {
                    keyboard: [["YES-RU", "NO-RU"]],
                    resize_keyboard: true,
                    one_time_keyboard: true,
                },
            }
        );
    }
    if (ctx.session.lang === 'UZB') {
        await ctx.reply(
            'Are you a student of Astrum',
            {
                reply_markup: {
                    keyboard: [["YES-UZ", "NO-UZ"]],
                    resize_keyboard: true,
                    one_time_keyboard: true,
                },
            }
        );
    }
    if (ctx.session.lang === 'ENG') {
        await ctx.reply(
            'Are you a student of Astrum',
            {
                reply_markup: {
                    keyboard: [["YES-EN", "NO-EN"]],
                    resize_keyboard: true,
                    one_time_keyboard: true,
                },
            }
        );
    }
    await ctx.scene.leave("getDateOfBirth");
    await ctx.scene.enter("isStudent");
});

// getDateOfBirth.hears("◀️ Назад", async (ctx) => {
//     ctx.reply("Введите фамилию, имя и отчество", {
//         reply_markup: { remove_keyboard: true },
//     });
//     await ctx.scene.leave("getDateOfBirth");
//     ctx.scene.enter("getName");
// });

// getDateOfBirth.on("text", async (ctx) => {
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


module.exports = getDateOfBirth