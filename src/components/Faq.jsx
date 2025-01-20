import React from "react";
import { useState } from "react";
const FAQ = () => {
    const questions = [
        {
          title: "Can I recover deleted files from desktop with this software?",
          answer: "Building your own UX (User Experience) strategy is essential for delivering products that provide valuable, meaningful experiences to users. A well-thought-out UX strategy helps align business goals with user needs and ensures a seamless, engaging experience."
        },
        {
          title: "Can I recover deleted files from desktop with this software?",
          answer: "A career in UX (User Experience) can open doors to a wide range of exciting and diverse opportunities across industries. As UX becomes more integral to product design, technology, and customer experiences, professionals in this field are in high demand. "
        },
        {
          title: "Can I recover deleted files from desktop with this software?",
          answer: "A problem statement in UX is a concise description of the issue or challenge that needs to be addressed to improve the user experience. It defines the gap between the current user experience and the desired outcome, helping the UX team focus on the right problem to solve. Writing a clear, effective problem statement is crucial because it sets the direction for the design process and ensures that everyone involved is aligned."
        },
        {
          title: "Can I recover deleted files from desktop with this software?",
          answer: "UX designers use several research and analysis techniques to distill user insights and arrive at a clear, concise problem statement. These techniques help identify core user needs, pain points, and areas for improvement, ensuring the problem statement is both relevant and actionable."
        },
        {
          title: "Can I recover deleted files from desktop with this software?",
          answer: "When evaluating obstacles users face and what they are trying to achieve, it's essential to identify the common challenges users encounter across different products or services."
        }
      ];

      const [expandedIndices, setExpandedIndices] = useState([]);
      const toggleAccordion = (index) => {
        setExpandedIndices((prevIndices) => {
          if (prevIndices.includes(index)) {
            return prevIndices.filter((i) => i !== index);
          } else {
            return [...prevIndices, index];
          }
        });
      };
    

  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4">
       <h3 className="text-orange-500 text-center font-semibold">FAQ</h3>
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Frequent Ask Questions
      </h2>
      <div className="space-y-4 w-full ">
{questions.map((question, index) => (
  <div
    key={index}
    className={`border-l-4 border-blue-500 rounded-lg p-4 cursor-pointer ${expandedIndices.includes(index) ? 'bg-[#1C4670] text-white' : ''
      }`}
    onClick={() => toggleAccordion(index)}
  >
    <div className="w-full flex justify-between">
      <h3 className="text-base sm:text-lg font-semibold mb-2 flex items-center">
        {question.title}
      </h3>
      <span className="ml-2 justify-end font-bold text-lg sm:text-xl">
        {expandedIndices.includes(index) ? '>' : '>'}
      </span>
    </div>
    {expandedIndices.includes(index) && (
      <p className="text-sm sm:text-base text-white">{question.answer}</p>
    )}
  </div>
))}
</div>
      <div className="mt-6 text-center">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
          Show more &rarr;
        </button>
      </div>
    </div>
  );
};

export default FAQ;






