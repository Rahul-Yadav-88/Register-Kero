import React, { useState } from "react"
import { Shield,  Smile, BookText } from "lucide-react";

const logos = [
  {
    id: 1,
    src: "./Logo.png",
    alt: "Digital Ocean",
  },
  {
    id: 2,
    src: "./Logo1.png",
    alt: "Atlas",
  },
  {
    id: 3,
    src: "./Logo2.png",
    alt: "Uber",
  },
  {
    id: 4,
    src: "./Logo3.png",
    alt: "Firebase",
  },
  {
    id: 5,
    src: "./Logo4.png",
    alt: "Buffer",
  },
  {
    id: 6,
    src: "./Logo5.png",
    alt: "Shopify",
  },
  {
    id: 7,
    src: "./Logo6.png",
    alt: "Pinterest",
  },
  {
    id: 8,
    src: "./Logo7.png",
    alt: "Dropbox",
  },
  {
    id: 9,
    src: "./Logo8.png",
    alt: "Microsoft",
  },
  {
    id: 10,
    src: "./Logo9.png",
    alt: "Sketch",
  },
  {
    id: 11,
    src: "./Logo10.png",
    alt: "Github",
  },
  {
    id: 12,
    src: "./Logo11.png",
    alt: "Trello",
  },
  {
    id: 13,
    src: "./Logo12.png",
    alt: "Google Cloud",
  },
  {
    id: 14,
    src: "./Logo13.png",
    alt: "Figma",
  },
  {
    id: 15,
    src: "./Logo14.png",
    alt: "Slack",
  },
  
]
const reasons = [
  {
    
        image:"./1.1.png",
      title: "Guaranteed Satisfaction",
     className:"bg-[#eb5757] , rounded-full , h-8 , p-1"
  },
  {
    
        image:"./1.2.png",
      title: "Guaranteed Satisfaction",
     className:"bg-[#27ae60] , rounded-full , h-8 , p-1"
  },
  {
    
        image:"./1.3.png",
      title: "Guaranteed Satisfaction",
     className:"bg-[#f2994a] , rounded-full , h-8 , p-1"
  },
  {
   
        image:"./1.4.png",
      title: "Guaranteed Satisfaction",
     className:"bg-[#828282] , rounded-full , h-8 , p-1"
  },
 
];

const HappyClients = () => {
  const [showAll, setShowAll] = useState(true)

  return (
    <div>
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-black">Our Happy Clients</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling
          customer service for state of the art customer service.
        </p>
      </div>

      <div className="relative h-[300px] md:h-[400px] mb-8">
        {logos.slice(0, showAll ? logos.length : 10).map((logo, index) => (
          <div
            key={logo.id}
            className="absolute w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:shadow-lg"
            style={{
              left: `${(index % 5) * 20 + Math.random() * 5}%`,
              top: `${Math.floor(index / 5) * 33 + Math.random() * 10}%`,
            }}
          >
            <img
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          className="text-[#1C4670] hover:text-[#1C4699] font-semibold transition-colors duration-300"
        >
          Show More →
        </button>
      </div>
      
    </div>
    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[#ffa229]'>
      {reasons.map((reasons, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg shadow-md flex  items-center justify-center m-4 ${reasons.bgColor}`}
                    >
                      <img src={reasons.image} alt=""className={reasons.className} />
                        <h3 className="font-semibold text-lg">{reasons.title}</h3>
                    </div>
                ))}
      </div>
    </div>
  )
}

export default HappyClients

