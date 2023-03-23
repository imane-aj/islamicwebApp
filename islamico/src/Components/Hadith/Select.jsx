import React from 'react'

export const Select = () => {
    return (
        <div className='flex flex-col md:flex-row mb-10'>
            <div className="md:mr-10 mb-3 md:mb-0">
                <label htmlFor="states" className="sr-only">Choose book</label>
                <select id="states" className="bg-gray-50 border px-12 border-gray-300 text-custom-1 text-sm rounded-md border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option defaultValue>Sahih al-Bukhari</option>
                    <option value="muslum">Sahih Muslum</option>
                    <option value="bukhari">Sahih al-Bukhari</option>
                </select>
            </div>
            <div className="md:mr-10 mb-3 md:mb-0">
                <label htmlFor="states" className="sr-only">Choose Chapter</label>
                <select id="states" className="bg-gray-50 border px-12 border-gray-300 text-custom-1 text-sm rounded-md border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option defaultValue>To feed (others) is a part of Islam</option>
                    <option value="CA">Food</option>
                    <option value="TX">LKMKSDV</option>
                    <option value="WH">SDLVKNSD</option>
                    <option value="FL">SLDKVN</option>
                    <option value="VG">SDVKJN</option>
                </select>
            </div>
            <div className="">
                <label htmlFor="states" className="sr-only">Choose hadith</label>
                <select id="states" className="bg-gray-50 border px-12 border-gray-300 text-custom-1 text-sm rounded-md border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option defaultValue>Hadith 12</option>
                    <option value="CA">1</option>
                    <option value="TX">2</option>
                    <option value="WH">3</option>
                    <option value="FL">4</option>
                    <option value="VG">5</option>
                </select>
            </div>
        </div>
    )
}
