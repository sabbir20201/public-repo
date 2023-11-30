
const TestimonialCard = () => {
    return (
        <div>
             <SwiperSlide key={item.id}>
            <div className='my-10'>
              <div className="card card-compact bg-base-100 shadow-xl">
                <figure> <div className="avatar pt-5">
                  <div className="w-16 rounded-full">
                    <img src="https://i.ibb.co/9c495Nt/istockphoto-1399565382-170667a.webp" />
                  </div>
                </div></figure>
                <div className="card-body">
                  <h2 className="card-title text-center">sabbir ahmad</h2>
                  <p className="text-center">User testimonials speak volumes about our Polling and Survey App with Payment Integration. Discover a seamless experience in crafting surveys, secure payment transactions, and insightful</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
    );
};

export default TestimonialCard;