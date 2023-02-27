import React from 'react'
import mainMenuData from './../Utils/MainMenu';
import { useDispatch, useSelector } from "react-redux";
import {  PageNum, toggle } from '../Redux/ToggleSlice';

export const MainMenu = () => {
    const dispatch = useDispatch()
    const pageNum = useSelector((state)=>state.toggle.num)
    console.log(pageNum)
  return (
    <div
      className="flex flex-col gap-3 mx-auto absolute 
        inset-x-1 md:inset-x-12 lg:inset-x-1 bottom-0 m-3 mb-5 px-3 lg:flex-row lg:items-center
        lg:h-3264 animate-slideToTop short:flex-row"
            >
      {mainMenuData.map((item, idx)=>(
        <div key = {idx}
        className="flex items-center gap-3 w-full text-lg text-custom-900 border rounded-md border-gray-100 
          p-1 pl-4 lg:h-44 xl:h-36 shadow-lg bg-white cursor-pointer
          short:h-[90px] short:justify-center short:items-center short:pl-0
          relative overflow-hidden z-10 before:content-[''] before:w-[0%] before:h-[800%] before:absolute before:top-[50%] before:left-[50%] before:-translate-y-1/2 before:-translate-x-1/2 before:rotate-45 before:bg-gray-200 before:transition-all before:duration-250 before:-z-10 hover:before:w-[105%]"
              id="panel" onClick={()=>{dispatch(PageNum(idx+1)) ;dispatch(toggle())}}
            >
            <div className="text-lg md:text-3xl font-semibold text-custom-1 2xl:block">
              <span className="mr-1"><img src={item?.img} className="mt-4" width='50px' alt="icon" /></span>
            </div>
            <div className="border-l h-[70%] border-custom-900 pb-1 2xl:block"></div>
            <div className="h-[80%] short:h-auto">
              <h1 className="short:text-base short:break-all text-lg text-custom-1 font-bold tracking-tighter ">
                {item.title}
              </h1>
              <span className=" hidden lg:inline-block text-sm font-bold pr-1">
                {item.desc.map((item,idx)=>(
                  <p className="text-slate-600" key = {idx}>{item}</p>
                ))}
              </span>
            </div>
        </div>
        ))}
    </div>
  )
}
