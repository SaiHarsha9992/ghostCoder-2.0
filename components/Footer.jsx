'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, ExternalLink } from 'lucide-react';
import {
  Linkedin,
  Instagram,
  Youtube,
  ArrowUpRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FooterSection() {
  return (
    <motion.footer
      className="bg-[#0b0e14] text-white px-6 py-12 rounded-t-xl"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-8"
        variants={fadeUp}
      >
        {/* Brand section */}
        <motion.div className="space-y-4" variants={fadeUp}>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="ghostCoder logo"
              priority
              width={40}
              height={40}
              className="rounded-full"
            />
            <h1 className="text-xl font-heading font-bold">ghostCoder</h1>
          </div>
          <p className="text-sm text-gray-400">
            A complete tech platform with AI tools, roadmaps, blogs, and coding resources — all designed to take you from beginner to pro, completely free.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div className="space-y-2" variants={fadeUp}>
          <h3 className="font-heading font-semibold text-lg mb-2">Navigation</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Features</a></li>
          </ul>
        </motion.div>

        {/* Features */}
        <motion.div className="space-y-2" variants={fadeUp}>
          <h3 className="font-heading font-semibold text-lg mb-2">Features</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><a href="#">Coding Blogs</a></li>
            <li><a href="#">AI Assistant</a></li>
            <li><a href="#">Chat Rooms</a></li>
            <li><a href="#">Road Maps</a></li>
            <li><a href="#">SmartMeet</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div className="space-y-2" variants={fadeUp}>
          <h3 className="font-heading font-semibold text-lg mb-2">Get In Touch</h3>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <Mail className="w-5 h-5" />
            <span>team.ghostcoder.dev@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <ExternalLink className="w-5 h-5" />
            <span>ghost-coderr.vercel.app</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Icons */}
      <motion.div
        className="border-t border-white/20 pt-6 flex justify-center gap-6"
        variants={fadeUp}
      >
        <a href="https://ghost-coderr.vercel.app" target="_blank" rel="noreferrer">
          <ArrowUpRight className="w-6 h-6 hover:text-blue-400 transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <Linkedin className="w-6 h-6 hover:text-blue-500 transition" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <Youtube className="w-6 h-6 hover:text-red-500 transition" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <Instagram className="w-6 h-6 hover:text-pink-400 transition" />
        </a>
      </motion.div>
    </motion.footer>
  );
}
