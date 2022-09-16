const mongoose = require('mongoose')

const InActionSchema = mongoose.Schema({
    MSME_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MSME'
    },
    Consultant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Consultant'
    },
    coaching_hours: {
        type: Number
    },
    starting_date: {
        type: Date
    }

})
const inAction = module.exports = mongoose.model("inAction", InActionSchema)
