const mongoose = require('mongoose')

const MonthlyProgressSchema = mongoose.Schema({
    MSME_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MSME'
    },
    Month_Number: {
        type: Number
    },
    Number_Of_Employee: {
        type: Number
    },
    Number_Of_Customers: {
        type: Number
    },
    Revenue: {
        type: Number
    },
    Current_Stage: {
        type: String
    }
})
const MonthlyProgress = module.exports = mongoose.model('MonthlyProgress', MonthlyProgressSchema)