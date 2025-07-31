import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="font-bold text-xl">Logo</div>
      <div className="flex items-center space-x-4">
        <Link to="/how-it-works" className="hover:underline">HowItWorks</Link>
        <Link to="/pricing" className="hover:underline">Pricing</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link
          to="/demo"
          className="px-4 py-2 bg-black text-white hover:bg-gray-800 rounded"
        >
          Free Demo
        </Link>
      </div>
    </nav>
  );
}
