import React from 'react'
import {Box,Card,CardActionArea,Typography } from "@material-ui/core"
import TouchAppIcon from "@material-ui/icons/TouchApp"
import { Logo } from '../components/Logo'
import {Usestyle} from "../styles"

export const Home = (props) => {
  const styles =Usestyle()
  return (
    <Card>
        <CardActionArea onClick={()=> (props.history.push('/choose'))} className={styles.con}>
            <div className='mains'>
            <Box className={styles.sec2}>
                <Typography >
                fast & Easy
                </Typography>
                <Typography className={styles.h6}>
                 Order <br /> & pay <br /> here
                </Typography>
                <Typography className={styles.h6}>  
                <Box> 
                <TouchAppIcon fontSize='large'  ></TouchAppIcon>
                </Box>
                </Typography>
                
                </Box>

                <Box  className={styles.sec1} >
                    <Logo />
                    <Typography >Touch to start</Typography>
                </Box>
            </div>
        </CardActionArea>
    </Card>
  )
}
