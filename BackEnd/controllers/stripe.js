const Stripe=require("stripe")
const moment=require('moment')
const db=require('../data/database');

require("dotenv").config()

const stripe=Stripe(process.env.STRIPE_KEY)


module.exports.createCheckoutSession = async (req, res) => {
  const customer=await stripe.customers.create({
    email:req.email
  }) 
  const session = await stripe.checkout.sessions.create({
    customer: customer.id,
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name:'Subscription Fast Check',
          },
          unit_amount: 5.99*100
        },
        quantity:1
      },
    ],
    mode: 'payment',
    success_url: `${process.env.FRONTEND_DOMAIN}/successPayment`,
    cancel_url: `${process.env.FRONTEND_DOMAIN}/errorPayment`,
  });
  res.send({url:session.url});
}

const endpointSecret = "whsec_4f813b4114c618955d1c097b53833f048de8780434e1b7f17134e25bc5cddfe0"
module.exports.afterPayment = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
  data=event.data.object
  eventType=event.type
  if(eventType==='checkout.session.completed'){
    try{
      await stripe.customers.retrieve(data.customer)
      const currentDate = moment();
      const futureDate = currentDate.add(31, 'days');
      const formattedDate = futureDate.format('YYYY-MM-DD');
      await db.query('UPDATE fake_news.users_accounts AS ua INNER JOIN fake_news.users AS u ON ua.user_id = u.id SET ua.attempts = 0, ua.account_id = 2, ua.expire_date = ? WHERE u.email = ?', [formattedDate, data.customer_details.email]);
    }catch(error){
      return res.status(500).json({message:"Server error: Something went wrong. Try again later."})
    }
  }
  // Return a 200 response to acknowledge receipt of the event
  res.send().end;
}