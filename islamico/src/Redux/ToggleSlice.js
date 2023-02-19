import { createSlice } from "@reduxjs/toolkit";


const ToggleSlice = createSlice({
    name : 'toggle',
    initialState : {show:false, num :1},
    reducers : {
        toggle : (state)=>{
            state.show = !state.show
        },
        PageNum : (state,action)=>{
            state.num = action.payload
        }
    }
})
export const {toggle, PageNum} = ToggleSlice.actions
export default ToggleSlice.reducer