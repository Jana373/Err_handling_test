const mongoose = require('mongoose')

const PreConsultingSchema = mongoose.Schema({
    MSME_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MSME'
    },
    Begning_Stage: {
        type: String
    },
    Expected_coaching_hours: {
        type: String
    },
    Goal_stage: {
        type: String
    }


})
const PreConsulting = module.exports = mongoose.model('PreConsulting', PreConsultingSchema)