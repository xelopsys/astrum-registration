require("dotenv/config");
const telegraf = require("telegraf");
// const { Composer } = require("telegraf/composer.js")
const pkg = require("telegraf");
const { session } = pkg;
// const comp = require("telegraf")
const { Composer } = pkg;
// const { Telegraf } = pkg;
const data = require("./data.js");

const token = data.token;
const bot = new telegraf(token);

const composer = new Composer();
const middleware = (composer) => {
  bot.use(composer.middleware());
};

(async () => {
  await bot.use(session());
  await bot.launch();
})();

module.exports = { composer, middleware };
