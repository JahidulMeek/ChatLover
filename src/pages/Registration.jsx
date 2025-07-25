import React from 'react'
import RegistrationImage from "../assets/chatImage.jpg"
import Grid from '@mui/material/Grid';                  // ami শুধুই Grid ব্যবহার করbo, tai শুধু Grid ইম্পোর্ট করলেই যথেষ্ট। কিন্তু যদি Box, Paper, styled() এসবও ব্যবহার kore, তাহলে সেগুলোকেও ইম্পোর্ট করতে হবে।
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification  } from "firebase/auth";
  import { ToastContainer, toast } from 'react-toastify';
import { Bars } from 'react-loader-spinner';
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
const Registration = () => {
  const auth = getAuth();
     let navigate= useNavigate();
   let[showpassword,setShowpassword] = useState(false);

   let[email,setEmail] = useState("")
   let[name,setName]=useState("")
   let [password,setPassword]=useState("")
   let [emailerror,setEmailerror]=useState("")
   let[nameerror,setNameerror]=useState("")
   let[passworderror,setPassworderror]=useState("")
   let [loader, setLoader]=useState(false)
  
 let handlepass=()=>{
 setShowpassword(!showpassword)
 }
 //***TextField a input accept start */
 let handleEmail=(e)=>{
  setEmail(e.target.value)
  setEmailerror("")
 }
 let handleName=(e)=>{
  setName(e.target.value)
  setNameerror("")
 }
 let handlePassword=(e)=>{
  setPassword(e.target.value)
  setPassworderror("")
 }
 let handleSignup=()=>{
  // console.log(email)
  // console.log(name)
  // console.log(password)
  if(!email){
    setEmailerror("Give Email")
    
  }else{
     if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      setEmailerror("Give a valid Email")
     }
  }

  if(!name){
    setNameerror("Give your Name")
  }
  if(!password){
    setPassworderror("Give email password");
  }
 else if(!/^(?=.*[a-z])/.test(password)){
  setPassworderror("Give a lower case");
  }
else if(!/(?=.*[A-Z])/.test(password)){
  setPassworderror("Give a Upper case");
}
else if(!/(?=.*\d)/.test(password)){
  setPassworderror("Give a digit");
}
else if(!/(?=.*[@$!%*?&])/.test(password)){
  setPassworderror("Give a special character")
}
else if(!/[A-Z a-z\d@$!%*?&]{8,}$/.test(password)){
  setPassworderror("at least 8 character long")
}
if(email && password && name ){
   setLoader(true)
   createUserWithEmailAndPassword(auth, email, password)
   .then((user) => {
    sendEmailVerification(auth.currentUser)
    .then(() => {
       console.log(user.user)
      toast.success("Registration is Successful");
      setEmail("")
      setName("");
      setPassword("")
      setLoader(false);
      setTimeout(()=>{
         navigate('/login')
      },2000)
         
  });  
  })
  .catch((error) => {
    const errorCode = error.code; 
    
  });

}
  
 };
 
 //***TextField a input accept end */
  return (
    <div>
      <Grid container >    {/*spacing={2} মানে হল →  Grid item গুলোর মাঝখানে 2 unit = 16px ফাঁকা থাকবে। */}
        <Grid size={6}>
         <div className='reg-content-box'>
          <div className='reg-content'>
             <h2>Get started with easily register</h2>
             <p>Free register and you can enjoy it</p>
             <ToastContainer
               position="top-center"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick={false}
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="colored"
               
               />
              <div className='error-box'>
              <CssTextField value={email} onChange={handleEmail} type="email" id="outlined-basic" label="Email Address" variant="outlined" />
             { emailerror &&  <h5 className='error'>{emailerror}</h5>}
             
          </div>
          
           <div className='error-box'>
             <CssTextField value={name} onChange={handleName} id="outlined-basic" label="Full name" variant="outlined" />
             {nameerror && <h5 className='error'>{nameerror}</h5>}
           </div>

             <div className='passwrd-input'>
            <div className='error-box'>
                 <CssTextField value={password} onChange={handlePassword}  type={showpassword? "text":"password"} id="outlined-basic" label="Password" variant="outlined" />
                 {
                 passworderror && <h5 className='error'>{passworderror}</h5>
                 }
            </div>
               <div onClick={handlepass} className='icon-box'>
                  {
                    showpassword?
                     <FiEyeOff />
                      :
                     <FiEye /> 
                  }
               </div>
             </div>
              {
                loader ?
                <Bars
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="bars-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  />
                :
               <Mybutton onClick={handleSignup} variant="contained">Sign up</Mybutton>
             
              }
              <p id='sign-In'>Already  have an account ?<Link to="/Login"><span > Sign In</span></Link></p>
             </div>
             
         </div>
         </Grid>
         <Grid size={6}>
         <div className='img-part'>
          <img className='reg-img' src={RegistrationImage} alt='profile picture'/>
         </div>
       </Grid>
     </Grid>
    </div>
  )
}

export default Registration