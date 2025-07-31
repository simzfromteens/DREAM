import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center text-center bg-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Design Your Dream Space, Live
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
          Book a live call and watch your room come to life in real-time with our
          expert designers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/demo"
            className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-200"
          >
            Free Demo Call
          </Link>
          <Link
            to="/how-it-works"
            className="px-6 py-3 border border-black text-black rounded hover:bg-gray-100 transition-colors duration-200"
          >
            How It Works
          </Link>
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Here’s how it works</h2>
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 text-2xl mb-4">
              📞
            </div>
            <h3 className="font-semibold mb-2">Book a call</h3>
            <p className="text-gray-600">Schedule a time that works for you and meet our design experts.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 text-2xl mb-4">
              🤝
            </div>
            <h3 className="font-semibold mb-2">Collaborate live</h3>
            <p className="text-gray-600">Work together in real-time to craft your perfect space.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 text-2xl mb-4">
              🏡
            </div>
            <h3 className="font-semibold mb-2">Get your dream space</h3>
            <p className="text-gray-600">Enjoy a stunning room designed just for you.</p>
          </div>
        </div>
      </section>
    </>
  );
}
