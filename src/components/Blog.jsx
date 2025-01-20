import React from "react";

const blogs = [
  {
    author: "Prabhash Mishra",
    date: "1 Jan 2023 - Today",
    title: "Small business & Startup",
    description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Tax & Audit", "Management"],
    image: "./Image1.png", 
  },
  {
    author: "Mahesh Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description: "Mental models are simple expressions of complex processes or relationships.",
    tags: ["Tax", "Research", "Compliance"],
    image: "./Image2.png",
  },
  {
    author: "Rakhi Verma",
    date: "1 Jan 2023",
    title: "Growing Business Package",
    description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    tags: ["Audit", "Money Back"],
    image: "./Image1.png",
  },
  {
    author: "Karan Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description: "Collaboration can make our teams stronger, and our individual designs better.",
    tags: ["Money", "Management"],
    image: "./Image3.png",
  },
  {
    author: "Richa Singh",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description: "JavaScript frameworks make development easy with extensive features and functionalities.",
    tags: ["Tax Return", "News", "Audit"],
    image: "./Image4.png",
  },
  {
    author: "Miss Nora",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description: "Starting a community doesn’t need to be complicated, but how do you get started?",
    tags: ["Private Limited Company", "Customer Success"],
    image: "./Image5.png",
  },
];

const BlogGrid = () => {
  return (
    <section className="py-10 px-10">
      <div className="text-center">
        <h3 className="text-orange-500 font-semibold">EXPLORE OUR BLOGS</h3>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          Accelerate Digital Transformation
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500">{`${blog.author} • ${blog.date}`}</p>
              <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{blog.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {blog.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
          Show more blogs →
        </button>
      </div>
    </section>
  );
};

export default BlogGrid;
