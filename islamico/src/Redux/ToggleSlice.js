import { createSlice } from "@reduxjs/toolkit";


const ToggleSlice = createSlice({
    name : 'toggle',
    initialState : {show:false, num :1, modalOpen:false,bodyStyle: "bg-imgEn"},
    reducers : {
        toggle : (state)=>{
            state.show = !state.show
        },
        PageNum : (state,action)=>{
            state.num = action.payload
        },
        ModalOpen : (state,action)=>{
            state.modalOpen = action.payload
        },
        BodyStyle : (state,action)=>{
            state.bodyStyle = action.payload
        }
    }
})
export const {toggle, PageNum, ModalOpen, BodyStyle} = ToggleSlice.actions
export default ToggleSlice.reducer