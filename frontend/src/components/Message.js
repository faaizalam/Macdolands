import Alert from '@material-ui/lab/Alert'
import React from 'react'

export const Message = ({error}) => {
  return (
      <div>
      {
          error ? (
            
              <Alert severity='error' width="500px" className='alert'>{error}</Alert>
  
          ):( <Alert severity='error' className='alert'>just Error</Alert>)
}
          </div>
  )
}