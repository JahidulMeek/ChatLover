import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import myprofile from '../assets/Jahidul.jpg'
import { Singleuser } from '../components/Singleuser';

const Userlist = () => {
  return (
    <div className='userlist-box'>
    
           <div className='input-box'>
               <IoIosSearch  className='search-icon'/>
               <input  type="text" placeholder='search'></input>
               <BsThreeDotsVertical className='threedot' />
          </div>
     <div className='userprofile-box'>
          <div  className='heading-box'>
            <h1 className='heading'>Users list</h1> 
            <BsThreeDotsVertical/>
          </div>
         <Singleuser/> 
          <Singleuser/> 
          <Singleuser/> 
          <Singleuser/> 
      </div>
               
    </div>
  )
}

export default Userlist