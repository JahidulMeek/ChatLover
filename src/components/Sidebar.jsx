import React, { useEffect, useState } from 'react'
import profile from '../assets/profile.jpg'
import { LuMessageSquareMore } from "react-icons/lu";
import { TiHomeOutline } from "react-icons/ti";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { IoLogOut } from "react-icons/io5";
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
const Sidebar = () => {
    const auth = getAuth();
    let navigate=useNavigate();

    let handleLogout=()=>{
         signOut(auth).then(() => {
          navigate("/login")
       }).catch((error) => {
        console.log(error);
       });
       
    }
// useLocation  function start
    let location=useLocation();
    let [activevalue,setActiveValue]=useState("");
    //console.log(location.pathname.replace("/pages/",""))
    useEffect(()=>{
        setActiveValue(location.pathname.replace("/pages/",""))
    },)
    console.log(activevalue)
//useLocation function end
  return (
    <div className='sidebar-layout'>
        <div className='profile-layout'>
         <img src={profile} alt=' profile-Image'/>
        </div>
        <div className='page-layout'>
           <Link to="/pages/home" className={activevalue=="home"&& "active"}>  <TiHomeOutline  className='page-icon'/></Link>
            <Link to="/pages/message" className={activevalue=="message"&& "active"}><LuMessageSquareMore  className='page-icon' /></Link>
            <Link to="/pages/notification" className={activevalue=="notification"&& "active"}><IoNotificationsOutline   className='page-icon'/></Link>
           <Link to="/pages/setting" className={activevalue=="setting"&& "active"} ><CiSettings   className='page-icon'/> </Link>
           </div>


        <div className='logout-layout'>
         <IoLogOut onClick={handleLogout}  className='page-icon' />
        </div>
    </div>
  )
}

export default Sidebar