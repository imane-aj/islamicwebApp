import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Hadith } from "../Components/Hadith";
import { toggle } from "../Redux/ToggleSlice";
import { IslamHistory } from "./../Components/IslamHistory/index";
import ThreeFund from "./../Components/ThreeFund/index";
import i18n from './../i18n';

export const Body = ({t}) => {
  const pageNum = useSelector((state) => state.toggle.num);
  const bodyStyle = useSelector((state)=>state.toggle.bodyStyle);
  const dispatch = useDispatch()

  return (
    <div className="hero container mx-auto animate-slideToTop short:flex-row">
      <div className="history md:mx-20 my-4 md:px-14 px-4 py-6 text-gray-700 font-bold bg-white">
        <div className="flex flex-col md:flex-row-reverse md:justify-between my-4">
          <div>
            <button
              type="button"
              onClick={() => {
                dispatch(toggle());
              }}
              className="inline-flex items-center px-2 py-2 border border-transparent 
              shadow-sm text-sm font-medium text-white bg-custom-1 hover:bg-white hover:text-gray-800 
              hover:border-custom-1 focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:bg-custom-1"
            >
              {bodyStyle == "bg-imgEn" &&
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
              }
              <span className="mx-2">{t('backToHome')}</span>
              {bodyStyle == "bg-imgAr" &&
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
              }
            </button>
          </div>
          <div>
            <h1 className=" text-custom-1 short:text-base short:break-all text-xlg font-bold tracking-tighter">
              {pageNum == 1 && t('islamicH')}
              {pageNum == 3 && t('threeFund')}
              {pageNum == 4 && 
                <ul className="flex gap-5">
                  <li className="text-gray-800 text-lg hover:cursor-pointer
                  transition ease-in-out delay-150 hover:-translate-y-1 duration-200"><span className="text-custom-1 pr-1">01</span>. Bukhari</li>
                  <li className="text-gray-800 text-lg hover:cursor-pointer
                  transition ease-in-out delay-150 hover:-translate-y-1 duration-200"><span className="text-custom-1 pr-1">02</span>. Muslim</li>
                </ul>
              }
            </h1>
          </div>
        </div>
        {pageNum == 1 && <IslamHistory t={t} i18n={i18n}/>}
        {pageNum == 3 && <ThreeFund t={t} i18n={i18n}/>}
        {pageNum == 4 && <Hadith t={t} i18n={i18n}/>}
      </div>
    </div>
  );
};
