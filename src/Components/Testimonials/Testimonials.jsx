import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../SectionTitle/SectionTitle';


const Testimonials = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('testimonials.json')
      .then(res => res.json())
      .then(data => setData(data))
    console.log(data.length);
  }, [])
  return (
    <div className='my-12'>
      <div>
        <SectionTitle heading={"Testimonials"} subHeading={"Users love our Polling and Survey App with Payment Integration—effortless surveys, secure transactions, and rich analytics redefine their data collection experience."}>
        </SectionTitle>
      </div>
      <Swiper
        // slidesPerView={2}
        // spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper grid grid-cols-1"
        breakpoints={{
          992 : {
            slidesPerView: 2,
            spaceBetween: 20
          },
          600 : {
            slidesPerView: 1,
            spaceBetween: 20
          },
        
        }}
      >
        <div className=''>
        {
          data.map(item =>  <SwiperSlide key={item.id}>
                <div className='my-10'>
                  <div className="card card-compact bg-base-100 shadow-xl">
                    <figure> <div className="avatar pt-5 start-0">
                      <div className="w-16 rounded-full">
                        <img src="https://i.ibb.co/9c495Nt/istockphoto-1399565382-170667a.webp" />
                      </div>
                    </div></figure>
                    <div className="card-body text-center">
                      <h2 className="text-center font-semibold text-2xl">Sabbir ahmad</h2>
                      <p>User testimonials speak volumes about our Polling and Survey App with Payment Integration. Discover a seamless experience in crafting surveys, secure payment transactions, and insightful</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
          

          )
        }
        </div>
  



      </Swiper>
    </div>
  );
};

export default Testimonials;