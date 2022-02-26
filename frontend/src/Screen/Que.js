import { CircularProgress } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

import React, { useContext, useEffect } from 'react'
import { que } from '../Action'
import { Store } from '../Store'

export const Que = () => {
    const {state,dispatch}=useContext(Store)
    const {loading,error,ques}=state.quelist

    useEffect(()=>{
     que(dispatch)
    },[dispatch,ques])

  return (
    <div className='quesmain'>
        {loading?(<CircularProgress/>):error?(<Alert>{error}</Alert>):(
           <div>
            
            <div>
            <h1>In Progress</h1>
            {
                ques.responseprogress.map((x)=>(
                    <div>
                        {x.number}
                        </div>

                ))
            }

        </div>
        <div>
            <h1>now serving</h1>
            {
                ques.responsedeliver.map((x)=>(
                    <div>
                        {x.number}
                        </div>

                ))
            }

        </div>
               </div>

        )}
      
    </div>
  )
}
