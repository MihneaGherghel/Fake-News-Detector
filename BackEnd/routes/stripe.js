const express=require("express");
const { createCheckoutSession, afterPayment } = require("../controllers/stripe");
const { checkAuthMiddlewareSubscription } = require("../utils/authentification/checkAuthSubscription");


const router = express.Router();

router.post('/create-checkout-session',checkAuthMiddlewareSubscription, createCheckoutSession);

router.post('/webhook', express.raw({type: 'application/json'}), afterPayment);

module.exports=router