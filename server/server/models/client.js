const mongoose = require ('mongoose')
const Schema = mongoose.Schema



//  Discuss with Jona  - the  _id  issue - why it took json file id and not the generated id

// Ask about mongod connection port
const clientSchema = new Schema({
    name: String,
    email: String,
    firstContact: String,
    emailType: String,
    sold: Boolean,
    owner:String,
    country:String


})

const Client  = mongoose.model("Client", clientSchema)

//  Creating the DB 
// const data = require('../data.json')

/* data.forEach(c=>{
    let client =new Client(c)
    client.save()
}) */


module.exports = Client