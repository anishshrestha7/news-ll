import NewsSlider from '../component/NewsSlider';
import {  editorChoice, latestNews, latestR, mediaNews, mostPopular, mostViewed, navB, sport } from '../Data'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';
import SliderUp from '../component/SliderUp';


function Home() {
  

  return (
    <>
    <section className='con py-6 px-2 grid grid-cols-3 bg-[#171D23] text-white text-xs'>
      {navB.map((a)=>(
    <div className='flex'>
      <img className='px-4' src={a.image} alt="" />
    <div>
       <h2 className='font-bold'> {a.title}</h2>
    <p>{a.description}</p>
    </div>
    </div>
      ))}
     
      </section>

       <section className='con grid grid-cols-[2fr_1fr_1fr] border-gray-400 border-b'>
       <div className='grid grid-cols-[2fr_1fr] border-gray-400  border-e-0'>
         <div className='border-gray-400 border-l'>
          <img className='w-[408px] bg-cover p-5' src="./sport1.jpg" alt="" />  
        <div className='px-6'>
          <h2 className='font-semibold leading-tight pb-1'>Enean mauris elit, tincidunt eget honcus ac, imperdiet at mi</h2>    
        <p className='text-xs text-gray-400 pb-3'>Post by - May 26, 2011</p>  
        <h5 className='text-sm pb-8 text-gray-600 font-normal'>Suspendisse at libero porttitor nisi aliquet vulputate vitae at velit. Aliquam eget arcu magna, vel congue dui. Nunc ...</h5>
        </div>
       </div>
        <div className='p-5 oda'>
        <h4 >Ursus senectus libero porttitor</h4>
        <p className='border-b pb-3 pt-1 border-gray-400'>Suspendisse at libero porttitor nisi</p>
        <h4 className='pt-3'>Aenean vehicula aliquam sodales</h4>
        <p className='border-b pb-3 pt-1 border-gray-400'>Suspendisse at libero porttitor nisi</p>
        <h4 className='pt-3'>Aliquam lobortis cursus vulputate</h4>
        <p className='border-b pb-3 pt-1 border-gray-400'>Suspendisse at libero porttitor nisi	</p>
        <h4 className='pt-3'>Mauris ut mauris in dictum neque</h4>
        <p className='pb-3 pt-1'>Suspendisse at libero porttitor nisi</p>
        
        </div>
       </div>


     <NewsSlider 
    title="Most popular" 
    data={mostPopular} 
    containerClass="border-s border-gray-400" 
  />

  <NewsSlider 
    title="Most viewed" 
    data={mostViewed} 
    containerClass="border-s border-e border-gray-400" 
  />
       
       {/* most viewed ends here */}

       </section>

        {/* sport section starts here  */}
       <section className='con grid grid-cols-[2fr_1fr_1fr] '>
      <div className='border border-t-0 border-gray-400'>
        <div className='flex justify-between items-center'>
          <ul className='flex gap-3 pt-4 pb-6 px-2 text-gray-600 font-semibold  items-center'>
          <a className='text-[#f24d34]' href="">Sport</a>
          <a href="">Business</a>
          <a href="">money</a>
          <a href="">World</a>
          <a href="">Travel</a>
        </ul>
        <div className='pe-4'>
        <button className='border border-gray-400 mx-2 px-1'><i class="fa-solid fa-angle-left"></i></button>
        <button className='border border-gray-400 px-1 '><i class="fa-solid fa-angle-right"></i></button>
        </div>
        </div>
         
        <div>
        <div className='oda grid grid-cols-3 gap-4'>
  {sport.map((item, index) => {
    const isLast = index === sport.length - 1;

    return (
      <div key={item.id}>
        <img 
          className='w-[80%] px-2' 
          src={item.image} 
          alt={item.title} 
        />
        <div>
          <h4 className='pt-3 pb-1 px-2 w-45 font-bold'>
            {item.title}
          </h4>
          <p className={`w-45 px-2 ${isLast ? 'pb-8' : ''}`}>
            {item.description}
          </p>
        </div>
      </div>
    );
  })}
</div>
        </div>
         {/* latest news starts here*/}

      <div className='ps-5 border-t border-gray-400'>
        <div className='flex justify-between pe-6 pt-4'>
          <h2 className='kid text-lg tracking-tight font-black'>LATEST NEWS</h2>
        <div>
        <button className='border border-gray-400 mx-2 px-1'><i class="fa-solid fa-angle-left"></i></button>
        <button className='border border-gray-400 px-1'><i class="fa-solid fa-angle-right"></i></button>
        </div>
        </div>

        <div className='pt-4 pb-4 w-150'>
  {latestNews.map((item, index) => {
    const isSecond = index === 1;
    const isLast = index === latestNews.length - 1;
    
    const paddingTop = isSecond ? 'pt-6' : 'pt-3';
    const borderClass = isLast ? '' : 'border-b border-gray-400';

    return (
      <div key={item.id} className={`flex pb-4 ${borderClass}`}>
        <img 
          className={`pe-6 w-[70%] ${paddingTop}`} 
          src={item.image} 
          alt={item.name} 
        />
        <div>
          <h3 className={`text-xl font-bold pb-3 w-66 ${paddingTop}`}>
            {item.name}
          </h3>
          <p className='text-xs text-gray-400 pb-2'>
            {item.date}
          </p>
          <p className='text-sm text-gray-400 w-66'>
            {item.des}
          </p>
        </div>
      </div>
    );
  })}
</div>
        
       </div>

    {/* latest news ends here */}
      </div>
      {/* sport section ends here  */}
      {/* editor choice section starts here */}

      <div className='border-b border-gray-400'>
        <div className='flex justify-center '>
          <h2 className='bg-[#f24d34] justify-center items-center flex my-8 w-66 h-12 text-white font-bold '>Editor's choice</h2>
        </div>
        <div className='grid justify-center oda'>
  {editorChoice.map((item, index) => {
    const isLast = index === editorChoice.length - 1;
    const isFirst = index === 0;

    return (
      <div 
        key={item.id} 
        className={`${!isLast ? 'border-b border-gray-400' : ''} pb-2`}
      >
        <img 
          className={`w-[80%] mx-auto pb-2 ${!isFirst ? 'pt-3' : ''}`} 
          src={item.image} 
          alt={item.name} 
        />
        <h4 className='grid justify-center text-center px-4'>
          {item.name}
        </h4>
        <p className='grid justify-center py-2 text-center'>
          {item.date}
        </p>
        <h3 className='w-60 mx-auto font-xs text-sm text-gray-400 text-center pb-2'>
          {item.des}
        </h3>
      </div>
    );
  })}
</div>
        
      </div>
      {/* editor choice section ends here */}

      <div className='border  border-t-0 ps-8 pe-4 border-gray-400'>
        <img className='w-full flex justify-center mx-auto py-8' src="./weather.png" alt="" />
        <h2 className='kid pb-4 font-bold'>world&apos;s Stock</h2>

        <div className='pb-6'>
          <table className='text-xs'>
         
           <tr className='border border-gray-400'>
            <td className='strong ps-2 pe-2 py-2 font-semibold  '>DJIA</td>
            <td className='px-2'>17,511.57 </td>
            <td className='text-red-400 px-2'>+190.8</td>
            <td className='text-red-400  px-2'> +1.10%</td>
          </tr>
           <tr  className='border border-gray-400'>
            <td className='strong ps-2 pe-2  py-2 font-semibold  '>Nasdaq</td>
            <td className='px-2 '>17,511.57 </td>
            <td className='text-red-400  px-2'>+190.8</td>
            <td className='text-red-400  px-2'> +1.10%</td>
          </tr>
          <tr  className='border border-gray-400'>
            <td className='strong ps-2 pe-2  py-2 font-semibold  '>S&P 500</td>
            <td className='px-2'>17,511.57 </td>
            <td className='text-red-400 px-2  '>+190.8</td>
            <td className='text-red-400 px-2  '> +1.10%</td>
          </tr>
           <tr  className='borderborder-gray-400'>
            <td className='strong ps-2 pe-2  py-2 font-semibold  '>Nasdaq</td>
            <td className='px-2 '>17,511.57 </td>
            <td className='text-red-400 px-2  '>+190.8</td>
            <td className='text-red-400 px-2 '> +1.10%</td>
          </tr>
        </table>
        </div>
      {/* latest reviews section starts here */}
       <h2 className='kid font-bold pb-4'>Latest reviews</h2>

       <div>
  {latestR.map((a) => (
    <div key={a.id} className="kid1">
      <div className="oda flex relative">
        <img className="w-[90%] pe-3 pt-4" src={a.image} alt={a.title} />
        <span className="absolute bg-red-400 bottom-0 px-4 py-2 text-white font-bold">
          {a.count}
        </span>
        
        <div>
          <h4 className="w-36 pb-1 pt-4">{a.title}</h4>
          <p>{a.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
       </section>
       {/* latest reviews section ends here */}
       {/* media news section starts here */}
      <section className='bg-[#171D23] con text-white px-4 flex justify-between'>
      <div className='py-6 flex-1'>
        <h2 className='font-bold'>MEDIA NEWS</h2>
      </div>
      <div className='flex gap-4 py-6 flex-none'>
        <h3 className='text-[#f24d34] '>Latest</h3>
        <h3>Most popular</h3>
        <h3>Trending</h3>
        <h3>Most commented</h3>
      </div>
      <div class="flex-1"></div>
      </section>
     {/* media news  image section starts here  */}
     
     <section className=' con grid grid-cols-[2fr_1fr_1fr] bg-[#171D23] text-white px-4 pb-16'>
  
  {mediaNews.slice(0, 1).map((item) => (
    <div key={item.id} className='relative group overflow-hidden pe-4'>
      <div className=''>
        <img className='w-full' src={item.image} alt={item.name} />
      </div>
      <div className='absolute -bottom-12 px-4 group-hover:top-66 transition-all'>
        <div className='bg-[#f24d34] py-1 px-2 w-16'>
          <h4 className='font-bold'>Travel</h4>
        </div>
        <h2 className='pt-2 pb-1 font-bold text-xl group-hover:text-[#f24d34]'>{item.name}</h2>
        <p className='font-medium text-sm'>{item.date}</p>
        <h5 className='font-normal text-sm py-2 w-145'>{item.des}</h5>
      </div>
    </div>
  ))}

  {[mediaNews.slice(1, 3), mediaNews.slice(3, 5)].map((columnItems, colIndex) => (
    <div key={colIndex} className='grid grid-rows-2 me-5 gap-4'>
      {columnItems.map((item) => (
        <div key={item.id} className='relative group overflow-hidden'>
          <div>
            <img className='w-full' src={item.image} alt={item.name} />
          </div>
          <div className='absolute -bottom-8 group-hover:top-12 transition-all px-4'>
            <div className='bg-[#f24d34] py-1 px-2 w-14'>
              <h4 className='font-bold text-sm'>Travel</h4>
            </div>
            <h2 className='pt-2 pb-1 font-bold text-lg w-56 group-hover:text-[#f24d34]'>{item.name}</h2>
            <p className='font-medium text-sm'>{item.date}</p>
            <h5 className='font-semibold text-sm py-2 w-145'>{item.des}</h5>
          </div>
        </div>
      ))}
    </div>
  ))}

</section>

       {/* media news  image section ends here */}
       <section className='bg-white py-8 con'>
      <div>
        <SliderUp/>
      </div>
       </section>
      
    </>
  )
}

export default Home