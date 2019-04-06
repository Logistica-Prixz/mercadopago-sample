/*jshint esversion: 6 */
const express = require("express");
const bodyParser = require("body-parser");

const mercadopago = require("mercadopago");

module.exports = config => {
    this.config = config;
    this.router = express.Router();
    mercadopago.configure({
        client_id: config.client_id,
        client_secret: config.client_secret,
        access_token: config.access_token,
        sandbox: true
    });
    this.router.use(bodyParser.urlencoded({
        extended: true
    }));
    this.router.use(bodyParser.json());

    this.router.post("/procesar-pago", (req, res) => {
        console.log("/procesar-pago");

        var payment = {
            transaction_amount: this.config.amount,
            token: req.body.token,
            description: 'PRIXZ',
            installments: parseInt(req.body.installments),
            payment_method_id: req.body.payment_method_id,
            issuer_id: req.body.issuer_id,
            payer: {
                email: 'chimino@quantium.com.mx'
            }
        };
        mercadopago.payment.save(payment).then((data) => {
            console.log(data);
            res.render("response", { "data": data });
        }).catch((error) => {
            console.error(error);
            res.render("response", { "data": error });
        });

    });
    return this.router;
};