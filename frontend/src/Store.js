
import React, { createContext, useReducer } from "react";
import { Cat_LIST_fail, Cat_List_Req, Cat_LIST_succ, Cat_setfail, Cat_setreq, Cat_setsucc, Order_ADD, Order_clear, Order_create_fail, Order_create_req, Order_create_succ, Order_Remove, Order_set, Pyamentmethod } from "./constant";



 export const Store = createContext()

const initial =({
    order:{
        ordertype:'Eat in',
        orderItems:[],
        tax:0,
        itemsprice:0,
        itemsCount:0,
        totalprice:0,
        paymenttype:'pay here'
      
    },
    Catogrylist:{
        loading:true
    },
    catlist:{
        loading:true
    },
    orderCrate:{loading:true},
   

})

function reducer(state,action) {
    switch (action.type) {
// we use ...state in every request when we use one reducer for more than one filed as productlist,Catogry,caritems,becouse when one stuff change say payment method we dont want to be changed other fields

        case Cat_List_Req:
            
            return{
                ...state,catlist:{loading:true}
            }
            case Cat_LIST_succ:
                return{
                    ...state,
                    catlist:{loading:false,productlist:action.payload}
                }
            case Cat_LIST_fail:
                return{
                    ...state,
                    catlist:{loading:false,error:action.payload}
                }




        case Cat_setreq:
            return{
                ...state,loading:true
            }
            case Cat_setsucc:
                return{
                    ...state, 
                    Catogrylist:{ loading:false,Catogry:action.payload}
                }
                 case Cat_setfail:
                     return{
                         loading:false,
                         error:'error'
                     }





        case Order_set:
          const ordertype=action.payload;
            return{
                ...state,
                order:{...state.order,ordertype}
                

            }
            case Order_ADD:{
                const item =action.payload
                const existItem= state.order.orderItems.find((x)=>x.name===item.name)
                const toround=((num)=> Number(num.toFixed(2)))
                const orderItems = existItem ?[...state.order.orderItems.map((x)=>x.name===existItem.name?item:x)]:[...state.order.orderItems,item]
                const itemsCount = orderItems.reduce((a,c)=>a+c.quantity,0)
                const itemsprice = orderItems.reduce((a,c)=>a+c.quantity*c.price,0)
                const tax =  toround(0.15*itemsprice)
                const totalprice = toround(tax + itemsprice)
                
              
                    return{
                        ...state,
                        order:{
                            ...state.order,
                            orderItems,
                            itemsCount,
                            itemsprice,
                            tax,
                            totalprice,
                        }

                    }
                
              
            }

                case Order_Remove:

                    const orderItems=[...state.order.orderItems.filter((x)=>x.name !==action.payload.name)]
                    const itemsCount= orderItems.reduce((a,c)=>a+c.quantity,0)
                    const itemsprice =orderItems.reduce((a,c)=>a+c.quantity*c.price,0)
                    const tax = (0.15*itemsprice)
                    const totalprice = (tax + itemsprice)
                    return{
                       ...state,
                       order:{
                           ...state.order,
                           orderItems,
                           itemsCount,
                           itemsprice,
                           tax,
                           totalprice,
                       }
                    }
                
            case Order_clear:
                return{
                ...state,
                order:{
                    orderItems:[],
                    tax:0,
                    totalprice:0,
                    itemsCount:0,
                    itemsprice:0
                }

                }

                case Pyamentmethod:
                    return{
                         ...state,
                        order:{
                            ...state.order,
                            paymenttype:action.payload,
                            sucess:true,
                        }

                    }

            case Order_create_req:
                return{
                    ...state,
                    orderCrate:{loading:true}
                }
                case Order_create_succ:
                    return{
                        ...state,
                        orderCrate:{loading:false,newOrder:action.payload}
                    }
                case Order_create_fail:
                    return{
                        ...state,
                        orderCrate:{loading:false,error:action.payload}
                    }
               
                    
    
        default:
            return state
    }



    
}

export const Stroepro=({children})=>{
    const [state,dispatch]=useReducer(reducer,initial)
    // const value ={state,dispatch}
    return (

  <Store.Provider value={{state,dispatch}}>
      {children}
      
  </Store.Provider>

    )


}