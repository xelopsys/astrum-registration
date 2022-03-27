const data = require("../core/data.js");
const Stage = require("telegraf/stage");
const { session } = require("telegraf/session");
const Scene = require("telegraf/scenes/base");
const { leave } = Stage;
const stage = new Stage();
const axios = require("axios/index.js");
const URL = data.url;
const { composer, middleware } = require("../core/bot.js");

const getLang = new Scene("getLang");

getLang.on("text", async (ctx) => {
  ctx.session.lang = ctx.message.text;
  ctx.session.user_id = ctx.from.id;

  // console.log(ctx.session.user_id)
  if (ctx.session.lang === "🇺🇿O’zbekcha") {
    await ctx.reply("Iltimos, telefon raqamingizni jo’nating📱", {
      reply_markup: {
        keyboard: [[{ text: "📱 Raqamni jo`natish", request_contact: true }]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  }
  if (ctx.session.lang === "🇷🇺Русский") {
    await ctx.reply("Пожалуйста, отправьте свой контактный номер📱", {
      reply_markup: {
        keyboard: [[{ text: "📱 Отправить контакт", request_contact: true }]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  }
  if (ctx.session.lang === "🇬🇧English") {
    await ctx.reply("Please, send your contact number📱", {
      reply_markup: {
        keyboard: [[{ text: "📱 Send contact", request_contact: true }]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  }
  await ctx.scene.leave("getLang");
  await ctx.scene.enter("getNumber");

  // if (data.data[i].user_id === ctx.from.id) {
  //   if (data.data[i].language === "🇬🇧English") {
  //     if (data.data[i].isStudent === true) {
  //       await ctx.reply(`${data.data[i].name}, please press the button menu to get back`, {
  //         reply_markup: {
  //           keyboard: [
  //             ["menu"]
  //           ],
  //           resize_keyboard: true,
  //           one_time_keyboard: true,
  //         },
  //       });
  //       await ctx.scene.leave('getLang')
  //       await ctx.scene.enter("getBack");

  //     }
  //     if (data.data[i].isStudent === false) {
  //       await ctx.reply("what you are interested in?", {
  //         reply_markup: {
  //           keyboard: [
  //             ["🖥about education courses"],
  //             ["💸about education courses payments"],
  //             ["other"],
  //           ],
  //           resize_keyboard: true,
  //           one_time_keyboard: true,
  //         },
  //       });

  //     }

  //   }

  //   //uzbek****

  //   if (data.data[i].language === "🇺🇿O’zbekcha") {
  //     if (data.data[i].isStudent === true) {
  //       await ctx.reply("nimani izlayapsiz?", {
  //         reply_markup: {
  //           keyboard: [
  //             ["🖥O'qish haqida", "💸to'lovlar haqida"],
  //             ["boshqa", "taklif va shikoyat"],
  //           ],
  //           resize_keyboard: true,
  //           one_time_keyboard: true,
  //         },
  //       });

  //     }
  //     if (data.data[i].isStudent === false) {
  //       await ctx.reply("nima sizni qiziqtiryapti?", {
  //         reply_markup: {
  //           keyboard: [
  //             ["🖥o'quv kurslari haqida"],
  //             ["💸o'quv kurslari to`lovi haqida"],
  //             ["boshqa"],
  //           ],
  //           resize_keyboard: true,
  //           one_time_keyboard: true,
  //         },
  //       });

  //     }

  //   }

  //   //russian****

  //   if (data.data[i].language === "🇷🇺Русский") {
  //     if (data.data[i].isStudent === true) {
  //       await ctx.reply("что вы ищете?", {
  //         reply_markup: {
  //           keyboard: [
  //             ["🖥об образовании", "💸об оплате"],
  //             ["другое", "предложение и жалобы"],
  //           ],
  //           resize_keyboard: true,
  //           one_time_keyboard: true,
  //         },
  //       });

  //     }
  //     if (data.data[i].isStudent === false) {
  //       await ctx.reply("что вас интересует?", {
  //         reply_markup: {
  //           keyboard: [
  //             ["🖥об образовании", "💸об оплате курсов"],
  //             ["другое"],
  //           ],
  //           resize_keyboard: true,
  //           one_time_keyboard: true,
  //         },
  //       });
  //     }

  //   }

  // }

  // }
});

module.exports = getLang;
