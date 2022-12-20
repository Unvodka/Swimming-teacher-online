if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./routes/userRouter')

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public'))
app.use(cookieParser())
app.use(cors())

// Routes
app.use('/user', userRouter)

// Stripe 
const stripe = require('stripe')(process.env.TEST_STRIPE_PRIVATE_KEY)

app.post("/checkout", async (req, res) => {
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item)=> {
      lineItems.push(
          {
              price: item.id,
              quantity: item.quantity
          }
      )
  });

  const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel"
  });

  res.send(JSON.stringify({
      url: session.url
  }));
});

// Database connection 
const URI = process.env.DB_CONNECT;

mongoose.connect(URI, {
  useNewUrlParser: true,
}, err => {
  if(err) throw err;
  console.log('Connected to mongoose')
})

const port = process.env.PORT
app.listen(port, () => console.log(`Server listening on port: ${port}`))