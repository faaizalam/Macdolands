import { CircularProgress } from '@material-ui/core';
import React, { useContext, useEffect } from 'react'
import { createOrder } from '../Action';
import { Message } from '../components/Message';
import { Order_clear } from '../constant';
import { Store } from '../Store'

export const Compl = (props) => {
   
  const {state,dispatch}=useContext(Store)
  const { order }= state;
  const {loading,error,newOrder}=state.orderCrate

  useEffect(()=>{
    if (order.orderItems.length > 0) {
      
      createOrder(dispatch,order)
      dispatch({
        type:Order_clear
      })
    }


  },[dispatch, order])
 
  // const tryy =(()=>{
  //   createOrder(dispatch,order)

  // })


  return (
   
    <div>
      <div>
        {
          loading?(<CircularProgress/>):error?(<Message error={error}/>):(
            <>
            <div>
              order has been placed
              <div>
              {newOrder.number}
              </div>
              <h1> 
              {newOrder._id}
              </h1>
              

            </div>
            {/* <button onClick={()=>props.history.push('/')} > */}
            <button onClick={()=>props.history.push('/')} >
              Again order

            </button>
            </>
          )
          
        }
      </div>

    </div>
    
  )
  
}
