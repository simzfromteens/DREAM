import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
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
  );
}
