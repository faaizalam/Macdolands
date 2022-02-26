import { Avatar, Box, Button, CircularProgress, Typography} from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { AddorderAction, clear, ListAction, OrderAction, removeAction,} from '../Action'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'
import { Store } from '../Store'
import { Usestyle } from '../styles'
import { Message } from '../components/Message';
import { Link } from 'react-router-dom'

export default function Orderscreen(props) {
  const styles =Usestyle()
  const {state,dispatch}=useContext(Store)
  const {Catogry,loading,error}=state.Catogrylist
  const {productlist,loading:loadings,error:errors}=state.catlist
  const {orderItems,ordertype,itemsprice,itemsCount,totalprice,tax}=state.order
  const [catname,setcatname]=useState('')
  const [quantity,setqty]=useState(1)
  const [product,setproduct]=useState({})
 
  const productClick =(p)=>{
      setproduct(p)
 
  }
  const done =()=>{
      props.history.push('/review')
  }
  const cancelremove=()=>{
    removeAction(dispatch,product)
 
}






  useEffect(()=>{
      if (!Catogry) {
          OrderAction(dispatch)
          
      }
      
  },[dispatch,Catogry])
  useEffect(()=>{
     ListAction(dispatch,catname)
     console.log(catname)
      
  },[dispatch, catname])
  
//   const catohandler =((name)=>{
//     setcatname(name)
    
//     // ListActions(dispatch,catname)
    
    
// })
// ListAction(dispatch,catname)
 
 const Addtoorder =()=>{
     
         AddorderAction(dispatch,{...product,quantity})

     
    //  setisopen(false)
 }
 
 const catohandler =((name)=>{
     ListAction(dispatch,name)
     console.log(name)
    

 })
   





  return (
    <div className='main'>
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
                <RemoveIcon className='nagitive' />

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
                    
                    
                
                <Button   onClick={()=>Addtoorder(product)}>
                    Add to order

                </Button>
                <Link to='/admins'>go to dashboard</Link>
                

            </div>


        </div>






        <div className={styles.rootssk}>
            <div className='disp'>
          

                <li>
               
                   {loading?(
                       <div className='loading' color='black'>
                       <CircularProgress/>
                       loading....
                       </div>
                    
                       
                   ):loading?(<Message>{error}</Message>)
                   :(
                       <> 
                       <div className='logos'> 
                       <Link to='/choose'> Backe to page </Link> 
                       <div>{orderItems.length}</div>
                     <marquee> <h1>Fast Food & Breakfast</h1></marquee>
                       <input type='search' placeholder='serach' onChange={(e)=>setcatname(e.target.value)} />
                           <img src='/images/eatin.png' className='logo' alt='logo'></img>
                           </div>
                       {
                           Catogry.map((x)=>(
                               <div key={x.name}
                               onClick={()=> catohandler(x.name)} >
                                   <Avatar className='fooditems' src={x.image} alt='name'/>
                                   <div>{x.name}</div>
                                   

                                
                               </div>

                           ))
                       }
                       </>

                   )
                }
               

                </li>
                <li className='liclss'>
                  {
                      
                      loadings?(
                      <div><CircularProgress/></div> )
                         :errors?(<Message>{errors}</Message>):(
                      
                            productlist.map((x)=>(
                           <div key={x.name}
                           onClick={()=>productClick(x)}
                           >
                               <div className='imgpro'>
                                   <img src={x.image} alt={x.name} className='food' ></img>
                              </div>
                               <div>
                                   <Typography>  
                                  name: {x.name}
                                  
                                   </Typography>
                                   <Typography>
                                   <Box>
                                       {x.calorie} cal
                                   </Box>
                                   </Typography>
                                   <Typography>
                                   <Box>
                                       {x.price} price
                                   </Box>
                                   </Typography>
                               </div>

                               </div>
                               
                        ))


                      )
                  }

                </li>

            </div>
        </div>
        <div className='information'>
          <div>
              Tax {tax} |total {totalprice} | type {ordertype} | itemp {itemsprice} | totalitem {itemsCount}
          </div>
          <Button
           onClick={()=>{clear(dispatch)
            props.history.push('/')
        }}
        
          >
        cancel
          </Button>
          <Button
         onClick={done}
          >
           Done
          </Button>
        </div>

    </div>
  )
}
