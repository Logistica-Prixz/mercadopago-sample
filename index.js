/*jshint esversion: 6 */
const config = require("./config.json");
const express = require("express");
const app = express();
const MPRouter = require("./routes/MPRouter");
const mpRouter = new MPRouter(config);

app.set('view engine', 'pug');

app.get("/", (req, res) => {
    console.log(req);
    res.render("index", { publicKey: config.public_key, amount: config.amount });
});

app.use(mpRouter);
app.listen(config.port);