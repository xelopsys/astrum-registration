// const { session } = require('telegraf')
const { composer, middleware } = require("../core/bot");
const data = require("../core/data");
const UserTg = require('../database/user.model.js');





let user_id;
composer.on("text", async (ctx) => {
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

  user_id = ctx.from.id;
  // let username = ctx.from.username;

});
composer.action(/reply_(.+)/, async (ctx) => {
  if (!ctx.session) {
    ctx.session = {};
  }
  ctx.session.replyId = ctx.match[1];
  await ctx.reply(
    `Send me your answer... Your answer will be after <i>'Hi there 👋! You gave a '</i>`
  ).then(r => console.log(r));
});

middleware(composer);
