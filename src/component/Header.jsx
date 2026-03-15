import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
 

function Header() {
  return (
    <>
      {/* <h1 className='sm:bg-blue-500 md:bg-green-500 lg:bg-pink-500 xl:bg-yellow-600'>hi mom</h1> */}
      <section className='con flex bg-[#222A33] text-white sm:flex-col md:flex-row'>
        <div className='bg-[#F24D34] md:w-[158px] h-[100px] md:h-[full]  sm:w-full '>
          <img className='px-5 py-9' src={logo} alt="" />
        </div>
       <div className='grow grid'>
         <div className='pt-4 pe-4 flex xs:flex-row  xs:justify-start  gap-4 grow md:justify-end text-xs'>
          <p className=' px-2'>FOLLOW US</p>
          <p>ENGLISH</p>
          <p>SIGN UP</p>
        </div>
        <div className='flex justify-between '>
          <div className=' sm:block ps-2 lg:hidden'>=</div>
          <ul className='flex gap-8 ps-8 xs:hidden lg:block lg:flex'>
            <li className='hover:text-[#F24D34]'><Link to="./">Home</Link></li>
            <li className='hover:text-[#F24D34]'><Link to="./Explore">Explore</Link></li>
            <li className='hover:text-[#F24D34]'><Link to="./">Joomla</Link></li>
            <li className='hover:text-[#F24D34]'><Link to="./">K2</Link></li>
            <li className='hover:text-[#F24D34]'><Link to="./">Shortcodes</Link> </li>
            <li className='hover:text-[#F24D34]'><Link to="./">Bonus pages </Link></li>
            <li className='hover:text-[#F24D34]'><Link to="./">Contact</Link></li>
            <li className='hover:text-[#F24D34]'><Link to="./">Blog</Link></li>
          </ul>
          <p className='pe-8'>
            <span className='hover:text-[#f24d34] cursor-pointer'><i class="bi bi-search"></i></span>
          </p>
        </div>
       </div>
      </section>
      
    </>
  )
}

export default Header