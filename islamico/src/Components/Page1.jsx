import React from 'react'
import { useDispatch } from 'react-redux';
import { toggle } from '../Redux/ToggleSlice';

export const Page1 = () => {
  const dispatch = useDispatch()
  return (
    <div className='history m-16 p-6 text-gray-700 font-bold '>
    <div className='absolute right-20'>
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
    <h1 className='text-custom-1 short:text-base short:break-all text-xlg font-bold tracking-tighter'>History of Islam</h1>
    <p>
        Islam is a monotheistic religion that was founded by the Prophet Muhammad in the 7th century CE.
        The history of Islam is rich and complex, and spans over a millennium.
    </p><br/>
    <p><span className='span text-custom-1 relative ml-4'></span>The Early Years of Islam:</p>
    <p>
        Islam began in the Arabian Peninsula, in the city of Mecca, where the Prophet Muhammad was born in 570 CE. 
        Muhammad began receiving revelations from God through the Angel Gabriel when he was 40 years old, 
        and these revelations were later compiled into the Islamic holy book, the Quran. Muhammad preached 
        the message of Islam to the people of Mecca, but was met with resistance from the powerful tribes of the city. 
        He eventually fled to Medina, a city to the north, in what is known as the Hijra, and established the first Islamic 
        state. This event is considered the beginning of the Islamic calendar.
    </p><br/>
    <p><span className='span text-custom-1 relative ml-4'></span>The Growth and Expansion of Islam:</p>
    <p>
        After the establishment of the Islamic state in Medina, Islam spread rapidly throughout Arabia and 
        beyond. Within a century of the death of the Prophet Muhammad in 632 CE, Islamic armies had conquered
        much of the Middle East, North Africa, and Spain. Islamic civilization flourished during this time,
        with the development of great cities like Baghdad and Cairo, and the establishment of universities
        and centers of learning.
    </p>
</div>
  )
}
