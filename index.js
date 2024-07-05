// index.js
const express = require('express')
const app = express()
const PORT = 4000
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const connectDb = require('./config/dbConnection')
const dotenv = require('dotenv').config()
const { notFound, errorHandler } = require('./middlewares/errorHandler')
const cors = require('cors')

// const port = process.env.PORT || 5050
app.use(cors({
    origin: ['http://localhost:4200', 'https://angular-shop-two.vercel.app', 'https://angular-shop-test.vercel.app', 'https://back-vercel-shop.vercel.app']
}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.use('/auth', require('./routes/authRoute'))
app.use('/users', require('./routes/userRoute'))
app.use('/products', require('./routes/productRoute'))
app.use('/carts', require('./routes/cartRoute'))
app.use('/orders', require('./routes/orderRoute'))
app.use('/coupons', require('./routes/couponRoute'))

app.use(notFound)
app.use(errorHandler)

app.get('/home', (req, res) => {
    res.status(200).json('Welcome, your app is working well');
})


app.listen(PORT, () => {
    connectDb().then(r => console.log('Database connected'))
    console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app
