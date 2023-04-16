const express = require('express');
const morgan = require('morgan');
const router = require('./routes/authRoute');
const categoryRouter = require('./routes/categoryRoute');
const cors = require('cors')

// Rest Object
const app = express()


// middlewares
app.use(cors({origin: '*',}))
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/v1/auth', router)
app.use('/api/v1/category', categoryRouter)



app.get('/', (req, res) => {
    res.send('<h1>Welcome to the eCommerce app</h1>')
})



module.exports = app;