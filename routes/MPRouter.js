"use strict";
/*jshint esversion: 6 */
const Router = require("express").Router;
const bodyParser = require("body-parser");

const mercadopago = require("mercadopago");
class MPRouter extends Router {
    constructor(config) {
        super();
        this.config = config;
        mercadopago.configure({
            client_id: config.client_id,
            client_secret: config.client_secret,
            access_token: config.access_token,
            sandbox: true
        });
        this.use(bodyParser.urlencoded({
            extended: true
        }));
        this.use(bodyParser.json());
        this.addRoutes();

    }
    addRoutes() {
        this.post("/procesar-pago", (req, res) => {
            console.log("/procesar-pago");

            var payment = {
                transaction_amount: this.config.amount,
                token: req.body.token,
                description: 'Atorvastatina',
                installments: parseInt(req.body.installments),
                payment_method_id: req.body.payment_method_id,
                issuer_id: req.body.issuer_id,
                payer: {
                    email: 'chimino@quantium.com.mx'
                }
            };
            mercadopago.payment.save(payment).then((data) => {
                console.log("status");
                res.render("response", data);
            }).catch((error) => {
                console.log("error");
                console.error(error);
                res.json({ "error": error });
            });

        });
    }
};
module.exports = MPRouter;