// src/pages/Home.jsx
import React from 'react';

function Home() {
  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 sm:text-6xl lg:text-7xl">
              Achieve Your Fitness Goals with
              <div className="relative inline-flex">
                <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-green-500"></span>
                <h1 className="relative text-4xl font-bold text-gray-800 sm:text-6xl lg:text-7xl">FitLife.</h1>
              </div>
            </h1>

            <p className="mt-8 text-base text-gray-700 sm:text-xl">
              Transform your lifestyle with personalized fitness plans, expert guidance, and a supportive community. Whether you're starting your fitness journey or aiming for new milestones, FitLife is here to help you every step of the way.
            </p>

            <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
              <a
                href="/register"
                className="inline-block bg-green-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-green-600"
              >
                Get Started
              </a>
              <a
                href="/lists"
                className="inline-block mt-4 sm:mt-0 bg-gray-800 text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-700"
              >
                View Members
              </a>
            </div>
          </div>

          <div>
            <img
              className="w-full rounded-lg shadow-lg"
              src="/gym.jpg" // Reference to image in public directory
              alt="Fitness Training"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
