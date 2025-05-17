'use client';

import './globals.css';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { FaDiscord, FaTiktok } from 'react-icons/fa';

// Define your service tabs as a tuple for proper typing
const services = ['Commissions', 'Design', 'Concepts'] as const;
type Service = typeof services[number];

export default function PortfolioPage() {
  // Hero tagline carousel
  const taglines = ['Illustration', 'Character Design', 'Concept Art', 'Commissions'];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setIdx(i => (i + 1) % taglines.length), 3000);
    return () => clearInterval(iv);
  }, []);

  // Theme toggle
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  // Track which tab is active (for styling)
  const [activeTab, setActiveTab] = useState<Service | null>(null);

  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <Link href="#home" className="logo">IHateSexzz</Link>
          <nav className="nav">
            <Link href="#portfolio" className="nav-link">Portfolio</Link>
            <Link href="#services" className="nav-link">Services</Link>
            <Link href="#contact" className="nav-link">Contact</Link>
          </nav>
          <div className="actions">
            <button onClick={toggleTheme} className="theme-switcher" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          IHateSexzz
        </motion.h1>
        <div className="tagline">
          <AnimatePresence mode="wait">
            <motion.p
              key={idx}
              className="tagline-text"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
            >
              {taglines[idx]}
            </motion.p>
          </AnimatePresence>
        </div>
        <Link href="#portfolio" className="cta-button">View Portfolio</Link>
      </section>

      {/* Portfolio Cards */}
      <section id="portfolio" className="projects">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2 className="section-title">Services</h2>

        {/* Tab Buttons */}
        <div className="service-tabs">
          {services.map((s) => (
            <button
              key={s}
              onClick={() => setActiveTab(s)}
              className={`tab-button ${activeTab === s ? 'active' : ''}`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Always render 6 square placeholders */}
        <div className="services-grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="service-placeholder" />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2 className="section-title">Contact</h2>
        <p className="contact-text">
          Email: <a href="mailto:artist@example.com">artist@example.com</a>
        </p>
        <div className="socials">
          <Link href="https://discord.gg/your-discord" target="_blank" className="social-link">
            <FaDiscord size={24} /> Discord
          </Link>
          <Link href="https://www.tiktok.com/@yourhandle" target="_blank" className="social-link">
            <FaTiktok size={24} /> TikTok
          </Link>
        </div>
        <p className="toyhouse">
          Profile available on <a href="https://toyhou.se/yourusername" target="_blank">Toyhou.se</a>
        </p>
      </section>
    </div>
  );
}
