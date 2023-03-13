import { createSlice } from "@reduxjs/toolkit";


const ToggleSlice = createSlice({
    name : 'toggle',
    initialState : {show:false, num :1, modalOpen:false,},
    reducers : {
        toggle : (state)=>{
            state.show = !state.show
        },
        PageNum : (state,action)=>{
            state.num = action.payload
        },
        ModalOpen : (state,action)=>{
            state.modalOpen = action.payload
        }
    }
})
export const {toggle, PageNum, ModalOpen} = ToggleSlice.actions
export default ToggleSlice.reducer