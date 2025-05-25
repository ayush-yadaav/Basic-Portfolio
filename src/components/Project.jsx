import React from 'react';

function Project() {
  return (
    <div className="w-full min-h-screen px-4 py-10 bg-black">
      <h1 className="text-white text-center text-3xl md:text-5xl font-semibold">My Projects</h1>

      <div className="w-full mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Project 1 */}
        <div className="w-full md:w-[40%] bg-zinc-700 rounded-2xl overflow-hidden shadow-lg">
          <div className="h-48 md:h-64">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60"
              alt="Project 1"
            />
          </div>
          <div className="p-6 flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Game Mania</h2>
            <p className="text-zinc-300 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nisi perspiciatis, aperiam repellendus expedita ab cupiditate ipsa.
            </p>
            <button
              type="button"
              className="mt-6 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300"
            >
              View Project
            </button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="w-full md:w-[40%] bg-zinc-700 rounded-2xl overflow-hidden shadow-lg">
          <div className="h-48 md:h-64">
            <img
              className="w-full h-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=500&auto=format&fit=crop&q=60"
              alt="Project 2"
            />
          </div>
          <div className="p-6 flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Fashion Blog</h2>
            <p className="text-zinc-300 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nisi perspiciatis, aperiam repellendus expedita ab cupiditate ipsa.
            </p>
            <button
              type="button"
              className="mt-6 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300"
            >
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
