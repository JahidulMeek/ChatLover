import React from 'react'


import {  //react-router-dom থেকে রাউটিং এর জন্য দরকারি ফাংশন ও কম্পোনেন্ট ইম্পোর্ট করা হয়েছে ai section a.
  createRoutesFromElements,                    //createRoutesFromElements → JSX থেকে রাউট লিস্ট বানায়।
  createBrowserRouter,                          //createBrowserRouter → browser history system দিয়ে রাউটার তৈরি করে।
  Route,                                       //Route → প্রতিটি পেজের জন্য route define করে।
  RouterProvider,                               //RouterProvider → বানানো রাউটার(router)টিকে <App /> কম্পোনেন্টে যুক্ত করে।
} from "react-router-dom";
import Login from './pages/Login';
import Registration from './pages/Registration';
import Homepage from './pages/Homepage';
import Forgetpassword from './pages/Forgetpassword';

 const router = createBrowserRouter(   
  createRoutesFromElements(
   <>
     <Route path="/login" element={<Login />} ></Route>
    <Route path="/" element={<Registration/>} ></Route>
    <Route path="/home" element={<Homepage/>} ></Route>
    <Route path="/forgerpassword" element={<Forgetpassword/>}></Route>
 
   </>
   
  )
);


const App = () => {
  return (
    <div>
    <RouterProvider router={router} />  {/* */}
     
    </div>
  )
}

export default App