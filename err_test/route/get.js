var express = require('express')
var router = express.Router()
const MSME = require('../models/MSME.js')
const consultant = require('../models/Consultant.js')
const inAction = require('../models/In_Action.js')
const MonthlyProgress = require('../models/Monthly_progress.js')
const PreConsulting = require('../models/Pre_Consulting.js')
const Product = require('../models/Product')
const { default: mongoose } = require('mongoose')



// get all the product of an MSME of name name 
router.get('/products/:name', async (req, res) => {

    try {

        // get the id of the msme
        let msme = await MSME.find({ Name: req.params.name })
        let msme_id = msme[0]["_id"]
        // MSME_id is an index
        let products = await Product.find({ MSME_id: msme_id }, { 'Name': 1, '_id': 0 })
        res.json(products)

    }
    catch (error) {
        res.json(error)
    }


})
// get all consultants of an MSME of name name 
router.get('/consultants/:name', async (req, res) => {

    try {

        // get the id of the consultant
        let msme = await MSME.find({ Name: req.params.name })
        let msme_id = msme[0]["_id"]

        // find consultants info 
        let consultant = await inAction.aggregate([
            { $match: { MSME_id: mongoose.Types.ObjectId(msme_id) } },
            {
                $lookup: {
                    from: 'consultants',
                    localField: 'Consultant_id',
                    foreignField: '_id',
                    as: 'consultantinfo'
                }
            },
            {
                $project: {
                    "_id": 0,
                    "First_Name": "$consultantinfo.First_Name",
                    "Industry": "$consultantinfo.Industry"

                }
            }


        ])


        res.json(consultant)

    }
    catch (error) {
        res.json(error)
    }


})
// sum coaching hours of an msme of name name 

router.get('/hours/:name', async (req, res) => {

    try {

        // get the id of the consultant
        let msme = await MSME.find({ Name: req.params.name })
        let msme_id = msme[0]["_id"]


        let consultant = await inAction.aggregate([
            { $match: { MSME_id: mongoose.Types.ObjectId(msme_id) } },
            {
                $group: {
                    // summ all matched elements
                    "_id": 0,
                    "Total Coaching Hours": { $sum: "$coaching_hours" }
                }
            }


        ])



        res.json(consultant)


    }
    catch (error) {
        res.json(error)
    }


})
// get expected coaching hours of an msme
router.get('/expected/:name', async (req, res) => {
    try {
        let msme = await MSME.find({ Name: req.params.name })
        let msme_id = msme[0]["_id"]

        let expected = await PreConsulting.aggregate([
            { $match: { MSME_id: mongoose.Types.ObjectId(msme_id) } },
            {
                $project: {
                    "_id": 0,
                    "Expected Coaching Hours": "$Expected_coaching_hours"
                }
            }
        ])
        res.json(expected)
    }

    catch (error) {
        res.json(error)
    }
})



module.exports = router;