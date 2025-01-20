import React from "react";

const ManageServices = () => {
  return (
    <section className="bg-[#1C4670] text-white  ">
      <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-center">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Manage Your Services by your Mobile Phone
          </h2>
          <p className="text-gray-300 mb-6">
            Download our app to manage and track your services. Our app enables
            you to stay in touch with our experts and aids you in tracking your
            progress.
          </p>

          {/* App Store Buttons */}
          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-white text-black py-2 px-4 rounded-md shadow-md hover:bg-gray-100"
            >
              <img
                src="./Frame 7840.png"
                alt="App Store"
                className="w-6"
              />
              <span>Get on App Store</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-white text-black py-2 px-4 rounded-md shadow-md hover:bg-gray-100"
            >
              <img
                src="./Frame 7841.png"
                alt="Google Play"
                className="w-6"
              />
              <span>Get on Google Play</span>
            </a>
          </div>
        </div>

        {/* Right Content (Mockup Images) */}
        <div className="  flex justify-center lg:justify-end">
            <img
              src="./phone.png"
              alt="Phone 1"
              className="w-40 md:w-48 lg:w-[50vw]"
            />
            
        </div>
      </div>
    </section>
  );
};

export default ManageServices;
