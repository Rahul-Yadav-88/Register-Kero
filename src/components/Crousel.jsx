import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat.",
    author: "Chris",
    role: "President and CEO, PrintTech, USA",
    rating: 4.5,
    image:
      "./C.png",
  },
  {
    id: 2,
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    author: "Chris",
    role: "President and CEO, PrintTech, USA",
    rating: 5,
    image:
      "./C.png",
  },
  {
    id: 3,
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat.",
    author: "Chris",
    role: "President and CEO, PrintTech, USA",
    rating: 4.5,
    image:
      "./C.png",
  },
  {
    id: 4,
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Chris",
    role: "President and CEO, PrintTech, USA",
    rating: 5,
    image:
      "./C.png",
  },
]

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < Math.floor(rating) ? "text-orange-400" : index < rating ? "text-orange-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (testimonials.length - 2))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2))
  }

  return (
    <div className="bg-[#0B2447] p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-white text-2xl font-semibold">What peoples says about us</h2>

        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <StarRating rating={testimonial.rating} />
                <blockquote className="mt-4 text-gray-600">{testimonial.quote}</blockquote>
                <div className="mt-4 flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {[...Array(testimonials.length - 2)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? "bg-orange-500" : "bg-white/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialCarousel

