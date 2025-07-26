'use client';

import AnimatedNavbar from '@/components/Navbar';
import Link from 'next/link';
import { FaGhost } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <FaGhost className="text-6xl text-white mb-4 animate-bounce" />
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="mb-6 text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
      <Link href="/">
        <button className="px-6 py-2 bg-white text-black hover:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_1px_#fff,0_0_5px_#fff,0_0_15px_#fff] transition-colors duration-300 rounded-full">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}
