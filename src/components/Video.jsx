import React from "react";
import { Lightbulb, MessageSquare } from "lucide-react";

export default function VideoIntroductionSection() {
  return (
    <section className="bg-blue-900 py-16 px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white space-y-6">
          <h2 className="text-3xl font-bold">Our Video Introductions</h2>
          <p className="text-gray-300">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt apis dui.
          </p>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full">
                <Lightbulb className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Explore ideas together</h3>
                <p className="text-gray-300 text-sm">
                  Engage audience segments and finally create actionable insights.
                  Amplify vertical integration.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full">
                <MessageSquare className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Bring those ideas to life</h3>
                <p className="text-gray-300 text-sm">
                  Engage audience segments and finally create actionable insights.
                  Amplify vertical integration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          <img
            src="./video.png" 
            alt="Video Thumbnail"
            className="rounded-lg shadow-lg"
          />
         
        </div>
      </div>
    </section>
  );
}
