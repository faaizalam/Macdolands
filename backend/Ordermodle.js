import  mongoose from "mongoose";


const OrderSchem =new mongoose.Schema({

    number:{type:Number,default:0},
    ordertype:{type:String},
    paymenttype:{type:String},
    isPaid:{type:Boolean,default:false},
    isReady:{type:Boolean,default:false},
    inProgress:{type:Boolean,default:true},
    isCancelled:{type:Boolean,default:false},
    isDelivered:{type:Boolean,default:false},
    itemsPrice:Number,
    tax:Number,
    totalprice:Number,

    orderItems:[{
        name:String,
        price:String,
        quantity:String
    }]


},{timestamps:true})

 const Order = mongoose.model('Order',OrderSchem)
 export default Order;
