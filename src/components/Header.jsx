import React from 'react'

const Header = () => {
  return (
    <div>
        
    <div className='flex justify-between items-center'>
        <h1 className=' text-2xl font-bold '>
            Orders
        </h1>
        <button className=' bg-blue-700 px-5 py-2 rounded-xl text-white '>
            + Add Order
        </button>
    </div>
    <div className='h-0.5 opacity-20 w-full mt-8 mb-10 bg-black'></div>
    </div>
  )
}

export default Header