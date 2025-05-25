import React from 'react';

function About() {
  return (
    <div className="w-full min-h-screen px-5 py-10 flex flex-col-reverse md:flex-row items-center justify-evenly gap-10">
      
      {/* Left - Image */}
      <div className="w-full md:w-[40%] flex justify-center">
        <img
          className="w-60 h-60 md:w-full md:h-auto object-contain rounded-lg shadow-lg"
          src="https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="minimal"
        />
      </div>

      {/* Right - Content */}
      <div className="w-full md:w-[50%] flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">About Me</h1>
        <p className="text-base md:text-lg font-medium mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem blanditiis tenetur magni nobis molestiae ipsam praesentium. Eum consectetur provident error eligendi facere eveniet rem pariatur doloremque repudiandae a, corrupti vel enim sed suscipit architecto quia?
        </p>
        <p className="text-base md:text-lg font-medium mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et, alias neque, eos ab eligendi odio quod rem perferendis qui nesciunt consequatur voluptatem quidem molestias numquam a dignissimos velit, maxime modi! Quidem quia rerum excepturi.
        </p>
        <button
          type="button"
          className="mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3 transition duration-300"
        >
          <a href="/project">Check My Project</a>
        </button>
      </div>
    </div>
  );
}

export default About;
