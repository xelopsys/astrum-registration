const Stage = require("telegraf/stage");
const { session } = require("telegraf/session");
const Scene = require("telegraf/scenes/base");
const { leave } = Stage;
// const stage = new Stage();
// const { composer, middleware } = require('../bot.js')
// const bot = new telegraf(data.token);


const getNumber = new Scene("getNumber");

getNumber.on('contact', async (ctx) => {
    ctx.session.number = ctx.message.contact.phone_number
    console.log(ctx.session.number)
    if (ctx.session.lang == 'рус') {
        await ctx.replyWithHTML('Please send me ur FIO rus')
        console.log(ctx.session.lang)
    }
    if (ctx.session.lang == 'UZB') {
        await ctx.replyWithHTML('please send me ur FIO uzb')
    }
    if (ctx.session.lang == 'ENG') {
        await ctx.replyWithHTML('Please send me ur FIO ENG')
    }
    await ctx.scene.leave('getNumber');
    await ctx.scene.enter('getName');

})

module.exports = getNumber