import React from 'react'
import { Shield, CheckCircle, Smile, } from "lucide-react";
import { FaUserTie } from "react-icons/fa";

const Why = () => {
    const reason = [
        {
              icon: <Shield className="text-orange-500" />,
            title: "Confidential & Safe",
            description: "All your private information is safe with us.",
            bgColor: "bg-orange-50",
        },
        {
              icon: <CheckCircle className="text-green-500" />,
            title: "No Hidden Fee",
            description:
                "Everything is put before you with no hidden charges or conditions.",
            bgColor: "bg-green-50",
        },
       
    ];
    const reasons = [
        {
              icon: <Smile className="text-blue-500" />,
            title: "Guaranteed Satisfaction",
            description:
                "We ensure that you stay 100% satisfied with our offered services.",
            bgColor: "bg-blue-50",
        },
        {
              icon: <FaUserTie className="text-red-500" />,
            title: "Expert CA/CS Assistance",
            description:
                "Prompt support from our in-house expert professionals.",
            bgColor: "bg-pink-50",
        },
        {
              icon: <Shield className="text-orange-500" />,
            title: "Confidential & Safe",
            description: "All your private information is safe with us.",
            bgColor: "bg-orange-50",
        },
       
    ];
    return (
        <div className='py-24'>
           <div className="flex flex-col md:flex-row justify-center items-center px-4 sm:px-8 lg:px-10">
  <div className="md:px-10 mb-8 md:mb-0 text-center md:text-left">
    <p className="text-orange-500 font-medium uppercase tracking-wide">
      Why RegisterKaro.in
    </p>
    <h2 className="text-3xl font-bold mb-4">Why Choose Register Karo</h2>
    <p className="text-gray-600 max-w-3xl mx-auto md:mx-0">
      It is with consistent services and results that build trust with the
      people and that in turn help us to serve the business better.
    </p>
  </div>
  <div className="grid grid-cols-1 gap-6 w-full md:grid-cols-2">
    {reason.map((reason, index) => (
      <div
        key={index}
        className={`p-6 rounded-lg shadow-md flex flex-col items-center text-center ${reason.bgColor}`}
      >
        <div className="text-4xl mb-4">{reason.icon}</div>
        <h3 className="font-semibold text-lg">{reason.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{reason.description}</p>
      </div>
    ))}
  </div>
</div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pl:0 lg:pl-80'>
                {reasons.map((reasons, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg shadow-md flex flex-col items-center text-center ${reasons.bgColor}`}
                    >
                        <div className="text-4xl mb-4">{reasons.icon}</div>
                        <h3 className="font-semibold text-lg">{reasons.title}</h3>
                        <p className="text-gray-600 text-sm mt-2">{reasons.description}</p>
                    </div>
                ))}
                </div>

        </div>
    )
}

export default Why



// import React from "react";
// // import { Shield, CheckCircle, Smile, UserTie } from "lucide-react";

// export default function WhyChooseUsSection() {
//     const reasons = [
//         {
//             //   icon: <Shield className="text-orange-500" />,
//             title: "Confidential & Safe",
//             description: "All your private information is safe with us.",
//             bgColor: "bg-orange-50",
//         },
//         {
//             //   icon: <CheckCircle className="text-green-500" />,
//             title: "No Hidden Fee",
//             description:
//                 "Everything is put before you with no hidden charges or conditions.",
//             bgColor: "bg-green-50",
//         },
//         {
//             //   icon: <Smile className="text-blue-500" />,
//             title: "Guaranteed Satisfaction",
//             description:
//                 "We ensure that you stay 100% satisfied with our offered services.",
//             bgColor: "bg-blue-50",
//         },
//         {
//             //   icon: <UserTie className="text-red-500" />,
//             title: "Expert CA/CS Assistance",
//             description:
//                 "Prompt support from our in-house expert professionals.",
//             bgColor: "bg-pink-50",
//         },
//         {
//             //   icon: <Shield className="text-orange-500" />,
//             title: "Confidential & Safe",
//             description: "All your private information is safe with us.",
//             bgColor: "bg-orange-50",
//         },
//     ];

//     return (
//         <section className="py-16 px-4 max-w-7xl mx-auto">
//             <div className="text-center mb-12">
//                 <p className="text-orange-500 font-medium uppercase tracking-wide">
//                     Why RegisterKaro.in
//                 </p>
//                 <h2 className="text-3xl font-bold mb-4">Why Choose Register Karo</h2>
//                 <p className="text-gray-600 max-w-3xl mx-auto">
//                     It is with consistent services and results that build trust with the
//                     people and that in turn help us to serve the business better.
//                 </p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {reasons.map((reason, index) => (
//                     <div
//                         key={index}
//                         className={`p-6 rounded-lg shadow-md flex flex-col items-center text-center ${reason.bgColor}`}
//                     >
//                         {/* <div className="text-4xl mb-4">{reason.icon}</div> */}
//                         <h3 className="font-semibold text-lg">{reason.title}</h3>
//                         <p className="text-gray-600 text-sm mt-2">{reason.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }



