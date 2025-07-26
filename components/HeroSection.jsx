'use client';
import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { FaArrowsAlt, FaCircle } from 'react-icons/fa';
import Loader from './Loader';
const AvatarCanvas = dynamic(() => import('./AvatarCanvas'), { ssr: false });
export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
     
      <div className="absolute -right-10 top-0 h-full w-[100%] sm:w-[60%] md:w-[50%] lg:w-[70%] z-0 sm:z-10 cursor-pointer">
<AvatarCanvas />
     <motion.div
      className="absolute bottom-4 right-60 -translate-x-1/2 flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white text-sm backdrop-blur-md shadow-md"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
    >
      <motion.span
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="text-white"
      >
        <FaArrowsAlt size={14} />
      </motion.span>
      Move ghostCoder
    </motion.div>
    </div>

      <div className="absolute inset-0 flex items-center px-6 md:px-24 md:pt-12">
        <div className="max-w-[700px]">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-[60px] font-bold font-heading text-white leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block">Code in Silence,</span>
            <span className="block">Rule in Shadows</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mt-6 mb-8 text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            A complete tech platform with AI tools, roadmaps, blogs, and coding resources — all designed to take you from beginner to pro, completely free.
          </motion.p>

          <motion.button
            className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_1px_#fff,0_0_5px_#fff,0_0_15px_#fff] transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started →
          </motion.button>
        </div>
      </div>
    </div>
  );
}
