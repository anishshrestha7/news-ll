import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
 

function Header() {
  return (
    <>
      <section className='con flex bg-[#222A33] text-white  '>
        <div className='bg-[#F24D34] w-[158px] h-[100px]'>
          <img className='px-5 py-9' src={logo} alt="" />
        </div>
       <div className='grow grid grid-row-[1fr_2fr]'>
         <div className='pt-4 pe-4 flex gap-4 grow justify-end text-xs'>
          <p className=' px-2'>FOLLOW US</p>
          <p>ENGLISH</p>
          <p>SIGN UP</p>
        </div>
        <div className='flex justify-between'>
          <ul className='flex gap-8 ps-8'>
            <li className='hover:text-[#F24D34]'><Link to="./">Home</Link></li>
            <li className='hover:text-[#F24D34]'><Link to="./Explore">Explore</Link></li>
            <li className='hover:text-[#F24D34]'><Link to="./">Joomla</Link></li>
            <li className='hover:text-[#F24D34]'><Link to="./">K2</Link></li>
            <li className='hover:text-[#F24D34]'><Link to="./">Shortcodes</Link> </li>
            <li className='hover:text-[#F24D34]'><Link to="./">Bonus pages </Link></li>
            <li className='hover:text-[#F24D34]'><Link to="./">Contact</Link></li>
            <li className='hover:text-[#F24D34]'><Link to="./">Blog</Link></li>
          </ul>
          <p className='pe-8 cursor-pointer text-l'>
            <i class="bi bi-search"></i>
          </p>
        </div>
       </div>
      </section>
      
    </>
  )
}

export default Header