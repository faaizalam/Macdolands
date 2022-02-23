import mongoose from 'mongoose'


const Product =  new mongoose.Schema({

    category:{type:String},
    name:{type:String},
    image:{type:String},
    price:{type:Number},
    calorie:{type:Number},
    description:{type:String},

   




})

const Pro = mongoose.model('Pro',Product)
export default Pro