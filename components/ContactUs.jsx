'use client';

import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Linkedin,
  Instagram,
  Youtube,
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContactSection() {
  return (
    <motion.section
      className="text-white px-6 py-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <motion.div
        className="max-w-6xl mx-auto rounded-xl border border-gray-600 p-6 md:p-12 flex flex-col md:flex-row gap-10 items-center justify-between"
        variants={fadeInUp}
      >
        <motion.div
          className="bg-white text-black rounded-xl shadow-lg p-8 w-full md:w-1/3 h-[350px] relative lg:right-25"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-3xl font-heading font-bold mb-6"
            variants={fadeInUp}
          >
            Contact Us
          </motion.h2>

          <motion.div className="space-y-6 text-sm md:text-base" variants={fadeInUp}>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6" />
              <span>Surampalem, Aditya University</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6" />
              <span>team.ghostcoder.dev@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <ExternalLink className="w-6 h-6" />
              <span>ghost-coderr.vercel.app</span>
            </div>
          </motion.div>

          <motion.div
            className="flex gap-4 mt-8"
            variants={fadeInUp}
          >
            <a href="https://instagram.com" target="_blank">
              <Instagram className="w-6 h-6 hover:text-pink-500 transition" />
            </a>
            <a href="https://youtube.com" target="_blank">
              <Youtube className="w-6 h-6 hover:text-red-500 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <Linkedin className="w-6 h-6 hover:text-blue-500 transition" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full md:w-3/5 relative lg:right-10"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-4xl font-heading font-bold mb-6 text-center md:text-left"
            variants={fadeInUp}
          >
            Get In Touch
          </motion.h2>

          <motion.form className="space-y-4" variants={fadeInUp}>
            <motion.input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
              variants={fadeInUp}
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
              variants={fadeInUp}
            />
            <motion.textarea
              rows={4}
              placeholder="Type Your message here"
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
              variants={fadeInUp}
            />
            <motion.button
              type="submit"
              className="mt-4 bg-white text-black px-6 py-2 rounded-full font-semibold hover:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_5px_#fff,0_0_15px_#fff] transition"
              variants={fadeInUp}
            >
              Send →
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
