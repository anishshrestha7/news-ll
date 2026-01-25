import React from 'react'

function Explore() {
  return (
    <div>
        <section className='con bg-gray-600 text-white text-sm font-semibold'>
        <ul className='flex gap-4 py-3 ps-4'>
            <li>Home</li>
            <li>Explore</li>
            <li>Module positions</li>
        </ul>
        </section>

        <section className='con py-8 ps-4 pe-6 border border-gray-400'>
        <h2 className='text-xl font-bold'>Positions</h2>
        <p className='text-xs font-light text-gray-400 pt-1 pb-4'>Written by Super User - May 21, 2020 -  <span className='text-red-400'>2084</span></p>
        <p className='text-sm font-medium text-gray-600  pb-4'>
This Joomla! template supports a wide variety of module positions which can be archived automatically by the system.The module positions are fully collapsible mean that if there are no modules published in particular position, this module position will disappear and the other modules with take this place. Also you can have 2-Columns layout (content, left or right)</p>
<button className='py-2 px-4 bg-[#46b8da] hover:bg-[#5bc0de] cursor-pointer text-sm text-white font-medium rounded mb-6'>Click here to view clearer picture</button>

        <div className='flex justify-between pe-6 text-orange-400 text-sm '>
            <button className='py-2 px-4 bg-gray-200 border-0 cursor-pointer hover:text-black'>Prev</button>
            <button className='py-2 px-4 bg-gray-200 border-0 cursor-pointer hover:text-black'>Next</button>
            
        </div>
        </section>
        <section className='py-8 border con border-t-0 border-b-0 border-gray-400'>
       
        </section>
        
    </div>
  )
}

export default Explore