const mongoose = require('mongoose')


// create mongoose schema for categories

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        
    },
    slug: {
       type:String,
       require: true,
       unique: true
    }
})

module.exports = mongoose.model('category', categorySchema);