import React, { Fragment, useState } from 'react'
import mainMenuData from './../Utils/MainMenu';
import { useDispatch, useSelector } from "react-redux";
import {  PageNum, toggle } from '../Redux/ToggleSlice';
import {motion, AnimatePresence} from 'framer-motion';
import Modal from '../Components/Modal';

export const MainMenu = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    const dispatch = useDispatch()
    const pageNum = useSelector((state)=>state.toggle.num)
    console.log(pageNum)
  return (
    <Fragment>
      {/* <Bukhari /> */}
      <div className='index container mx-3 md:mx-auto  md:w-4/5'>
        <div className="flex flex-row justify-between">
          <div className="slide-caption">
            <div className="slide-top">
              <span className='text-custom-1 border border-custom-1'>Let’s Know Islam</span>
            </div>
            <div className="slide-title md:max-w-2xl  md:text-6xl text-5xl">
              <h2>Read! In the Name of your Lord, Who has created</h2>
            </div>
            <div className="slide-subtitle">
              <p></p>
            </div>
            <div className="btns">
              <motion.button 
              whileHover={{scale:1.1}}
              whileTap={{scale:0.9}}
              className='save-button theme-btn'
              onClick={()=>(modalOpen?close():open())}>Discover history of islam</motion.button>
            </div>
          </div>
          {/* <div className="right-vec md:mt-9 mt-4 justify-content-center md:block hidden">
              <img src={"/indexImg/img-3.44bb17a6.png"} style={{'width': '21em'}} alt="" />
              <div className="right-border">
                  <div className="right-icon">
                      <img src={"/indexImg/quran.png"} />
                  </div>
                  <div className="right-icon">
                      <img src={"/indexImg/tajMahal.png"} />
                  </div>
                  <div className="right-icon">
                      <img src={"/indexImg/allah.png"} />
                  </div>
                  <div className="right-icon">
                      <img src={"/indexImg/muhammed.png"} />
                  </div>
                  <div className="right-icon">
                      <img src={"/indexImg/salah.png"} />
                  </div>
                  <div className="right-icon">
                      <img src="/indexImg/sadaqa.png" />
                  </div>
              </div>
          </div> */}
        </div>
      </div>
    <div
      className="flex flex-col gap-3 mx-auto md:absolute 
        inset-x-1 md:inset-x-12 lg:inset-x-1 bottom-0 m-3 mb-5 px-3 lg:flex-row lg:items-center
        lg:h-3264 animate-slideToTop short:flex-row"
            >
      {mainMenuData.map((item, idx)=>(
        <div key = {idx}
        className="flex items-center gap-3 w-full text-lg text-custom-900 border rounded-md border-gray-100 
          p-1 pl-4 lg:h-44 xl:h-36 shadow-lg bg-gray-1 cursor-pointer
          short:h-[90px] short:justify-center short:items-center short:pl-0
          relative overflow-hidden z-10 before:content-[''] before:w-[0%] before:h-[800%] before:absolute before:top-[50%] before:left-[50%] before:-translate-y-1/2 before:-translate-x-1/2 before:rotate-45 before:bg-gray-200 before:transition-all before:duration-250 before:-z-10 hover:before:w-[105%]"
              id="panel" onClick={()=>{dispatch(PageNum(idx+1)) ;dispatch(toggle())}}
            >
            <div className="text-lg md:text-3xl font-semibold text-custom-1 2xl:block h-[50%]">
              <span className="mr-1"><img src={item?.img} width='50px' alt="icon" /></span>
            </div>
            <div className="border-l h-[70%] border-custom-900 pb-1 2xl:block"></div>
            <div className="h-[50%] short:h-auto">
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
      <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={()=>null}>
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </Fragment>
  )
}
