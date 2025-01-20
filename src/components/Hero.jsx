import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CirclePlay } from 'lucide-react';

function useCountUp(start, end, duration) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      const currentCount = Math.floor(
        progressPercentage * (end - start) + start
      );
      setCount(currentCount);

      if (progressPercentage < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [start, end, duration]);

  return count;
}
const HeroSection = () => {
  const stats = [
    {
      label: "Customer Rating", value: 4.5, image: "./1.png",
    },
    {
      label: "Clients", value: 20000, image: "./2.png",
    },
    {
      label: "Financial Stability", value: 99.8, image: "./3.png",
    },

  ];

  const clientCount = useCountUp(0, stats[0].value, 2000);
  const projectCount = useCountUp(0, stats[1].value, 2000);
  const yearsCount = useCountUp(0, stats[2].value, 2000);

  // Animation variants for Framer Motion
  const sectionVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const statHoverVariant = {
    hover: { scale: 1.2, transition: { type: "spring", stiffness: 300 } },
  };
    const companies = [
      {  image: "./Group (5).png"},
      { image: "./Group (1).png" },
      { image: "./Group (1).png" },

      {  image: "./Group (2).png" },
      {  image: "./Group (3).png" },
      { image: "./Group (4).png" },
    ];
  
  return (
    <div className="bg-gradient-to-r from-white to-gray-50 pt-16">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 lg:px-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <div className="mb-4 text-yellow-500 flex  font-semibold">
            ★<span className="text-black">Google Rating</span>
            <img src="./Star.png" alt="" />
            <img src="./Star.png" alt="" />
            <img src="./Star.png" alt="" />
            <img src="./Star.png" alt="" />
            <img src="./Star.png" alt="" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Your trusted partner for compliance business needs
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            An online business compliance platform that helps entrepreneurs and
            other individuals with various <strong>registrations</strong>,{" "}
            <strong>tax filings</strong>, and other <strong>legal matters</strong>.
          </p>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="px-4 sm:px-8 lg:px-10 py-10"
          >


            {/* Stats Section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white shadow-md rounded-lg py-4"
                  variants={statHoverVariant}
                  whileHover="hover"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <img src={stat.image} alt="" />

                    </div>
                    <div>
                      <h3 className="text-[4vw] sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent">
                        {index === 0
                          ? clientCount
                          : index === 1
                            ? projectCount
                            : index === 2
                              ? yearsCount
                              : stat.value}
                      </h3>
                      <p className="text-[3.5vw] sm:text-base lg:text-sm text-[#1F2470]">
                        {stat.label}
                      </p>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call-to-action Buttons */}
          <div className="flex space-x-6">
            <button className="bg-blue-900 hover:bg-blue-800 px-6 py-3 text-white font-medium rounded-lg">
              Talk An Expert
            </button>
            <button className="flex items-center text-blue-900 hover:underline">
            <CirclePlay  className="text-[#FB432C]"/>
            See how it works
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center relative mt-12 lg:mt-0">
          <img
            src="./Hero.png"
            alt="Illustration"
            className="max-w-full lg:max-w-lg"
          />
          <div className="absolute top-16  right-10 flex flex-col space-y-4">
            <button className="bg-white hidden md:block  shadow-md px-4 py-2 rounded-lg hover:bg-gray-100">
              Annual Compliance
            </button>
            <button className="bg-white hidden md:block  shadow-md px-4 py-2 rounded-lg hover:bg-gray-100">
              Payroll Services
            </button>
            <button className="bg-white hidden md:block  shadow-md px-4 py-2 rounded-lg hover:bg-gray-100">
              Company Formation
            </button>
            <button className="bg-white hidden md:block  shadow-md px-4 py-2 rounded-lg hover:bg-gray-100">
              Annual Compliance
            </button>
          </div>
        </div>
      </div>

      <section className="pt-10  bg-white text-center">
      <h2 className="text-lg font-medium text-gray-700 mb-6">
        Trusted By Over 100+ Startups and Freelance Businesses
      </h2>
      <div className=" grid grid-cols-1   px-5 sm:grid-cols-4 lg:grid-cols-6 ">
        {companies.map((company, index) => (
          <img
            key={index}
            src={company.image}
            alt=""
            className="h-6  flex  items-center justify-between px-5 "

          />
        ))}
      </div>
    </section>
    </div>
  );
};

export default HeroSection;




