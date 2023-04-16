const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const app = require('./app');
const connectDatabase = require('./config/database');
// configure env
dotenv.config()


// PORT
const PORT = process.env.PORT || 8080


// database connect
connectDatabase();


// create server
const server = app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`.bgCyan.white)
})