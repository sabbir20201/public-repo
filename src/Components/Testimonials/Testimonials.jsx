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
    <div className='my-12 bg-slate-400'>
      <div>
        <SectionTitle heading={"Testimonials"} subHeading={"Users love our Polling and Survey App with Payment Integration—effortless surveys, secure transactions, and rich analytics redefine their data collection experience."}>
        </SectionTitle>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          data.map(item => <SwiperSlide>
            <div className='my-10'>
              <div className="card card-compact bg-base-100 shadow-xl">
                <figure> <div className="avatar pt-5">
                  <div className="w-16 rounded-full">
                    <img src="https://i.ibb.co/9c495Nt/istockphoto-1399565382-170667a.webp" />
                  </div>
                </div></figure>
                <div className="card-body">
                  <h2 className="card-title">sabbir ahmad</h2>
                  <p>User testimonials speak volumes about our Polling and Survey App with Payment Integration. Discover a seamless experience in crafting surveys, secure payment transactions, and insightful</p>
                </div>
              </div>
            </div>
          </SwiperSlide>)
        }
      
      </Swiper>
    </div>
  );
};

export default Testimonials;