'use client';
import React, { useEffect, useState } from 'react';

const quotes = [
  "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
  "“Programs must be written for people to read.” – Harold Abelson",
  "“First, solve the problem. Then, write the code.” – John Johnson",
  "“Experience is the name everyone gives to their mistakes.” – Oscar Wilde",
  "“Make it work, make it right, make it fast.” – Kent Beck",
];

export default function Loader() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    // Pick a random quote index ONCE when loader is shown
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuoteIndex(randomIndex);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 text-center px-4">
      <div className="ghost-loader" />
      <h1 className="text-3xl font-bold font-heading text-white">ghostCoder</h1>
      <p className="text-lg italic text-gray-300 transition-opacity duration-500 ease-in-out">
        {quotes[quoteIndex]}
      </p>

      <style jsx>{`
        .ghost-loader {
          transform: rotateZ(45deg);
          perspective: 1000px;
          border-radius: 50%;
          width: 72px;
          height: 72px;
          color: white;
          position: relative;
        }

        .ghost-loader::before,
        .ghost-loader::after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: inherit;
          height: inherit;
          border-radius: 50%;
          transform: rotateX(70deg);
          animation: spin 1s linear infinite;
        }

        .ghost-loader::after {
          color: white;
          transform: rotateY(70deg);
          animation-delay: 0.4s;
        }

        @keyframes spin {
          0%, 100% {
            box-shadow: 0.2em 0 0 0 currentcolor;
          }
          12% {
            box-shadow: 0.2em 0.2em 0 0 currentcolor;
          }
          25% {
            box-shadow: 0 0.2em 0 0 currentcolor;
          }
          37% {
            box-shadow: -0.2em 0.2em 0 0 currentcolor;
          }
          50% {
            box-shadow: -0.2em 0 0 0 currentcolor;
          }
          62% {
            box-shadow: -0.2em -0.2em 0 0 currentcolor;
          }
          75% {
            box-shadow: 0 -0.2em 0 0 currentcolor;
          }
          87% {
            box-shadow: 0.2em -0.2em 0 0 currentcolor;
          }
        }
      `}</style>
    </div>
  );
}
