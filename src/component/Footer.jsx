import React from 'react'
import logo from "../assets/bg_footer.png"

function Footer() {
  return (
    <>

      <footer className='con text-white border-t-4  border-[#f24d34] relative '>
        <div className=' bg-black/50'>
          <img className='w-full block md:h-70 sm:h-130' src={logo} alt="" />
        </div>
        <div className='absolute top-0 left-3 font-normal flex md:grid-cols-4 sm:grid sm:grid-cols-2 justify-between max-w-[1200px]'>
        <div>
            <p className='font-bold text-sm pt-6 border-b border-gray-400 pb-3 w-55'> THEME FEATURES</p>
          <p className='pt-2 pb-1 font-normal text-sm'>Quas mattis tenetur</p>
          <ul>
            <li>Illo suscipit</li>
            <li>Eleifend</li>
            <li>Dictum aliquam</li>
            <li>Potenti arcu</li>
            <li>Vel nemo</li>
          </ul>
        </div>
        <div>
            <p className='font-bold text-sm pt-6 border-b border-gray-400 pb-3 w-55'> ABOUT</p>
          <p className='pt-2 pb-1 font-normal text-sm'>How to Uninstall</p>
          <ul>
            <li>Subscribe</li>
            <li>Potenti arcu</li>
            <li>Curo concerns</li>
            <li>Curo concerns</li>
            <li>Subscribe</li>
          </ul>
        </div>
        <div>
            <p className='font-bold text-sm pt-6 border-b border-gray-400 pb-3 w-55'> CUSTOM LINK</p>
          <p className='pt-2 pb-1 font-normal text-sm'>Curo concerns</p>
          <ul>
            <li>Natoque</li>
            <li>Hare thery</li>
            <li>Magnis integer</li>
            <li>Aptent lacinia</li>
            <li>Subscribe</li>
          </ul>
        </div>
        <div>
            <p className='font-bold text-sm pt-6 border-b border-gray-400 pb-3 w-55'> NEWS LETTER</p>
          <p className='pt-4 pb-5 font-normal text-sm w-70'>Quas mattis tenetur illo suscipit, eleifend praesentium impedit!</p>
          <form action="">
            <input className='py-3 px-6 bg-white text-black outline-hidden' type="email" placeholder='Enter your email' />
          </form>
          <button className='text-whitye bg-[#f24d34] px-5 py-2 text-sm font-normal mt-3'>send</button>
        </div>
        </div>
      </footer>
      <section className='con justify-center flex text-white bg-black py-3 text-sm font-medium sm:px-4 sm:text-center'>
        <p>We use cookies to improve our website. By continuing to use this website, you are giving consent to cookies being used.  </p>
      </section>
    </>
  )
}

export default Footer