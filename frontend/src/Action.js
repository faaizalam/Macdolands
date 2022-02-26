import Axios from 'axios'
// import { useState } from 'react'
import {  Cat_LIST_fail, Cat_List_Req, Cat_LIST_succ, Cat_setfail, Cat_setreq, Cat_setsucc, Ordeer_list_fail, Ordeer_list_reqq, Ordeer_list_succ, Ordeer_q_fail, Ordeer_q_reqq, Ordeer_q_succ, Order_ADD, Order_clear, Order_create_fail, Order_create_req, Order_create_succ, Order_Remove, Order_set, Pyamentmethod } from "./constant"

export const setorder=(dispatch,ordertype)=>{
    dispatch({
        type:Order_set,
        payload:ordertype
    })

}

export const OrderAction =async(dispatch)=>{
    dispatch({
        type:Cat_setreq,
       })
    try {
      const {data} = await Axios.get('/postman/cato')
      dispatch({
          type:Cat_setsucc,
          payload:data
      })
        
    } catch (error) {
        dispatch({
            type:Cat_setfail,
            payload:error.message || error.data.message
        })
    }
  

}

export const ListAction=async(dispatch,category)=>{

    // const [name,setname]=useState({})
    // const cat=category.toLowerCase()
    dispatch({
        type:Cat_List_Req,
        
    })
    try {

        const {data}= await Axios.get('/postman/products')
         
          const bismillah = category? data.filter((x)=>x.category===category) :data;
          
        
        dispatch({
            type:Cat_LIST_succ,
            payload:bismillah
        })
    } catch (error) {
        
              dispatch({
                  type:Cat_LIST_fail,
                  payload:error.message||error.bismillah.message
              })

    }

}







export const AddorderAction=(dispatch,item)=>{
    dispatch({
        type:Order_ADD,
        payload:item,
    })

}
export const removeAction=(dispatch,item)=>{
    dispatch({
        type:Order_Remove,
        payload:item,
    })

}
export const clear=async(dispatch)=>{
    dispatch({
        type:Order_clear,
        
    })

}

export const  Setpaymenttype=async(dispatch,method)=>{

    dispatch({
        type:Pyamentmethod,
        payload:method,
    })




}

export const createOrder =async(dispatch,order)=>{
    dispatch({
        type:Order_create_req,
        
    })
    try {
        
        const {data}= await Axios.post('/postman/ordercreate',order);
        dispatch({
            type:Order_create_succ,
            payload:data,
        })
        dispatch({
            type:Order_clear
        })


    } catch (error) {
        dispatch({
            type:Order_create_fail,
            payload:error.message
        })
        
    }

}

export const listOrder=async(dispatch)=>{
    dispatch({
        type:Ordeer_list_reqq
    })
    try {
        const {data}= await Axios.get('/postman/orders')
        dispatch({
            type:Ordeer_list_succ,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:Ordeer_list_fail,
            payload:error.message||error.data.message
        })
        
    }

}

export const que = async(dispatch)=>{
   dispatch({
       type:Ordeer_q_reqq,

   })
   try {
       const {data} = await Axios.get('/postman/orders/que')
       dispatch({
           type:Ordeer_q_succ,
           payload:data
        
       })

       
   } catch (error) {

    dispatch({
        type:Ordeer_q_fail,
        payload:error.message||error.data.message
    })
       
   }


}