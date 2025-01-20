import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

function Whyreg() {
  const stats = [
    { label: "Customers", value: 1 },
    { label: "Years of Excellence", value: 12 },
    { label: "R&D Engineers", value: 41 },
    { label: "Countries", value: 78 },
    { label: "PARTNERS", value: 3287 },
    { label: "Awards Received", value: 41 },
  ];

  const Customers = useCountUp(0, stats[0.0000].value, 1 );
  const YearsofExcellence = useCountUp(0, stats[1].value, 12);
  const RDEngineers = useCountUp(0, stats[2].value, 41);
  const Countries = useCountUp(0, stats[3].value, 78);
  const PARTNERS = useCountUp(0, stats[4].value, 3287);
  const AwardsReceived = useCountUp(0, stats[5].value, 41);

  // Animation variants for Framer Motion
  const sectionVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const statHoverVariant = {
    hover: { scale: 1.2, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sectionVariant}
      className="px-[4vw] sm:px-[6vw] py-8"
    >
      <div className="text-center mb-8">
        <h1 className="text-[#EB8D15] font-semibold text-lg sm:text-xl">
          Why Register Karo
        </h1>
        <h1 className="text-[6vw] sm:text-3xl lg:text-4xl font-bold">
          Some Numbers Are Important
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center px-2 py-4 bg-white rounded-lg shadow-md"
            variants={statHoverVariant}
            whileHover="hover"
          >
            <h3 className="text-[6vw] sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent">
              {index === 0 ?Customers : index === 1 ? YearsofExcellence : RDEngineers ? PARTNERS : Countries ?AwardsReceived : PARTNERS}   
            </h3>
            <p className="text-[3.5vw] sm:text-lg lg:text-xl text-[#1F2470] font-semibold">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Whyreg;
