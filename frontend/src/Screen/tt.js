// import React, { useContext, useEffect } from 'react'
// import { CircularProgress } from '@material-ui/core'
// import Alert from '@material-ui/lab/Alert'
// import { Store } from '../Store';
// import { listOrder } from '../Action';
// import axios from 'axios';

// export const tt = () => {
//     const {state,dispatch}=useContext(Store)
//     const { orderl,loading,error}= state.orderlistss;

//     // const {loading,error}=state.orderCrate;
//     useEffect(()=>{
//         listOrder(dispatch)
//     },[dispatch])

//     const setOrderhand= async(order,action)=>{
//         try {
            
//             await axios.put(`/postman/orders/${order._id}`,{
//                 action
//             });
//             listOrder(dispatch)

//         } catch (error) {
//             alert(error.message)
            
//         }

//     }
//   return (
//     <div>
//            <div className='adminmain'>
     
//      <div className='loadingerror'>
//          {
//           loading?
//             (<CircularProgress/>):error?(<Alert>{error}</Alert>):(
 
//              <div className='table'>
//                  <table>
//                      <thead>
//                          <tr>
//                              <th>Order num</th>
//                              <th>price</th>
//                              <th>Count</th>
//                              <th>items</th>
//                              <th>types</th>
//                              <th>payment</th>
//                              <th>state</th>
//                              <th>Action</th>
//                          </tr>
//                      </thead>
//                      <tbody>
//                          {
//                               orderl.map((x)=>(
//                                  <tr key={x.name}>
//                                      <td>
//                                      { orderl.number}
//                                      </td>
//                                      <td>
//                                      { orderl.totalprice}
//                                      </td>
//                                      <td>
//                                      {orderl.orderItems.length}
//                                      </td>
//                                      <td>
//                                          {
//                                              orderl.orderItems.map((x)=>
//                                              (
//                                                 <div>
//                                                     {x.name} X {x.quantity}
//                                                 </div> 
//                                              ))
//                                          }
//                                      </td>
//                                      <td>
//                                          {orderl.ordertype}
//                                      </td>
//                                      <td>
 
//                                          {orderl.paymenttype}
//                                      </td>
//                                      <td>
//                                          {
//                                              orderl.inProgress ? 'In progress':orderl.isReady?'Ready':orderl.isisDelivered?'Deliviered':'unknown'
//                                          }
//                                      </td>
//                                      <td>
//                                          <button onClick={()=>setOrderhand(orderl,'ready')}>Ready</button>
//                                      </td>
//                                      <td>
//                                          <button onClick={()=>setOrderhand(orderl,'cancel')}>Ready</button>
//                                      </td>
//                                      <td>
//                                          <button onClick={()=>setOrderhand(orderl,'delivered')}>Ready</button>
//                                      </td>
                                     
                                     
//                                      </tr>
 
//                              ))
//                          }
                         
                             
                     
//                      </tbody>
 
 
 
 
//                  </table>
                 
 
                 
//                  </div>
           
         
         
 
 
 
//          )}
 
//      </div>
//      </div>
//     </div>
//   )
// }
