import React from 'react';

function Home() {
  return (
    <div className="mt-[10%] w-full h-full px-5 md:px-10 flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-10">
      
      {/* Left Section */}
      <div className="md:w-[60%] text-center md:text-left">
        <h3 className="text-3xl md:text-6xl font-semibold text-white">Ayush Yadav</h3>
        <h1 className="text-4xl md:text-8xl font-extrabold text-white mt-4">
          Front End <br /> Web Developer
        </h1>
        <button
          type="button"
          className="mt-6 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3 transition duration-300"
        >
          Check My Project
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="md:w-[40%] flex items-center justify-center">
        <div className="w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1481437642641-2f0ae875f836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile"
          />
        </div>
      </div>

    </div>
  );
}

export default Home;
