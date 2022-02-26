import express from 'express'
import  mongoose  from 'mongoose'
import dotenv from 'dotenv'
// import path from 'path'
import data from './Dats.js'
import Pro from './modles.js'
import Order from './Ordermodle.js'


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
dotenv.config();
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/macdolands').then(()=>{
    console.log('connected')
}).catch((error)=>{
    console.log(error)

})








app.get('/postman/products/seed',(async(req,res)=>{
   
        const response = await Pro.insertMany(data.products)
         res.send(response)
        
    }

    
    ))
    
    
    
    // app.get('/postman/products', async (req,res)=>{
    //     const { category } = req.query;
    //     const Products = await Pro.find (category? {category} : {});
    //     res.send(Products)
        
    // })

    app.get('/postman/products', async (req,res)=>{
        // const { category } = req.query;
        const Products = await Pro.find ({});
        res.send(Products)
        
    })
    // app.post('/postman/products',async(req,res)=>{
    //         const newProd =  new Pro (req.body);
    //         const saves = await newProd.save();
    //         res.send(saves)
    //     })
    
app.get('/postman/cato',(req,res)=>{
    
    res.send(data.catogerise)
})
    
  
// number: -1 its in model -1 goes to show from end of orders decendimg and 1 to start accending
// number -1 with sort tells from last order where but limit tells only (1) of last 

app.post('/postman/ordercreate',async(req,res)=>{
   
    const lastOrder = await Order.find().sort({ number: -1 }).limit(1);
    const lastNum = lastOrder.length === 0 ? 0 :  lastOrder[0].number;

    if (req.body.orderItems===0 || !req.body.orderItems) {
        return res.send({message:'Data is required'})
        
    }else{
    const Create = new Order({
        orderItems:req.body.orderItems,
        paymenttype:req.body.paymenttype,
        ordertype:req.body.ordertype,
        totalprice:req.body.totalprice,
       number:lastNum + 1
    
        
    })
    const created = await Create.save()
    res.send(created)
}
      

    



})

app.get('/postman/orders',(async(req,res)=>{

     const orders = await Order.find({isDelivered:false,isCancelled:false,})
     res.send(orders);
    



}))
app.put('/postman/orders/:id',(async(req,res)=>{
 const resp = await Order.findById(req.params.id);
 if (resp) {
 if (req.body.action==='ready') {
     resp.isReady=true;
     resp.inProgress=false;
     
 }else if(req.body.action==='delivered'){
    resp.isDelivered=true;
 } else if(req.body.action==='cancel'){
     resp.isCancelled=true

 }

     await resp.save()
     res.send({message:'done'})
 } else{
     res.status(404).send({message:'not found'})
 }




}))



app.get('/postman/orders/que',async(req,res)=>{
    const responseprogress = await Order.find({inProgress:true,isCancelled:false},'number')
    const responsedeliver = await Order.find({isReady:true,isDelivered:false},'number')
    res.send({responseprogress,responsedeliver})

})



// const __dirname =path.resolve()




// app.use(express.static(path.join(__dirname, '/frontend/build')));
// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
// })

app.listen(process.env.PORT || 5000,(()=>{
    console.log('working on 5000')
}))




