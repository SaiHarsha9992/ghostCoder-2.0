'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function BecomeAGhostCoder() {
  return (
    <section className="text-white px-6 py-20 md:px-16 bg-[#0b0e14]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Become a ghostCoder
        </motion.h2>

        {/* 3-column layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left column */}
          <motion.div
            className="text-left max-w-sm"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true}}
          >
            <h3 className="text-xl font-bold mb-4 font-heading">
              Join the Movement
            </h3>
            <p className="text-gray-300 leading-relaxed">
              ghostCoder is more than a platform. It’s a focused space for learners to grow with clarity and confidence — free, structured, and future-ready.
            </p>
          </motion.div>

          {/* Center image + Join Button over it */}
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true}}
          >
            <Image
              src="/images/becomeaghostcoder.avif"
              alt="Ghost Coder Character"
              priority
              width={550}
              height={550}
              className="rounded-xl object-contain"
            />

            <a
              href="/join"
              className="absolute bottom-6 lg:bottom-70 bg-white text-black px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_5px_#fff,0_0_15px_#fff] transition"
            >
              Join Now <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Right column */}
          <motion.div
            className="text-left max-w-sm"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true}}
          >
            <h3 className="text-xl font-bold mb-4 font-heading">
              Why You Should Join
            </h3>
            <ul className="text-gray-300 list-disc list-inside space-y-2 text-sm leading-relaxed">
              <li>Learn with a clear and structured path</li>
              <li>Get support from real coders and mentors</li>
              <li>Practice with real-world problems and projects</li>
              <li>Access free resources, blogs, and AI tools</li>
              <li>Be part of a community that wants you to succeed</li>
            </ul>
          </motion.div>
        </div>

        {/* Footer taglines */}
        <motion.div
          className="relative mt-8 grid grid-cols-1 lg:bottom-60 sm:grid-cols-3 text-center gap-4 font-semibold text-white text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-heading">Start Exploring.</p>
          <p className="font-heading">Start Learning.</p>
          <p className="font-heading">Start Sharing.</p>
        </motion.div>
      </div>
    </section>
  );
}
