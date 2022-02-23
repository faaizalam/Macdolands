import React, { useContext,} from 'react'
import { Setpaymenttype } from '../Action'
import { Logo } from '../components/Logo'
import { Store } from '../Store'

export default function Selectpayment(props) {

    const {dispatch}=useContext(Store)
    // const {paymenttype,sucess}=state.order
   


    

  

    
        const selectpayhandler=(method)=>{
        
              Setpaymenttype(dispatch,method)
             if (method==='pay here') {
                props.history.push('/payment')

                 
             }else{
                props.history.push('/complete')

             }
            }
         
          
        
         
    
   
  return (
 
    <div className='summary'>
        <div>
        <Logo/>
        </div>
        <div>
            <div>
                <h2>Select payment here|| </h2>

            </div>
            <div onClick={()=>{selectpayhandler('pay here')}}>
            <img src='/images/eatin.png' alt='pic' id='ani'></img>
            <h3>pay here</h3>
            </div>
            <div onClick={(e)=>{selectpayhandler('at counter')}}>
            <img src='/images/takeiut.jpg' alt='pic' id='ani'></img>
            <h3>At counter</h3>
            </div>
        </div>




    </div>



  )
}
