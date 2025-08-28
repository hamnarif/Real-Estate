"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { driftFromLeft, driftFromRight, fadeIn, staggerSlow } from "@/lib/motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Smooth scroll-state only for glass background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <motion.div variants={driftFromLeft(0, 3.2)} initial="hidden" animate="show" className={styles.brand}>ArcHaus Real Estate</motion.div>
      
      {/* Desktop Menu */}
      <motion.ul variants={staggerSlow} initial="hidden" animate="show" className={`${styles.navlist} ${styles.center} ${styles.desktopMenu}`}>
        <motion.li variants={fadeIn(0.2)}><a href="/#about" onClick={handleAboutClick}>About</a></motion.li>
        <motion.li variants={fadeIn(0.2)}><Link href="/buy">Buy</Link></motion.li>
        <motion.li variants={fadeIn(0.2)}><Link href="/sell">Sell</Link></motion.li>
        <motion.li variants={fadeIn(0.2)}><Link href="/buy-sell">Buy &amp; Sell</Link></motion.li>
        <motion.li variants={fadeIn(0.2)}><Link href="/rent">Rent</Link></motion.li>
        <motion.li variants={fadeIn(0.2)}><Link href="/search">Property Search</Link></motion.li>
      </motion.ul>

      {/* Mobile Hamburger */}
      <motion.button 
        className={styles.hamburger}
        onClick={toggleMenu}
        variants={driftFromRight(0.4, 3.2)} 
        initial="hidden" 
        animate="show"
      >
        <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
        <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
      </motion.button>

      <motion.a variants={driftFromRight(0.4, 3.2)} initial="hidden" animate="show" className={styles.cta} href="/contact">Contact us</motion.a>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.ul 
              className={styles.mobileNavlist}
              initial="hidden"
              animate="show"
              variants={staggerSlow}
            >
              <motion.li variants={fadeIn(0.1)}><a href="/#about" onClick={handleAboutClick}>About</a></motion.li>
              <motion.li variants={fadeIn(0.1)}><Link href="/buy" onClick={() => setIsMenuOpen(false)}>Buy</Link></motion.li>
              <motion.li variants={fadeIn(0.1)}><Link href="/sell" onClick={() => setIsMenuOpen(false)}>Sell</Link></motion.li>
              <motion.li variants={fadeIn(0.1)}><Link href="/buy-sell" onClick={() => setIsMenuOpen(false)}>Buy &amp; Sell</Link></motion.li>
              <motion.li variants={fadeIn(0.1)}><Link href="/rent" onClick={() => setIsMenuOpen(false)}>Rent</Link></motion.li>
              <motion.li variants={fadeIn(0.1)}><Link href="/search" onClick={() => setIsMenuOpen(false)}>Property Search</Link></motion.li>
              <motion.li variants={fadeIn(0.1)}><a href="/contact" className={styles.mobileCta} onClick={() => setIsMenuOpen(false)}>Contact us</a></motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


