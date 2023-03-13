import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {  PageNum, toggle } from '../Redux/ToggleSlice';
import {motion} from 'framer-motion';
import menuItemsAr from '../lang/ar.json'
import menuItemsEn from '../lang/en.json'

export const MainMenu = ({t, i18n}) => {
  const [bodyStyle, setBodyStyle] = useState("bg-imgEn");
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const dispatch = useDispatch()
  const pageNum = useSelector((state)=>state.toggle.num)

  const mainMenuData = (i18n.language === 'ar') 
  ? menuItemsAr.menuItems.map(item => ({
    'id' : item.id,
    'title' : item.title,
    'desc' : item.desc,
    'img' : item.img
  }))
  : menuItemsEn.menuItems.map(item => ({
    'id' : item.id,
    'title' : item.title,
    'desc' : item.desc,
    'img' : item.img
  }));

  function toggleBodyStyle() {
    if (i18n.language == "ar") {
      setBodyStyle("bg-imgAr");
      document.body.classList.remove("bg-imgEn");
      document.body.classList.add("bg-imgAr");
    } else {
      setBodyStyle("bg-imgEn");
      document.body.classList.remove("bg-imgAr");
      document.body.classList.add("bg-imgEn");
    }
  }
  return (
    <Fragment>
      <div className='index container mx-3 md:mx-auto  md:w-4/5'>
        <div className="flex flex-row justify-between">
          <div className="slide-caption">
            <div className="slide-top">
                {i18n.language == 'ar' && <motion.button 
              whileHover={{scale:1.1}}
              whileTap={{scale:0.9}} onClick={()=>{i18n.changeLanguage('en'),toggleBodyStyle()}}>
                  <span className='text-custom-1 border border-custom-1'>{t('en')}</span>
                </motion.button>}
                {i18n.language == 'en' && <motion.button 
              whileHover={{scale:1.1}}
              whileTap={{scale:0.9}} onClick={()=>{i18n.changeLanguage('ar'),toggleBodyStyle()}}>
                  <span className='text-custom-1 border border-custom-1'>{t('ar')}</span>
                </motion.button>}
              {/* <span className='text-custom-1 border border-custom-1'>Let’s Know Islam</span> */}
            </div>
            <div className="slide-title md:max-w-2xl  md:text-6xl text-5xl">
              <h2>{t('titleLandingP')}</h2>
            </div>
            <div className="slide-subtitle">
              <p></p>
            </div>
            <div className="btns">
              <motion.button 
              whileHover={{scale:1.1}}
              whileTap={{scale:0.9}}
              className='save-button theme-btn flex flex-row'
              onClick={()=>(modalOpen?close():open())}><span>Discover history of islam</span> 
                <span className={`relative flex h-5 w-5 ${bodyStyle == 'bg-imgEn' ? 'ml-6' : 'mr-6'} mt-2`}>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-deep-orange-800 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-deep-orange-900"></span>
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mainMenuData flex flex-col gap-3 mx-auto md:absolute 
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
                <span className=" hidden lg:inline-block md:inline-block text-sm font-bold pr-1">
                  {item.desc.map((item,idx)=>(
                    <p className="text-slate-600" key = {idx}>{item}</p>
                  ))}
                </span>
              </div>
          </div>
          ))}

        
      </div>
    </Fragment>
  )
}
