import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css/grid';

const NewsSlider = ({ title, data, containerClass = "" }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className={`ps-5 ${containerClass}`}>
      <div className="flex justify-between pe-4 pt-4">
        <h2 className="kid font-semibold">{title}</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => swiperInstance?.slidePrev()} 
            className="border border-gray-400 px-1 hover:bg-gray-100 transition-colors"
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button 
            onClick={() => swiperInstance?.slideNext()} 
            className="border border-gray-400 px-1 hover:bg-gray-100 transition-colors"
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>

      <div className="w-66">
        <Swiper
          onSwiper={setSwiperInstance}
          slidesPerView={1}
          grid={{ rows: 4, fill: 'row' }}
          spaceBetween={0}
          modules={[Grid, Pagination]}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={item.id || `news-${index}`}>
              <div
                className={`py-4 flex items-start border-b border-gray-400 ${
                  (index + 1) % 4 === 0 ? 'border-b-0' : ''
                } last:border-b-0 border-gray-400`}
              >
                <div className="w-24 h-16 flex-shrink-0 mr-4">
                  <img
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="flex flex-col justify-start">
                  <h3 className="text-[14px] font-normal leading-tight mb-1 text-gray-900 hover:text-red-400 cursor-pointer">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-normal line-clamp-2">
                    {item.des}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewsSlider;