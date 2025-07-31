import { createSlice } from '@reduxjs/toolkit'

export const userInfoSlice = createSlice({
  name: 'info',
  initialState: {
   // value: null,
   value:localStorage.getItem("userinfo") ? JSON.parse(localStorage.getItem("userinfo")):null,//local storage  a jodi data(localStorage.getItem("userinfo")) pau tahole data tike array te convert kore dau otherwise null thakuk.string theke array convert korte JSON.pase() use kora hoy.
  },
  reducers: {
    userdetails: (state,action) => {
        // console.log(state.value) //here state.value is current value.
        // console.log(action.payload)// here action.payload is those values that is send from Login page.
        state.value=action.payload
    }, 
  },
})

// Action creators are generated for each case reducer function
export const {userdetails } = userInfoSlice.actions

export default userInfoSlice.reducer