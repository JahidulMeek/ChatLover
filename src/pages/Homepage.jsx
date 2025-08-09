import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

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
    <div>Homepage
      
    </div>
  )
}

export default Homepage