var express = require('express')
var router = express.Router()
const MSME = require('../models/MSME.js')
const consultant = require('../models/Consultant.js')
const inAction = require('../models/In_Action.js')
const MonthlyProgress = require('../models/Monthly_progress.js')
const PreConsulting = require('../models/Pre_Consulting.js')
const Product = require('../models/Product')
const Pre_Consulting = require('../models/Pre_Consulting.js')


// delete a MSME of name name and all its refrences
router.delete('/MSME/:name', async (req, res) => {
    try {
        // find MSME id 
        let msme = await MSME.find({ Name: req.params.name })
        let msme_id = msme[0]["_id"]
        // delete progress 
        let prog = await MonthlyProgress.find({ MSME_id: msme_id }).remove()
        // delete pre_consulting 
        let pre = await Pre_Consulting.find({ MSME_id: msme_id }).remove()
        // delete products
        let product = await Product.find({ MSME_id: msme_id }).remove()
        //res.json(product)
        // delete actions 
        let action = await inAction.find({ MSME_id: msme_id }).remove()
        //res.json(action)
        // delete MSME
        let MSME_item = await MSME.find({ _id: msme_id }).remove()
        //res.json(MSME_item)
        res.json({ msg: "deleted succefully" })

    }
    catch (error) {
        res.json(error)

    }
})




module.exports = router;