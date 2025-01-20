import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    author: "Chris",
    role: "President and CEO, PrintReach, USA",
    image: "https://via.placeholder.com/80", // Replace with an actual image URL
    rating: 5,
  },
  {
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.",
    author: "Alexandra",
    role: "CTO, TechStart Inc, USA",
    image: "https://via.placeholder.com/80",
    rating: 4.5,
  },
  {
    text: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Michael",
    role: "Founder, CloudSync, Canada",
    image: "https://via.placeholder.com/80",
    rating: 4,
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="py-10 bg-blue-800 text-white">
      <div className="container mx-auto px-5">
        <h2 className="text-center text-2xl font-bold mb-8">What people say about us</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="py-5"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white text-black rounded-lg shadow-lg p-6 max-w-md">
                <div className="flex items-center gap-4">
                  <div className="text-orange-500 text-4xl">“</div>
                  <div>
                    <p className="text-sm">{testimonial.text}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={idx < testimonial.rating ? "orange" : "none"}
                      viewBox="0 0 24 24"
                      stroke="orange"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 16.5l-4.502 2.677 1.114-4.799-3.652-3.161 4.812-.498L12 6.3l1.228 4.419 4.812.498-3.652 3.161 1.114 4.799L12 16.5z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
