const Stage = require("telegraf/stage");
const { session } = require("telegraf/session");
const Scene = require("telegraf/scenes/base");
const { leave } = Stage;
const stage = new Stage();

const getDateOfBirth = new Scene("getDateOfBirth");

getDateOfBirth.hears(/^[0-9]{4}$/, async (ctx) => {
  ctx.session.year = ctx.message.text;
  if (ctx.session.lang === "🇷🇺Русский") {
    await ctx.reply("Вы студент ИТ-академии Astrum?", {
      reply_markup: {
        keyboard: [["да", "нет"]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  }
  if (ctx.session.lang === "🇺🇿O’zbekcha") {
    await ctx.reply("Siz Astrum IT akademiyasining talabasimisiz?", {
      reply_markup: {
        keyboard: [["ha", "yo'q"]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  }
  if (ctx.session.lang === "🇬🇧English") {
    await ctx.reply("Are you a student of Astrum IT academy?", {
      reply_markup: {
        keyboard: [["yes", "no"]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
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

module.exports = getDateOfBirth;
