import { Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { Store } from '../Store';
import { AddorderAction, removeAction } from '../Action';

export default function Review(props) {
  const {state,dispatch}=useContext(Store)
  const [quantity,setqty] =useState(1);
  const [product,setproduct]=useState({})
  const {orderItems,ordertype,itemsprice,itemsCount,totalprice,tax}=state.order

  
    const selectpayment=()=>{
      props.history.push(`/selectpayment/${quantity}`)

    
  }


  const Prodcuthandler =(p)=>{

    setproduct(p)


  }
  const Addtoorder =()=>{
    AddorderAction(dispatch,{...product,quantity})
   //  setisopen(false)
}
const cancelremove=()=>{
  removeAction(dispatch,product)

}


  return (
    
    <div className='summary'>
    <div className='dailoug'>
          
        
          <div className='title'>
               {
                   orderItems.map((x)=>
                   <div>
                       {x.name}
                       </div>

                   )
               }
               

          </div>
          <div className='removeqty'>
              <Button disabled={quantity===1} 
              onClick={(e)=> quantity>1 && setqty(quantity - 1)}
              > 
              <RemoveIcon  className='negative'/>

              </Button>
              <div className='text'>
                  <input type='number' value={quantity} />

              </div>
              <Button
               onClick={(e) => setqty(quantity + 1)}
              >
                  <AddIcon className='positive'/>

              </Button>

          </div>
          <div className='removeandcancel'>
              
              <Button onClick={cancelremove}>
                  remove

              </Button>
                  
                  
              
              <Button onClick={Addtoorder}>
                  Add to order

              </Button>
              

          </div>
          <div className='listoffoods'>
            <div
            className='insidelist'>
              Review my {ordertype} order

            </div>
            <div className='grid'>
              {
                orderItems.map((x)=>(
                  <div key={x.name}>
                    <div className='insidegrid' 
                    onClick={()=>Prodcuthandler(x)}
                    >
                      <div className='orderclassifications'>
                        {
                         x.name
                        }
                        </div>
                        <Button>edit</Button>
                        <div>
                          {x.calorie}
                          </div>
                        <div>
                          {x.price}
                          </div>
                        <div>
                          {x.quantity}
                          </div>

                      
                      </div>
                    
                    </div>
                ))
              }

            </div>

          </div>
          <div>
            My orders = {ordertype==='Take out'?'take-out':'Eat in'} ||
            TAX:$ {tax} || $ {totalprice} || $ {itemsprice} || total-items {itemsCount}
            <button onClick={selectpayment}>Proccess to checkout</button>

          </div>


    </div>

    </div>
  )
}
