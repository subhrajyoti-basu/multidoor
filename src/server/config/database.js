const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URL)
        console.log(`Connected to MongoDB Database ${conn.connection.host}`.bgMagenta.white)
    } catch (error) {
        console.log(`Error in MongoDB`.bgRed.white)
    }
}

module.exports = connectDatabase;