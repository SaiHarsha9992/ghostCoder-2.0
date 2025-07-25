'use client';

import React from 'react';
import {
  BookOpen,
  Bot,
  Cpu,
  MessageSquareText,
  Map,
  Gift,
  Users,
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-white" />,
    title: 'Coding Blogs',
    description:
      'Read quality blogs with real coding tips, tutorials, and career advice — all in one place.',
  },
  {
    icon: <Bot className="h-8 w-8 text-white" />,
    title: 'SmartMeet',
    description:
      'SmartMeet is an AI-powered mock interview tool based on your resume to help you prepare better.',
  },
  {
    icon: <Cpu className="h-8 w-8 text-white" />,
    title: 'AI Assistant',
    description:
      'Instant coding help from GhostCoder assistant and community — ask, share, and solve fast.',
  },
  {
    icon: <MessageSquareText className="h-8 w-8 text-white" />,
    title: 'Chat Room',
    description:
      'A space for real-time coding discussions, sharing, and collaboration with developers.',
  },
  {
    icon: <Map className="h-8 w-8 text-white" />,
    title: 'Road Maps',
    description:
      'Structured roadmaps to master DSA, Web, Cloud, AI, and more built for all levels.',
  },
  {
    icon: <Gift className="h-8 w-8 text-white" />,
    title: 'All For Free',
    description:
      'Access all coding resources, blogs, and roadmaps for free. No limits, no distractions.',
  },
];

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function FeaturesSection() {
  return (
    <section className="text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title Motion */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 font-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What we are providing
        </motion.h2>

        {/* Feature Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              className="bg-transparent rounded-xl p-8 border-2 border-white hover:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_1px_#fff,0_0_5px_#fff,0_0_15px_#fff] transition duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 font-heading">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Community CTA Card */}
        <motion.div
          className="mt-16 max-w-md mx-auto bg-transparent rounded-xl p-6 text-center border-2 border-white hover:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_1px_#fff,0_0_5px_#fff,0_0_15px_#fff]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Users className="h-8 w-8 mx-auto text-white mb-2" />
          <h3 className="text-xl font-semibold mb-2">Community</h3>
          <p className="text-gray-400 text-sm mb-4">
            Join a supportive coding community to learn, share, and grow together.
          </p>
          <a
            href="/join"
            className="inline-block px-6 py-2 rounded-full bg-white hover:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_1px_#fff,0_0_5px_#fff,0_0_15px_#fff] text-black font-semibold transition"
          >
            Join Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
