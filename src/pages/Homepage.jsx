import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Userlist from '../lauouts/Userlist';

const Homepage = () => {
  let navigate=useNavigate()
  //let data=useSelector((state)=>console.log(state.userinfo.value))
  let data = useSelector((state)=>state.userinfo.value)
  useEffect(()=>{
    if(!data){
      navigate("/login")
    }

  },[])
  return (
    <div className='grid-devision'>
      <Grid container spacing={2}>
        <Grid size={4}>
       <Userlist/>
        </Grid>
        <Grid size={4}>
       <Userlist/>
        </Grid>  
         <Grid size={4}>
         <Userlist/>
        </Grid>  
          <Grid size={4}>
             <Userlist/>
          </Grid>          
        <Grid size={4}>
          <Userlist/>
        </Grid>                  
    </Grid>
      
    </div>
  )
}

export default Homepage