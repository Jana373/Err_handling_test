const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    MSME_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MSME',
        index: true
    },
    Category: {
        type: String
    },
    Name: {
        type: String
    },
    Description: {
        type: String
    },
    Price: {
        type: Number
    },
    Image_url: {
        type: String
    },

   

})
const Product = module.exports = mongoose.model('Product', ProductSchema)