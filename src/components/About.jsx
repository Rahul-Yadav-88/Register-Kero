import React from 'react'
import { CircleArrowRight } from 'lucide-react'

export default function AboutSection() {
    return (
        <section className="py-10 px-12 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                    <p className="text-orange-500 font-medium">WELCOME TO REGISTERKARO.IN</p>
                    <h1 className="text-4xl font-bold flex items-center gap-2">
                        About <span className="text-orange-500">Register Karo</span>

                    </h1>
                    <div className="space-y-4 text-gray-600">
                        <p>
                            We have been using Intelegencia as our DevOps vendor for our field service
                            applications over the last couple of years and I'm extremely pleased with
                            their performance, ability to execute, and willingness to adapt in our ever changing
                            environment. Perry is an outstanding leader who is fanatical about
                            customer satisfaction. He has built a solid team which has consistently delivered
                            on projects thereby exceeding everyone's expectations.
                        </p>
                        <p>
                            I would strongly recommend their services to any organization that is looking for
                            solid, reliable, and predictable outcomes.
                        </p>
                    </div>
                    <button
                        className="bg-[#1e3a8a] rounded-sm py-3 flex items-center justify-center hover:bg-[#1e3a8a]/90 text-white px-6"
                    >
                        Learn More <CircleArrowRight  className="ml-2 h-4 w-4" />
                    </button>
                </div>

                {/* Right Image */}
                <div className="relative">
                    <div className="relative">
                        <img
                            src="./group.png"
                            alt="Register Karo Team"
                            className="rounded-lg shadow-lg w-full"
                        />
                        
                    </div>

                   
                    
                </div>
            </div>
        </section>
    )
}
