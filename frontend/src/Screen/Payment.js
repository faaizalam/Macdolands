import { CircularProgress } from '@material-ui/core'
import { useContext } from 'react'

import { Logo } from '../components/Logo'
import { Store } from '../Store'


export default function Payment(props) {
  const {state}=useContext(Store)
  const {totalprice}=state.order


  if (totalprice===0) {

    props.history.push('/order')
    
  }


  return (
    <div>
        <div>
            <Logo/>
        </div>

        <div className='summary'>
            please follow the instruction on the pin paid 

        </div>
        <button onClick={()=>props.history.push('/complete')}>
            complete order
        </button>
        <CircularProgress/>
    </div>
  )
}
