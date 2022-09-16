const mongoose = require('mongoose')

const MSMESchema = mongoose.Schema({
    Name: {
        type: String,

    },
    Website: {
        type: String,
    },
    Industry: {
        type: String,
    },
    Business_Model: {
        type: String
    },
    Address: {
        type: String
    },
    Year_of_Establishment: {
        type: Date
    }

})
const MSME = module.exports = mongoose.model("MSME", MSMESchema);


