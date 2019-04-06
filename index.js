/*jshint esversion: 6 */
const config = require("./config.json");
const express = require("express");
const app = express();
const mpRouter = require("./routes/MPRouter")(config);

app.set('view engine', 'pug');

app.get("/", (req, res) => {
    console.log(req);
    let total = config.amount + (config.amount * 0.16) + 45 - 100;
    console.log(total);
    res.render("index", { publicKey: config.public_key, total: total, amount: config.amount, tax: config.amount * 0.16, shipping: 45, discount: 100 });
});

app.use(mpRouter);
app.listen(config.port);