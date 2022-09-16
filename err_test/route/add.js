var express = require('express')
var router = express.Router()
const MSME = require('../models/MSME.js')
const consultant = require('../models/Consultant.js')
const inAction = require('../models/In_Action.js')
const MonthlyProgress = require('../models/Monthly_progress.js')
const PreConsulting = require('../models/Pre_Consulting.js')
const Product = require('../models/Product')
const { nextTick } = require('process')
var mongoose = require('mongoose');
var objectId = new mongoose.Types.ObjectId();


// inserting a new MSME
router.post('/MSME', async (req, res, next) => {
    
    let new_MSME = new MSME({
        Name: req.body.Name,
        Website: req.body.Website,
        Industry: req.body.Industry,
        Business_Model: req.body.Business_Model,
        Address: req.body.Address,
        Year_of_Establishment: req.body.Year_of_Establishment,
    })
    //try {
        const result = await new_MSME.save()
        res.json({ msg: "your MSME has been added succefully" })
        // prog error test ==> uncaught exception
        const response = undefined;
        console.log(response.data);
   // }
    //catch (error) {
       // next(error)
        //res.json(error)
    //}

})
// adding new consultant
router.post('/Consultant', async (req, res, next) => {
    let new_Consultant = new consultant({
        // duplicating id for test
        _id : new mongoose.Types.ObjectId('627ad0fff9832e72f6513b3e'),
        First_Name: req.body.First_Name,
        Last_Name: req.body.Last_Name,
        Email_Address: req.body.Email_Address,
        Mobile_Number: req.body.Mobile_Number,
        Experience: req.body.Experience,
        Country: req.body.Country,
        City: req.body.City,
        Area_Of_Experience: req.body.Area_Of_Experience,
        Role_Level: req.body.Role_Level,
        Industry: req.body.Industry,
        Date_Of_Birth: req.body.Date_Of_Birth,
    })
    try {
        let result = await new_Consultant.save();
        res.json({ msg: "your Consultant has been added succefully" })
    }
    catch (error) {
        next(error)

    }


})
// add new product to existing MSME
router.post('/Product/:id', async (req, res) => {
    let new_product = Product({
        MSME_id: req.params.id,
        Category: req.body.Category,
        Name: req.body.Name,
        Description: req.body.Description,
        Price: req.body.Price,
        Image_url: req.body.Image_url
    })
    try {
        let result = await new_product.save()
        res.json({ msg: "your Product has been added succefully" })
    }
    catch (error) {
        next(error)
    }
})
// adding a new preconsulting
router.post('/PreConsulitng/:id', async (req, res) => {
    let new_precons = new PreConsulting({
        MSME_id: req.params.id,
        Begning_Stage: req.body.Begning_Stage,
        Expected_coaching_hours: req.body.Expected_coaching_hours,
        Goal_stage: req.body.Goal_stage
    })
   
    try {
        const result = await new_precons.save()
        res.json({ msg: "your precons has been added succefully" })
    }
    catch (error) {
        next(error)

    }
})
// adding monthly progress
router.post('/progress/:id', async (req, res) => {
    let new_month = new MonthlyProgress({
        MSME_id: req.params.id,
        Month_Number: req.body.Month_Number,
        Number_Of_Employee: req.body.Number_Of_Employee,
        Number_Of_Customers: req.body.Number_Of_Customers,
        Revenue: req.body.Revenue,
        Current_Stage: req.body.Current_Stage
    })
    try {
        let result = await new_month.save()
        res.json({ msg: "saved succefully" })
    }
    catch (error) {
        res.json(error)
    }

})
// exisitng consultant is consulting existing MSME
router.post('/action/:id', async (req, res) => {
    let new_action = new inAction({
        MSME_id: req.params.id,
        Consultant_id: req.body.Consultant_id,
        coaching_hours: req.body.coaching_hours,
        starting_date: req.body.starting_date
    })
    try {
        let result = await new_action.save()
        res.json({ msg: "action saved succefully" })
    }
    catch (error) {
        res.json(error)
    }
})



module.exports = router;