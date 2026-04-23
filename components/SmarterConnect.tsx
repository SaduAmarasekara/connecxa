"use client";

import React from "react";

export default function SmarterConnect() {
  const platforms = [
    {
      name: "Facebook",
      bg: "#1877F2",
      icon: (
        <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <path d="M49 36C49 28.82 43.18 23 36 23C28.82 23 23 28.82 23 36C23 42.49 27.74 47.87 34 48.92V40H31V36H34V33.25C34 30.34 35.77 28.71 38.43 28.71C39.7 28.71 41 28.93 41 28.93V31.79H39.57C38.16 31.79 37.75 32.67 37.75 33.57V36H40.87L40.39 40H37.75V48.92C44.01 47.87 49 42.49 49 36Z" fill="white" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      bg: "#000",
      icon: (
        <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <path d="M47.5 29.5C45.6 29.5 43.87 28.9 42.5 27.87V37.5C42.5 42.47 38.47 46.5 33.5 46.5C28.53 46.5 24.5 42.47 24.5 37.5C24.5 32.53 28.53 28.5 33.5 28.5C33.85 28.5 34.19 28.52 34.52 28.56V33.08C34.19 33.03 33.85 33 33.5 33C31.01 33 29 35.01 29 37.5C29 39.99 31.01 42 33.5 42C35.99 42 38 40.01 38 37.54V25.5H42.5C42.5 27.71 44.79 29.5 47.5 29.5Z" fill="white" />
        </svg>
      ),
    },
    {
      name: "Google Drive",
      bg: "#fff",
      icon: (
        <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <path d="M12 53l8-14h32l-8 14H12z" fill="#0F9D58" />
          <path d="M28 25l8-14 16 28-8 14-16-28z" fill="#4285F4" />
          <path d="M44 25H28l-16 28h16l16-28z" fill="#FBBC05" />
        </svg>
      ),
    },
    {
      name: "Google Reviews",
      bg: "#fff",
      icon: (
        <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <text x="36" y="26" textAnchor="middle" fontSize="11" fontFamily="DM Sans,sans-serif" fontWeight="700" fill="#FBBC05">★★★★★</text>
          <text x="36" y="38" textAnchor="middle" fontSize="9" fontFamily="DM Sans,sans-serif" fill="#888">Google</text>
          <g transform="translate(16,40) scale(0.5)">
            <path d="M46.5 36.5c0-1-.09-1.97-.26-2.9H24v5.49h12.66c-.55 2.97-2.21 5.48-4.71 7.17v5.96h7.63C43.69 48.05 46.5 42.7 46.5 36.5z" fill="#4285F4" />
            <path d="M24 52c6.48 0 11.92-2.15 15.9-5.83l-7.63-5.96C30.23 41.64 27.27 42.5 24 42.5c-6.28 0-11.6-4.24-13.5-9.94H2.6v6.16C6.55 47.79 14.7 52 24 52z" fill="#34A853" />
            <path d="M10.5 32.56A14.58 14.58 0 0 1 9.87 28c0-1.58.27-3.11.63-4.56v-6.16H2.6A23.95 23.95 0 0 0 0 28c0 3.87.93 7.53 2.6 10.72l7.9-6.16z" fill="#FBBC05" />
            <path d="M24 13.5c3.54 0 6.71 1.22 9.21 3.6l6.9-6.9C36.03 6.63 30.58 4 24 4 14.7 4 6.55 8.21 2.6 17.28l7.9 6.16C12.4 17.74 17.72 13.5 24 13.5z" fill="#EA4335" />
          </g>
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      bg: "#000",
      icon: (
        <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <path d="M41.5 31.5L52 21H49L40.2 30.1L33 21H22L33 36.5L22 49H25L34.3 39.3L42 49H53L41.5 31.5ZM35.8 37.4L34.5 35.6L26.1 23H31.5L37 31.2L38.3 33L46.9 46.1H41.5L35.8 37.4Z" fill="white" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      bg: "#25D366",
      icon: (
        <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <path d="M36 18C26.06 18 18 26.06 18 36C18 39.16 18.87 42.12 20.38 44.66L18 54L27.6 51.67C30.08 53.06 32.95 53.86 36 53.86C45.94 53.86 54 45.8 54 35.86C54 25.92 45.94 18 36 18ZM44.5 42.5C44.1 43.6 42.3 44.6 41.1 44.8C40.05 44.99 38.73 45.07 37.29 44.6C36.41 44.32 35.27 43.94 33.81 43.33C29.32 41.41 26.4 37.04 26.17 36.74C25.94 36.44 24.31 34.27 24.31 32.02C24.31 29.77 25.46 28.68 25.88 28.21C26.3 27.74 26.8 27.63 27.1 27.63C27.4 27.63 27.7 27.63 27.96 27.64C28.24 27.65 28.62 27.55 29 28.45C29.41 29.39 30.38 31.64 30.5 31.88C30.63 32.12 30.71 32.4 30.55 32.71C30.39 33.02 30.31 33.22 30.07 33.5C29.83 33.78 29.57 34.12 29.35 34.34C29.11 34.58 28.86 34.84 29.14 35.34C29.42 35.84 30.37 37.37 31.76 38.63C33.55 40.25 35.07 40.77 35.57 41.01C36.07 41.25 36.35 41.21 36.63 40.89C36.91 40.57 37.83 39.49 38.15 38.99C38.47 38.49 38.79 38.57 39.23 38.73C39.67 38.89 41.93 39.98 42.41 40.22C42.89 40.46 43.21 40.58 43.33 40.79C43.46 41.01 43.46 41.97 43.06 43.07L44.5 42.5Z" fill="white" />
        </svg>
      ),
    },
    {
      name: "Calendly",
      bg: "#fff",
      icon: (
        <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <text x="36" y="43" textAnchor="middle" fontSize="13" fontFamily="DM Sans,sans-serif" fontWeight="800" fill="#006BFF">Calendly</text>
          <circle cx="36" cy="25" r="8" stroke="#006BFF" strokeWidth="2.5" fill="none" />
          <path d="M33 22v4l3 2" stroke="#006BFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      bg: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
      icon: (
        <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <rect x="20" y="20" width="32" height="32" rx="9" stroke="white" strokeWidth="2.8" fill="none" />
          <circle cx="36" cy="36" r="8" stroke="white" strokeWidth="2.8" fill="none" />
          <circle cx="46" cy="26" r="2" fill="white" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      bg: "#fff",
      icon: (
        <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <path fillRule="evenodd" clipRule="evenodd" d="M36 16C24.95 16 16 25.17 16 36.48C16 45.55 21.87 53.22 30.05 55.97C31.05 56.16 31.42 55.52 31.42 54.97C31.42 54.48 31.4 52.97 31.4 51.33C26 52.39 24.76 49.07 24.76 49.07C23.86 46.67 22.53 46.05 22.53 46.05C20.7 44.85 22.66 44.85 22.66 44.85C24.69 44.97 25.75 46.94 25.75 46.94C27.55 50.06 30.42 49.14 31.49 48.6C31.67 47.34 32.18 46.47 32.74 45.98C28.39 45.49 23.82 43.76 23.82 36.12C23.82 33.84 24.6 31.97 25.79 30.51C25.59 30.02 24.9 27.9 25.99 25.05C25.99 25.05 27.69 24.52 31.4 27.21C32.97 26.78 34.49 26.57 36 26.57C37.51 26.57 39.03 26.78 40.6 27.21C44.31 24.52 46.01 25.05 46.01 25.05C47.1 27.9 46.41 30.02 46.21 30.51C47.41 31.97 48.18 33.84 48.18 36.12C48.18 43.78 43.6 45.47 39.24 45.98C39.96 46.6 40.6 47.8 40.6 49.69C40.6 52.38 40.57 54.54 40.57 54.97C40.57 55.52 40.95 56.16 41.96 55.97C50.13 53.22 56 45.55 56 36.48C56 25.17 47.05 16 36 16Z" fill="#111" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      bg: "#0A66C2",
      icon: (
        <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <path d="M24 30H29V48H24V30ZM26.5 22C24.57 22 23 23.57 23 25.5C23 27.43 24.57 29 26.5 29C28.43 29 30 27.43 30 25.5C30 23.57 28.43 22 26.5 22ZM49 48H44V39.25C44 36.52 43.33 34.5 40.5 34.5C37.76 34.5 37 36.35 37 38.75V48H32V30H37V32.43C37.98 30.82 39.89 30 42 30C45.87 30 49 32.68 49 37.75V48Z" fill="white" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      bg: "#FF0000",
      icon: (
        <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <path d="M52 28.5C52 28.5 51.5 25.5 50.2 24.1C48.6 22.4 46.8 22.4 46 22.3C41 22 34 22 34 22H33C33 22 26 22 21 22.3C20.2 22.4 18.4 22.4 16.8 24.1C15.5 25.5 15 28.5 15 28.5S14.5 32.1 14.5 35.7V39.1C14.5 42.7 15 46.3 15 46.3C15 46.3 15.5 49.3 16.8 50.7C18.4 52.4 20.5 52.3 21.4 52.5C25 52.8 34.5 52.9 34.5 52.9C34.5 52.9 41.5 52.9 46.5 52.5C47.3 52.4 49.1 52.4 50.7 50.7C52 49.3 52.5 46.3 52.5 46.3S53 42.7 53 39.1V35.7C52.5 32.1 52 28.5 52 28.5ZM30.5 42.5V28.5L43 35.5L30.5 42.5Z" fill="white" />
        </svg>
      ),
    },
    {
      name: "Telegram",
      bg: "#29B6F6",
      icon: (
        <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <path d="M53 21L45.5 53C45.5 53 44.5 55.5 41.8 54.3L28.7 44.2L24 41.9L15 39C15 39 13.5 38.5 13.5 37.1C13.5 36 15.1 35.4 15.1 35.4L50.5 21.5C50.5 21.5 53 20.5 53 21Z" fill="white" />
          <path d="M27.8 52.7C27.8 52.7 27.4 52.6 27 51.8L24 41.9L45.5 29C45.5 29 46.8 28.2 46.7 29C46.7 29 47 29.2 46 30.1L28.7 44.2L27.8 52.7Z" fill="#B0BEC5" />
        </svg>
      ),
    },
    {
      name: "Spotify",
      bg: "#1DB954",
      icon: (
        <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <path d="M36 16C25 16 16 25 16 36C16 47 25 56 36 56C47 56 56 47 56 36C56 25 47 16 36 16ZM47.5 39.7C43.2 37.1 37.3 36.2 32 37.6C31.1 37.8 30.5 37.3 30.3 36.5C30.1 35.7 30.6 35 31.5 34.8C37.5 33.2 44.2 34.2 49.2 37.2C50 37.7 50.3 38.7 49.8 39.5C49.3 40.2 48.3 40.4 47.5 39.7ZM47.3 33.7C43.2 31.2 36.8 30.2 31 31.8C30 32.1 29.2 31.5 29 30.5C28.8 29.5 29.4 28.7 30.4 28.5C37.1 26.7 44.3 27.8 49.1 30.7C50 31.2 50.3 32.4 49.8 33.3C49.3 34.2 48.1 34.3 47.3 33.7ZM50 27.8C45.2 25 37.3 24.5 30.8 26.3C29.6 26.6 28.7 25.9 28.3 24.8C28 23.7 28.7 22.8 29.8 22.5C37.2 20.4 46 21 51.7 24.4C52.8 25 53.1 26.4 52.5 27.4C51.9 28.4 50.9 28.4 50 27.8Z" fill="white" />
        </svg>
      ),
    },
    {
      name: "Slack",
      bg: "#fff",
      icon: (
        <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <path d="M27.5 36.5C27.5 38.43 26.18 40 24.5 40C22.82 40 21.5 38.43 21.5 36.5C21.5 34.57 22.82 33 24.5 33H27.5V36.5Z" fill="#E01E5A" />
          <path d="M29 36.5C29 34.57 30.32 33 32 33C33.68 33 35 34.57 35 36.5V47.5C35 49.43 33.68 51 32 51C30.32 51 29 49.43 29 47.5V36.5Z" fill="#E01E5A" />
          <path d="M32 28.5C30.07 28.5 28.5 27.18 28.5 25.5C28.5 23.82 30.07 22.5 32 22.5C33.93 22.5 35.5 23.82 35.5 25.5V28.5H32Z" fill="#36C5F0" />
          <path d="M32 30C33.93 30 35.5 31.32 35.5 33C35.5 34.68 33.93 36 32 36H21C19.07 36 17.5 34.68 17.5 33C17.5 31.32 19.07 30 21 30H32Z" fill="#36C5F0" />
          <path d="M40.5 33C42.43 33 44 34.32 44 36C44 37.68 42.43 39 40.5 39C38.57 39 37 37.68 37 36V33H40.5Z" fill="#2EB67D" />
          <path d="M39 33C39 34.93 37.68 36.5 36 36.5C34.32 36.5 33 34.93 33 33V22C33 20.07 34.32 18.5 36 18.5C37.68 18.5 39 20.07 39 22V33Z" fill="#2EB67D" />
          <path d="M36 41.5C37.93 41.5 39.5 42.82 39.5 44.5C39.5 46.18 37.93 47.5 36 47.5C34.07 47.5 32.5 46.18 32.5 44.5V41.5H36Z" fill="#ECB22E" />
          <path d="M36 40C34.07 40 32.5 38.68 32.5 37C32.5 35.32 34.07 34 36 34H47C48.93 34 50.5 35.32 50.5 37C50.5 38.68 48.93 40 47 40H36Z" fill="#ECB22E" />
        </svg>
      ),
    },
    {
      name: "Discord",
      bg: "#5865F2",
      icon: (
        <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <path d="M48.5 23.5C46.3 22.5 44 21.8 41.5 21.5C41.2 22.1 40.9 22.9 40.6 23.5C38 23.2 35.4 23.2 33 23.5C32.7 22.9 32.3 22.1 32 21.5C29.5 21.8 27.2 22.5 25 23.5C20.5 30 19.2 36.3 19.8 42.5C22.7 44.6 25.5 45.9 28.2 46.8C28.9 45.8 29.5 44.7 30 43.6C28.9 43.2 27.9 42.6 26.9 42C27.2 41.8 27.4 41.6 27.7 41.4C33.6 44.2 40 44.2 45.8 41.4C46.1 41.6 46.3 41.8 46.6 42C45.6 42.6 44.6 43.2 43.5 43.6C44 44.7 44.6 45.8 45.3 46.8C48 45.9 50.9 44.6 53.7 42.5C54.4 35.4 52.6 29.1 48.5 23.5ZM30.5 39C28.9 39 27.5 37.4 27.5 35.5C27.5 33.6 28.8 32 30.5 32C32.2 32 33.6 33.6 33.5 35.5C33.5 37.4 32.2 39 30.5 39ZM41.5 39C39.9 39 38.5 37.4 38.5 35.5C38.5 33.6 39.8 32 41.5 32C43.2 32 44.6 33.6 44.5 35.5C44.5 37.4 43.2 39 41.5 39Z" fill="white" />
        </svg>
      ),
    },
    {
      name: "Pinterest",
      bg: "#E60023",
      icon: (
        <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <path d="M36 16C25 16 16 25 16 36C16 44.6 21.4 51.9 29 54.6C28.8 53.4 28.7 51.5 29 50.1L31.5 40C31.5 40 30.8 38.6 30.8 36.6C30.8 33.4 32.6 31 34.9 31C36.8 31 37.8 32.4 37.8 34.2C37.8 36.2 36.5 39.1 35.8 41.8C35.2 44.1 36.8 46 39 46C43.1 46 46.2 41.5 46.2 35.1C46.2 29.5 42.3 25.7 36.1 25.7C29 25.7 24.8 31 24.8 36.5C24.8 38.5 25.6 40.7 26.6 41.8C26.8 42 26.8 42.2 26.7 42.5L26 45.4C25.9 45.8 25.6 45.9 25.2 45.7C22.3 44.3 20.5 39.9 20.5 36.4C20.5 28.7 26.1 21.6 36.7 21.6C45.3 21.6 52 27.8 52 35.9C52 44.3 46.8 51 39.4 51C37.1 51 35 49.8 34.2 48.5L32.6 54.4C32 56.8 30.3 59.7 29.2 61.5C31.4 62.1 33.7 62.5 36 62.5C47 62.5 56 53.5 56 42.5C56 31.5 47 22.5 36 22.5V16Z" fill="white" />
        </svg>
      ),
    },
    {
      name: "Zoom",
      bg: "#2D8CFF",
      icon: (
        <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <path d="M20 28C20 26.34 21.34 25 23 25H43C44.66 25 46 26.34 46 28V40C46 41.66 44.66 43 43 43H23C21.34 43 20 41.66 20 40V28ZM48 29.5L54 25V43L48 38.5V29.5Z" fill="white" />
        </svg>
      ),
    },
    {
      name: "PayPal",
      bg: "#fff",
      icon: (
        <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <path d="M47.5 22.5C47.5 22.5 49 29 44 32C40.5 34.2 37 34 33 34L31 44H27L24 22.5H36C40 22.5 47.5 22.5 47.5 22.5Z" fill="#009CDE" />
          <path d="M45 30C45 30 46.5 36.5 41.5 39.5C38 41.7 34.5 41.5 30.5 41.5L28.5 51.5H24.5L27 30H39C43 30 45 30 45 30Z" fill="#003087" />
        </svg>
      ),
    },
  ];

  // Duplicate for seamless loop
  const doubled = [...platforms, ...platforms];

  return (
    <section
      className="w-full py-20 overflow-hidden"
      style={{ background: "#1a2e35" }}
    >
      {/* Heading */}
      <div className="text-center mb-14 px-6">
        <h2
          className="text-5xl font-black text-white mb-4 leading-tight"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          The Smarter Way to Connect 🤝
        </h2>
        <p
          className="text-lg text-white/60 font-normal"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Power up your digital business card with your favourite platforms
        </p>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Fade left */}
        <div
          className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: 120,
            background: "linear-gradient(to right, #1a2e35, transparent)",
          }}
        />
        {/* Fade right */}
        <div
          className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: 120,
            background: "linear-gradient(to left, #1a2e35, transparent)",
          }}
        />

        <div
          className="flex gap-5 w-max"
          style={{
            animation: "marquee 40s linear infinite",
          }}
        >
          {doubled.map((platform, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-36 h-36 rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all duration-200 hover:-translate-y-2 hover:shadow-2xl group relative"
              style={{ background: platform.bg }}
              title={platform.name}
            >
              {platform.icon}
              {/* Tooltip */}
              <span
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {platform.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
