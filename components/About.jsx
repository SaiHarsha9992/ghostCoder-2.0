'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="relative w-full min-h-screen text-white px-6 md:px-24 py-20 flex flex-col md:flex-row items-center justify-center gap-10">
      
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <motion.div
          className="will-change-auto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/aboutsection.avif" 
            alt="ghostCoder Illustration"
            width={450}
            priority
            height={450}
            quality={70}
            className="object-contain rounded-xl pt-4"
          />
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 font-heading leading-snug"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          About ghostCoder
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          ghostCoder was created to help students who feel lost in the world of coding and technology. We saw the need for clear and structured guidance, so we built a platform where anyone can learn freely and grow at their own pace.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-gray-400 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          ghostCoder is all about focus, growth, and mastering skills with confidence. We don't show off. We build with purpose. That’s what makes us ghostCoders.
        </motion.p>
      </div>
    </section>
  );
}
