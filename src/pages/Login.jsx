import React from 'react'
import LoginImage from "../assets/login.png"
import GoogleImage from "../assets/google.png"
import Grid from '@mui/material/Grid';                 
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
  import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { userdetails } from '../Slices/userInfoSlice';
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
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  let navigate= useNavigate();
   let[email,setEmail] = useState("")
   let [emailerror,setEmailerror]=useState("")
   let [password,setPassword]=useState("")
    let[passworderror,setPassworderror]=useState("")
   let[showpassword,setShowpassword] = useState(false)
// ************ for forget password usestate part start***********
let [forgetemail,setforgetemail]=useState("")
let [forgetemailerror,setforgetemailerror]=useState("")
let [forgetui , setForgetui]=useState(true)
// ************ for forget password usestate part end***********
//******* for Redux useDispatch()  start*/
let dispatch=useDispatch() // here dispatch is a variable and useDispatch hook is assigned here.
//*******Redux useDispatch()  end*/

  let handlepass=()=>{
  setShowpassword(!showpassword)
  }
 let handleEmail=(e)=>{
   setEmail(e.target.value)
   setEmailerror("")
    }
 let handlePassword=(e)=>{
 setPassword(e.target.value)
 setPassworderror("")
 }
let handleSignin=()=>{
  //console.log(email)
  //console.log(password) 
  if(!email){
  setEmailerror("Give your Email")
  
}
 if(!password){
   setPassworderror("Give your Password");
 }
if(email && password){
 signInWithEmailAndPassword(auth, email, password)
  .then((user) => {
    //console.log(user.user)
    dispatch(userdetails(user.user)) // userDispatch is used to send userdetails to Redux store from Login component.
    //localStorage.setItem("name","Jahidul") //in local storage have to take data according to string all time.
    localStorage.setItem("userinfo",JSON.stringify(user.user)) //here user.user is converted to string format by JSON.stringify()

    if(user.user.emailVerified){
   //console.log("Login done");
   navigate('/pages/home')
  }else{
    toast.error("Go to your Email and verify")
  }
  })
  .catch((error) => {
   const errorCode = error.code;
   if(errorCode.includes("auth/invalid-credential")){
    toast.error(" Email and Password did not match")
   }
   if(errorCode.includes("auth/too-many-requests")){
    toast.error(" try 30s later")
 }
 
 }); 
}


}
let handleGoogle=()=>{
  //console.log("googlle kaj kore")
  signInWithPopup(auth, provider)
  .then((result) => { 
      navigate('/pages/home')
  }).catch((error) => {
    const errorCode = error.code;
     console.log("google kaj kore nah")
  });

}

// ************ for forget password start***********

let handleforgetemail=(e)=>{
  setforgetemail(e.target.value)
  setforgetemailerror("")
}

let handleforgetpasswordbutton=()=>{
  setForgetui(false)
}
let handlebacktoLogin=()=>{
  setForgetui(true)
}


let handleSend=()=>{
  
  if(!forgetemail){
    setforgetemailerror("Give Your  Email")
  }else{
    console.log("send ok")
    sendPasswordResetEmail(auth,forgetemail)
  .then(() => {
    toast.success("Check your email to change password")
    setTimeout(()=>{
      setForgetui(true)
    },3000)
  })
  .catch((error) => {
    const errorCode = error.code;
     if(errorCode.includes("auth/invalid-credential")){
   toast.error(" Give your correct email")
  }
  if(errorCode.includes("auth/too-many-requests")){
   toast.error(" try 30s later")
}
 });

  }
}
 // ************ for forget password end***********


    return (
     <div>
      {
        forgetui?
         <Grid container >
     <Grid size={6}>
    <div className='reg-content-box'>
     <div className='reg-content'>
        <h2>Login to your account!</h2>
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
       <div onClick={handleGoogle} className='Google-box'>
         <img src={GoogleImage} alt="Google-Logo"/>
         <h4>Login with Google</h4>
       </div>
       <div className='error-box'>
            <CssTextField  onChange={handleEmail} type='email' id="outlined-basic" label="Email Address" variant="outlined" />
           { emailerror &&  <h5 className='error'>{emailerror}</h5>}
       
       </div>
       
       <div  className='passwrd-input'>
           <div className='error-box'>
              <CssTextField onChange={handlePassword} type={showpassword?"text":"password"}id="outlined-basic" label="Password" variant="outlined" />
              {passworderror && <h5 className='error'>{passworderror}</h5>}
           </div>
           
           <div onClick={handlepass}  className='icon-box'>
             {
               showpassword?
               <FiEyeOff />
                :
               <FiEye /> 
             }
       
           </div>
       </div>
        <Mybutton onClick={handleSignin}  variant="contained">Login to Continue</Mybutton>
         <p id='sign-In'>Don't have an account ? <Link to="/"><span> Sign up</span></Link></p>   {/* to="page ar name bole dite hove" */}
          <button onClick={handleforgetpasswordbutton} className='forgetbutton'>Forget Password</button>
        
        </div>
      
    </div>
    </Grid>
    <Grid size={6}>
    <div className='img-part'>
     <img className='reg-img' src={LoginImage} alt='profile picture'/>
    </div>
  </Grid>
</Grid>
        :
        // ******forget password ui start
      <div className='new-ui-for-forgetpassword'>
    <div className='forgetpassword-box'>
             <CssTextField onChange={handleforgetemail} className='forgetpassword-email' type='email' id="outlined-basic" label=" Give your Email Address" variant="outlined" />
               { 
               forgetemailerror &&  <h6 className='forgetemailerror'>{forgetemailerror}</h6>
               }
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
               <div className='forgetpassword-button-box' >
               <Mybutton onClick={handlebacktoLogin} variant="contained">Back to Login</Mybutton>
               <Mybutton onClick={handleSend}  variant="contained">Send Email</Mybutton>
              </div>
            </div>
        </div>
        // ********forget password ui end

      }
   
  
  </div>
)
}


export default Login