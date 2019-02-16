const express = require ('express')
const router = express.Router()
const Client  = require('../models/client')


// Sanity Test
router.get ('/sanity', function (req, res){
    res.send('OK')
    console.log("passed sanity test")
})

//  get all data 

router.get ('/clients', function (req, res){
    Client.find({})
    .exec(function(err, results){
        res.send(results)
    })
})
//  get Client By name 
router.get ('/client', function (req, res){
    Client.find({},'name owner emailType sold')
    .exec(function(err, results){
        res.send(results)
    })
})

/* router.get ('/chosenone/:name', function (req, res){
    Client.findOne({name: req.params.name},'name owner emailType sold')
    .exec(function(err, result){
        res.send(result)
    })
}) */


// Post new item
// To do - check data function - check new date to string
router.post ('/client',  function (req, res){
    let client  = req.body
    let newClient = new Client ({
        name: `${client.name} ${client.surname}`,
        country: client.country,
        owner: client.owner,
        sale: false,
        email: null,
        firstContact: new Date().toISOString(),
        emailType: null
    })
    newClient.save()
    res.send(newClient)

})

//  Update Client by owner A.findByIdAndUpdate(id, update, callback) // executes
router.put('/client', function (req, res){
Client.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    owner:req.body.owner,
    emailType: req.body.emailType,
    sold:req.body.sold
}, {new:true})
.exec(function(err, result){
    res.send(result)
})
})


//  Update Email Status
router.put('/updateEmail', function (req, res){
    Client.findByIdAndUpdate(req.body._id, {email:req.body.newEmail}, {new:true})
    .exec(function(err, result){
        res.send(result)
    })
    })



// Update sale status to true
router.put('/updateStatus',function (req, res){
    Client.findByIdAndUpdate(req.body._id, {sold:true}, {new:true})
    .exec(function(err, result){
        res.send(result)
    })
    })

    // Update country
router.put('/updateCountry',function (req, res){
    Client.findByIdAndUpdate(req.body._id, {country: req.body.newCountry }, {new:true})
    .exec(function(err, result){
        res.send(result)
    })
    })

    router.put('/updateName',function (req, res){
        Client.findByIdAndUpdate(req.body._id, {name: req.body.newName }, {new:true})
        .exec(function(err, result){
            res.send(result)
        })
        })
//  To DO  - update client name
module.exports = router