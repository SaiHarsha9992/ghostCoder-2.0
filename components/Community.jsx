'use client';

import {
  Linkedin,
  Instagram,
  Youtube,
  Github,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CommunitySection() {
  return (
    <section className=" text-white px-6 py-28">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        <div className="flex-1 max-w-xl">
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-heading mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Community
          </motion.h2>

          <motion.p
            className="text-gray-300 leading-relaxed space-y-4 mb-8 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <p>
              At ghostCoder, our community is the heart of everything we do.
              It’s a space built on collaboration, not competition. We believe
              in helping each other grow through real connections, shared
              learning, and consistent support.
            </p>
            <p>
              Whether you’re joining a study group, solving problems with
              others, or simply sharing your journey — this is a place where
              every coder belongs. Together, we learn, build, and rise.
            </p>
            <p>
              Here, no one is left behind. <br />
              Here, we move forward as one community.
            </p>
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <a
              href="/join"
              className="bg-white text-black px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_5px_#fff,0_0_15px_#fff] transition"
            >
              Join Now <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div
        className="flex-1 flex flex-col items-center md:items-end text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        >
        <div className="rounded-full bg-[#161c25] p-4 shadow-md">
            <Image
            src="/images/logo.png"
            alt="Ghost Coder Logo"
            priority
            width={200}
            height={200}
            className="rounded-full"
            />
        </div>
        <div className="flex flex-col items-center mt-32 gap-2">
            <span className="text-lg text-gray-400">Connect With Us:</span>
            <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin className="w-10 h-10 hover:text-blue-400" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
                <Github className="w-10 h-10 hover:text-gray-300" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <Youtube className="w-10 h-10 hover:text-red-500" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram className="w-10 h-10 hover:text-pink-400" />
            </a>
            </div>
        </div>
        </motion.div>

      </div>
    </section>
  );
}
