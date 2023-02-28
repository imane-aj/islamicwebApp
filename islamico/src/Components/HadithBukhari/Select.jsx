import React from 'react'

export const Select = () => {
    return (
        <div className='flex flex-col md:flex-row mb-10'>
            <div className="md:mr-10 mb-3 md:mb-0">
                <label htmlFor="states" className="sr-only">Choose a state</label>
                <select id="states" className="bg-gray-50 border px-12 border-gray-300 text-custom-1 text-sm rounded-md border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option defaultValue>Choose a state</option>
                    <option value="CA">California</option>
                    <option value="TX">Texas</option>
                    <option value="WH">Washinghton</option>
                    <option value="FL">Florida</option>
                    <option value="VG">Virginia</option>
                    <option value="GE">Georgia</option>
                    <option value="MI">Michigan</option>
                </select>
            </div>
            <div className="">
                <label htmlFor="states" className="sr-only">Choose a state</label>
                <select id="states" className="bg-gray-50 border px-12 border-gray-300 text-custom-1 text-sm rounded-md border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option defaultValue>Choose a state</option>
                    <option value="CA">California</option>
                    <option value="TX">Texas</option>
                    <option value="WH">Washinghton</option>
                    <option value="FL">Florida</option>
                    <option value="VG">Virginia</option>
                    <option value="GE">Georgia</option>
                    <option value="MI">Michigan</option>
                </select>
            </div>
        </div>
    )
}
