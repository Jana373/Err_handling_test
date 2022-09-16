const mongoose = require('mongoose')

const ConsultantSchema = mongoose.Schema({    
        First_Name: {
            type: String
        },
        Last_Name: {
            type: String
        },
        name: {
            first: String,
            last: String,
        },
        email: {
            type: String
        },
        mobile: {
            type: String
        },
        experience: {
            type: Number
        },
        Country: {
            type: String
        },
        City: {
            type: String
        },
        Area_Of_Experience: {
            type: String
        },
        Role_Level: {
            type: String
        },
        Industry: {
            type: String
        },
        Date_Of_Birth: {
            type: String
        },
})
const consultant = module.exports = mongoose.model("Consultant", ConsultantSchema);

