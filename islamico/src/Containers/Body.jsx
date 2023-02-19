import React from 'react'
import { useSelector } from 'react-redux';
import { Page1 } from './../Components/Page1';
import { Index } from './../Components/Page2/Index';

export const Body = () => {
    const pageNum = useSelector((state)=>state.toggle.num)
    console.log(pageNum)
  return (
    <div className='hero w-screen container mx-auto animate-slideToTop short:flex-row'>
       {pageNum == 1 && <Page1/>}
    </div>
  )
}
