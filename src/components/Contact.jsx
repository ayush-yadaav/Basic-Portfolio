import React from 'react';
import { FaInstagram, FaFacebookSquare, FaTelegram, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div className="mt-[7%] w-full px-4 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side (Info + Socials) */}
        <div className="w-full md:w-[45%] flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Contact Us</h2>
          <p className="text-lg md:text-2xl text-white mb-2">ayushyadav2091@gmail.com</p>
          <p className="text-lg md:text-2xl text-white mb-2">949009802140</p>
          <p className="text-lg md:text-2xl text-white mb-4">42, Badesar Janjgir-Champa</p>
          <div className="w-[60%] h-[2px] bg-slate-400 my-4"></div>
          <div className="flex gap-4 text-3xl text-white">
            <FaInstagram />
            <FaFacebookSquare />
            <FaTelegram />
            <FaGithub />
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-[45%] bg-zinc-800 p-6 rounded-2xl shadow-lg">
          <form className="space-y-6">
            {/* Name Fields */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="font-semibold text-white block mb-1">First Name</label>
                <input type="text" className="w-full p-2 rounded bg-zinc-700 text-white" />
              </div>
              <div className="flex-1">
                <label className="font-semibold text-white block mb-1">Last Name</label>
                <input type="text" className="w-full p-2 rounded bg-zinc-700 text-white" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="font-semibold text-white block mb-1">Email</label>
              <input type="email" className="w-full p-2 rounded bg-zinc-700 text-white" />
            </div>

            {/* Message */}
            <div>
              <label className="font-semibold text-white block mb-1">Message</label>
              <textarea className="w-full p-2 rounded bg-zinc-700 text-white h-28 resize-none"></textarea>
            </div>

            {/* Button */}
            <div className="text-center">
              <button
                type="submit"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-2.5 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;
