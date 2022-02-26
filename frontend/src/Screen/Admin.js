import React, { useContext, useEffect } from 'react'
import { CircularProgress } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { Store } from '../Store';
import { listOrder } from '../Action';
import axios from 'axios';


export default function Admin(props) {
    const {state,dispatch}=useContext(Store)
    const { orderl,loading,error}= state.orderlistss;

    // const {loading,error}=state.orderCrate;
    useEffect(()=>{
        listOrder(dispatch)
    },[dispatch])

    const setOrderhand= async(order,action)=>{
        try {
            
            await axios.put(`/postman/orders/${order._id}`,{
                action
            });
            listOrder(dispatch)

        } catch (error) {
            alert(error.message)
            
        }

    }


  return (

    <div className='adminmain'>
     
    <div className='loadingerror'>
        {
         loading?
           (<CircularProgress/>):error?(<Alert>{error}</Alert>):(

            <div className='table'>
                <table>
                    <thead>
                        <tr>
                            <th>Ordernum</th>
                            <th>price</th>
                            <th>Count</th>
                            <th>items</th>
                            <th>types</th>
                            <th>payment</th>
                            <th>state</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                             orderl.map((x)=>(
                                <tr key={x.name}>
                                    <td>
                                    { x.number}
                                    </td>
                                    <td>
                                    {x.totalprice}  
                                    </td>
                                    <td>
                                    {x.orderItems.length}
                                    </td>
                                    <td> 
                                        {
                                            x.orderItems.map((item)=>
                                            (
                                               <div>
                                                   {item.name} X {item.quantity}
                                               </div> 
                                            ))
                                        }
                                    </td>
                                    <td>
                                        {x.ordertype}
                                    </td>
                                    <td>

                                        {x.paymenttype}
                                    </td>
                                    <td>
                                        {
                                            x.inProgress ? 'In progress':x.isReady?'Ready':x.isisDelivered?'Deliviered':'unknown'
                                        }
                                    </td>
                                    <td>
                                        <button onClick={()=>setOrderhand(x,'ready')}>Ready</button>
                                    </td>
                                    <td>
                                        <button onClick={()=>setOrderhand(x,'cancel')}>cancel</button>
                                    </td>
                                    <td>
                                        <button onClick={()=>setOrderhand(x,'delivered')}>delivered</button>
                                    </td>
                                    
                                    
                                    </tr>

                            ))
                        }
                        
                            
                    
                    </tbody>




                </table>
                

                
                </div>
          
        
        



        )}

    </div>
    </div>
  )
}
