import React , {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../Redux/ToggleSlice';
import { Index } from './../Components/Page2/Index'

export const SideMenu = () => {
  const dispatch = useDispatch()
  const numP = useSelector((state)=>state.toggle.num)
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  
  return (
    <div
    className=" text-custom-900 fixed top-0 right-0 w-full bg-white p-3 h-full z-40 ease-in-out duration-200
  translate-x-0"
  >

    <div className="flex flex-col container mx-auto">
      <div className="mb-2 pb-2 border-b border-gray-200 flex justify-between items-center z-50">
      <nav className="flex flex-col">
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Leader of Humanity
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Portfolio
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Skills
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
    
          <button 
            type="button" onClick={()=>{dispatch(toggle())}}
            className="inline-flex items-center px-2 py-2 border border-transparent 
  shadow-sm text-sm font-medium text-white bg-custom-1 hover:bg-white hover:text-gray-800 
  hover:border-custom-1 focus:outline-none
   focus:ring-2 focus:ring-offset-2 focus:bg-custom-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              ></path>
            </svg>
            <span className="mx-2">Back to Home</span>
          </button>
       
      </div>
       {numP == 2 && <Index />}
    </div>
    
  </div>
  

  )
}
