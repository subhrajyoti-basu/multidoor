const { default: mongoose } = require("mongoose");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    role: {
        type: Number,
        default:0,
    },
    address: {
        type: String,
        require: true,
    }

},{ timestamps: true})

module.exports = mongoose.model('users', userSchema)

