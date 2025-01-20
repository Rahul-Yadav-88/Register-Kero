import React from "react";

const HeroSection = () => {
    const Logo = [
        {
            image: "./Company1.png",
        },
        {
            image: "./Company2.png",
        },
        {
            image: "./Company3.png",
        },
        {
            image: "./Company4.png",
        },
        {
            image: "./Company5.png",
        },
        {
            image: "./Company6.png",
        },

    ];
    return (
        <div>
            <div className="bg-gradient-to-r from-[#FFA229] to-[#1C4670]  flex flex-col h-[330px] justify-center items-center text-white px-4">
                {/* Industry Tag */}
                <p className="text-sm uppercase font-bold tracking-wide mb-2">1% of the Industry</p>

                {/* Main Heading */}
                <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
                    Welcome to your new digital reality. Now.
                </h1>

                {/* Input Form */}
                <div className="flex flex-col sm:flex-row bg-white rounded-lg w-[40vw] overflow-hidden shadow-md">
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="px-6 py-3 text-gray-700 outline-none flex-1"
                    />
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-bold">
                        Submit
                    </button>
                </div>

                {/* Features */}
                <div className="flex flex-wrap justify-center mt-6 space-x-4 space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
                    <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-3 h-3 text-blue-900"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </span>
                        <span>Instant results</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-3 h-3 text-blue-900"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </span>
                        <span>User-friendly interface</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-3 h-3 text-blue-900"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </span>
                        <span>Personalized customization</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-12">
                {Logo.map((Logo, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg shadow-md flex flex-col items-center text-center`}
                    >
                        <img src={Logo.image} alt="" />
                    </div>
                ))}
            
        </div>
    </div >
  );
};

export default HeroSection;
