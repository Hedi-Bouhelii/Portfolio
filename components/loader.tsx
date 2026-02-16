'use client'

import { useEffect, useState } from 'react'

export default function Loader() {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Start fade out before the loader is removed
    const timer = setTimeout(() => {
      setFadeOut(true)
    }, 4500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0f1a] transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&family=Work+Sans:wght@800&display=swap');

        .loader-container {
          width: 100%;
          text-align: center;
        }

        .loader-greeting {
          color: #94a3b8;
          font-family: 'Fira Code', monospace;
          font-weight: 700;
          font-size: 18px;
          margin: 0 auto;
          text-align: left;
          white-space: nowrap;
          overflow: hidden;
          width: 0;
          max-width: 185px;
          animation: loader-type 1.8s steps(40, end) forwards;
        }

        .loader-name {
          opacity: 0;
          font-family: 'Work Sans', sans-serif;
          margin: 8px auto 0 auto;
          background: linear-gradient(to right, #60a5fa, #3b82f6, #818cf8);
          font-weight: 800;
          font-size: clamp(60px, 12vw, 110px);
          max-width: max-content;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          overflow: hidden;
          animation: loader-shrink 2s steps(40, end) 2s forwards,
            loader-blink 0.5s step-end infinite alternate;
        }

        .loader-subtitle {
          opacity: 0;
          font-family: 'Fira Code', monospace;
          color: #64748b;
          font-size: 14px;
          font-weight: 400;
          margin-top: 16px;
          animation: loader-fade-in 0.6s ease-out 3.8s forwards;
        }

        .loader-dots {
          opacity: 0;
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-top: 32px;
          animation: loader-fade-in 0.4s ease-out 4s forwards;
        }

        .loader-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #3b82f6;
          animation: loader-pulse 1.4s ease-in-out infinite;
        }

        .loader-dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .loader-dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes loader-type {
          0% {
            width: 0;
          }
          1%,
          99% {
            border-right: 2px solid #3b82f6;
          }
          100% {
            width: 185px;
            border-right: none;
          }
        }

        @keyframes loader-shrink {
          0% {
            background-position: 0 0;
            opacity: 0;
            width: 0;
          }
          1% {
            background-position: 0 0;
            opacity: 1;
            border-right: 2px solid #60a5fa;
          }
          50% {
            background-position: 150px 0;
            opacity: 1;
            border-right: 2px solid #60a5fa;
          }
          100% {
            background-position: 400px 0;
            opacity: 1;
            border-right: 2px solid #60a5fa;
          }
        }

        @keyframes loader-blink {
          50% {
            border-color: transparent;
          }
        }

        @keyframes loader-fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes loader-pulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>

      <div className="loader-container px-6">
        <div className="inline-block text-left">
          <h1 className="loader-greeting">Hi, my name is</h1>
          <h1 className="loader-name">Hedi.</h1>
        </div>
        <p className="loader-subtitle">Full-Stack Developer & Big Data Engineer</p>
        <div className="loader-dots">
          <div className="loader-dot" />
          <div className="loader-dot" />
          <div className="loader-dot" />
        </div>
      </div>
    </div>
  )
}