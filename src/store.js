import { configureStore } from '@reduxjs/toolkit'
 import userInfoSlice  from './Slices/userInfoSlice'

export default configureStore({
  reducer: {
    userinfo:userInfoSlice
  }
})