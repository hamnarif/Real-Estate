"use client";
import styles from "./Header.module.css";
import { motion } from "framer-motion";
import { driftFromLeft, driftFromRight, driftFromBottom } from "@/lib/motion";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.heroInner}>
        <motion.h1 variants={driftFromLeft(0, 3.2)} initial="hidden" animate="show" className={styles.title}>Search over 500,000 new listings every month</motion.h1>
        <motion.div variants={driftFromBottom(0.8, 2.8)} initial="hidden" animate="show" className={styles.tabbar}>
          <button className={styles.tabActive}>Buy</button>
          <button className={styles.tab}>Rent</button>
          <button className={styles.tab}>Sell</button>
          <button className={styles.tab}>Pre-approval</button>
          <button className={styles.tab}>Just sold</button>
          <button className={styles.tab}>Home value</button>
        </motion.div>
        <motion.form variants={driftFromRight(1.6, 2.8)} initial="hidden" animate="show" className={styles.search} action="/search">
          <input name="q" placeholder="Address, School, City, Zip or Neighborhood" aria-label="Search" />
          <button aria-label="Search" className={styles.iconButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </motion.form>
      </div>
    </header>
  );
}


