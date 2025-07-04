import React from 'react'
import LoginImage from "../assets/login.png"
import GoogleImage from "../assets/google.png"
import Grid from '@mui/material/Grid';                 
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';
//******TextField customization start******/
const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#11175D',
  },
 
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#11175D',
    },
  },
  width:"70%",
  //height:"5px", //kaj korse nah keno?
 marginBottom:"20px",
 fontSize:"5px !impotant",//kaj korse nah keno? placeholder a Email address lekhata soto korte chai.
 "::placeholder":"Enter your password"//kaj korse nah?

 });
//******TextField customization end******/
//******button Customization start*****/
const Mybutton = styled(Button)({
 
 width:"70%",
 fontSize: 10,
 padding: '6px 30px',
 border: '1px solid',
 borderRadius:"86px",
 lineHeight: 1.5,
backgroundColor:'#5F35F5',
borderColor: '#0063cc', 
 marginBottom:"10px"
});
//***********button Customization end****** */
const Login = () => {
  let[showpassword,setShowpassword] = useState(false);
  let handlepass=()=>{
  setShowpassword(!showpassword)
  }
  

  
  return (
     <div>
    <Grid container >    {/*spacing={2} মানে হল →  Grid item গুলোর মাঝখানে 2 unit = 16px ফাঁকা থাকবে। */}
      <Grid size={6}>
       <div className='reg-content-box'>
        <div className='reg-content'>
           <h2>Login to your account!</h2>
          <div className='Google-box'>
            <img src={GoogleImage} alt="Google-Logo"/>
            <h4>Login with Google</h4>
          </div>
             <CssTextField  type='email' id="outlined-basic" label="Email Address" variant="outlined" />
          
          <div  className='passwrd-input'>
               <CssTextField type={showpassword?"text":"password"}id="outlined-basic" label="Password" variant="outlined" />
              <div onClick={handlepass}  className='icon-box'>
                {
                  showpassword?
                  <FiEyeOff />
                   :
                  <FiEye /> 
                }
          
              </div>
          </div>
          
          
          
             <Mybutton  variant="contained">Login to Continue</Mybutton>
            <p id='sign-In'>Don't have an account ? <Link to="/Registration"><span> Sign up</span></Link></p>   {/* to="page ar name bole dite hove" */}
           </div>
         
       </div>
       </Grid>
       <Grid size={6}>
       <div className='img-part'>
        <img className='reg-img' src={LoginImage} alt='profile picture'/>
       </div>
     </Grid>
   </Grid>
  </div>
  )
}

export default Login