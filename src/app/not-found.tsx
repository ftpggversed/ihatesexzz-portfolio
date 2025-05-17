// app/not-found.tsx
'use client';

import './globals.css';
import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaDiscord, FaTiktok } from 'react-icons/fa';

const NotFoundPage: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen(o => !o);

  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <Link href="/" className="logo">IHateSex</Link>

          <nav className="nav">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="#services" className="nav-link">Services</Link>
            <Link href="#contact" className="nav-link">Contact</Link>
          </nav>

          <div className="actions">
            <button onClick={toggleTheme} className="theme-switcher" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={toggleMobile} className="mobile-menu-button" aria-label="Toggle menu">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <nav className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
          <Link href="/" className="nav-link" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="#services" className="nav-link" onClick={() => setMobileOpen(false)}>Services</Link>
          <Link href="#contact" className="nav-link" onClick={() => setMobileOpen(false)}>Contact</Link>
        </nav>
      </header>

      {/* 404 Hero */}
      <section className="hero">
        {/* Bouncing Dog Emoji */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          style={{ fontSize: '3rem', marginBottom: '1rem' }}
        >
          🐕
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          404
        </motion.h1>
        <motion.p
          className="tagline-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Oops! This page scampered away 🐾
        </motion.p>
        <Link href="/" className="cta-button">Back to Home</Link>
      </section>

      {/* Footer-style Contact */}
      <section id="contact" className="contact">
        <h2 className="section-title">Reach Out</h2>
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
        <p className="footer-note">© 2025 IHateSex. All paws on deck!</p>
      </section>
    </div>
  );
};

export default NotFoundPage;
