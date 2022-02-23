import { Typography,Fade,Box } from '@material-ui/core'
import React, { useContext } from 'react'
import { setorder } from '../Action'
import { Logo } from '../components/Logo'
import { Store } from '../Store'

import { Usestyle } from '../styles'


export const Choose = (props) => {
    const styles =Usestyle()
    const {dispatch} =useContext(Store)
    const Choosehandler = (ordertype)=>{
        setorder(dispatch,ordertype)
        props.history.push('/order')
    }


  return (
    <Fade in={true} >
        <Box className={styles.con}>  
        <Box className={[styles.basic,styles.navy]}>
            <Box>
                <Box className={styles.Log}>
            <Logo />

                </Box>
         
                <Typography className={styles.color1}>
                    Where will you having today ?
                </Typography>
                   <Box className={styles.Log} onClick={()=>Choosehandler('eat in')}>
                <img src='/images/eatin.png' alt='pic' id='ani' className={styles.Logoo} ></img>
                </Box>
                   <Box className={styles.Log} onClick={()=>Choosehandler('Take out')}>
                <img src='/images/takeiut.jpg' alt='pic' id='ani' className={styles.Logoo} ></img>
                </Box>


            </Box>
        </Box>
        </Box>
    </Fade>
  )
}
