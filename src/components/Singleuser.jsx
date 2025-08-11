import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import myprofile from '../assets/Jahidul.jpg'

export const Singleuser = () => {
  return (
    <div>
       <div className='image-box'>
          <div className='image'> <img src={myprofile}  alt='myprofile' />  </div>
         <div className='myintroduce'>
          <h3>Md.Jahidul Islam</h3>
          <p>Hi Guys, Wassup!</p>
         </div>
          <button>Join</button>
      </div>
      
         
    </div>
  )
}
