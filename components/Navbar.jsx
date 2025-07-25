'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCircle } from 'react-icons/fa';

const navItems = ['Home', 'About', 'Features', 'Community', 'Contact'];

export default function AnimatedNavbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); 
  const [isDesktop, setIsDesktop] = useState(true); 

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
      {/* Logo */}
      <div
        className="relative"
        onMouseEnter={() => isDesktop && setIsHovered(true)}
        onMouseLeave={() => {
            if (isDesktop) {
                setIsHovered(false);
                setShowDropdown(false);
            }
        }}

      >
        <motion.div
          className="bg-black backdrop-blur-lg border border-white/20 px-6 py-2 rounded-full shadow-md text-white font-heading font-bold cursor-pointer text-3xl flex items-center gap-x-3"
          whileHover={{ scale: 1.05 }}
        >
          <FaCircle size={15} />
          ghostCoder
          <FaCircle size={15} />
          {/* === MOBILE MENU TOGGLE === */}
        <div className="md:hidden">
          <motion.button
            className="bg-black px-2 py-1 rounded-full text-white font-bold border-2 border-white"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            ☰
          </motion.button>
        </div>
        </motion.div>
        

        {/* === DESKTOP NAVIGATION === */}
        <AnimatePresence>
          {isHovered && isDesktop && (
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 mb-4 hidden md:flex items-center gap-10 px-6 py-3 bg-black backdrop-blur-lg border border-white/20 rounded-full shadow-xl"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{ originX: 0.5 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  className="relative"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  {item === 'Features' ? (
                    <div
                      onClick={() => setShowDropdown((prev) => !prev)}
                      className="cursor-pointer flex items-center gap-1 text-white font-medium hover:underline underline-offset-4 transition text-xl"
                    >
                      {item}
                      <motion.span
                        animate={{ rotate: showDropdown ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm"
                      >
                        ▼
                      </motion.span>
                    </div>
                  ) : (
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-white font-medium hover:underline underline-offset-4 transition text-xl"
                    >
                      {item}
                    </Link>
                  )}

                  {item === 'Features' && showDropdown && (
                    <motion.div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-max bg-black backdrop-blur-sm border border-white/20 rounded-xl shadow-xl py-2 px-4 z-50"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul className="text-white text-sm space-y-4 text-left min-w-[180px]">
                        <li><Link href="#assistant" className='hover:underline'>ghostCoder Assistant</Link></li>
                        <li><Link href="#chatroom" className='hover:underline'>Chatroom</Link></li>
                        <li><Link href="#blogs" className='hover:underline'>Blogs</Link></li>
                        <li><Link href="#tutorials" className='hover:underline'>Tutorials</Link></li>
                        <li><Link href="#smartmeet" className='hover:underline'>SmartMeet</Link></li>
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              ))}
              <Image
                src="https://lh3.googleusercontent.com/a/ACg8ocIFSfT47CJB4fv7A8yb3Oe3MR4CSGVW1MfWeux2GTA_YDn32d4d=s96-c"
                alt="User Avatar"
                priority
                width={40}
                height={40}
                className="rounded-full border-2 border-gray-500 lg:relative lg:right-6"
              />
            </motion.div>
          )}
        </AnimatePresence>

        

        {/* === MOBILE NAVIGATION === */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-nav"
              className="fixed top-20 left-4 right-4 bg-black border border-white/20 rounded-xl p-6 z-50 flex flex-col items-center space-y-6 shadow-2xl md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {navItems.map((item) => (
                <React.Fragment key={item}>
                  {item === 'Features' ? (
                    <div className="w-full text-center">
                      <button
                        onClick={() => setShowDropdown((prev) => !prev)}
                        className="text-white font-semibold text-lg"
                      >
                        Features {showDropdown ? '▲' : '▼'}
                      </button>
                      <AnimatePresence>
                        {showDropdown && (
                          <motion.ul
                            className="mt-2 space-y-2 text-sm text-white"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <li><Link href="#assistant" onClick={() => setIsMobileMenuOpen(false)}>ghostCoder Assistant</Link></li>
                            <li><Link href="#chatroom" onClick={() => setIsMobileMenuOpen(false)}>Chatroom</Link></li>
                            <li><Link href="#blogs" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link></li>
                            <li><Link href="#tutorials" onClick={() => setIsMobileMenuOpen(false)}>Tutorials</Link></li>
                            <li><Link href="#smartmeet" onClick={() => setIsMobileMenuOpen(false)}>SmartMeet</Link></li>
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-white font-medium text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  )}
                </React.Fragment>
              ))}
              <Image
                src="https://lh3.googleusercontent.com/a/ACg8ocIFSfT47CJB4fv7A8yb3Oe3MR4CSGVW1MfWeux2GTA_YDn32d4d=s96-c"
                alt="User Avatar"
                priority
                width={40}
                height={40}
                className="rounded-full border-2 border-gray-500"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
