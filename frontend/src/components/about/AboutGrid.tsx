"use client";
import styles from "./AboutGrid.module.css";
import { useScrollOpacity } from "@/hooks/useScrollOpacity";
import { motion, Variants } from "framer-motion";

export default function AboutGrid() {
  const { opacity: opacity1, elementRef: ref1 } = useScrollOpacity<HTMLDivElement>();
  const { opacity: opacity2, elementRef: ref2 } = useScrollOpacity<HTMLDivElement>();
  const { opacity: opacity3, elementRef: ref3 } = useScrollOpacity<HTMLDivElement>();

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 35, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 1.4, 
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={styles.aboutGrid}>
      <motion.div 
        ref={ref1}
        className={styles.gridItem}
        style={{ opacity: opacity1 }}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
      >
        <h3>Company Overview</h3>
        <p>Helping you buy, sell, or rent with confidence. We are an Ontario-based real estate firm serving Toronto, Mississauga, Brampton, Ottawa, and beyond. We provide trusted guidance tailored to your needs.</p>
      </motion.div>
      
      <motion.div 
        ref={ref2}
        className={`${styles.gridItem} ${styles.alignRight}`}
        style={{ opacity: opacity2 }}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
      >
        <h3>Our Commitment</h3>
        <p>Your goals, your budget, your voice — we listen first. We take the time to understand each client's priorities and financial plans. Our commitment is to make every transaction seamless, transparent, and stress-free.</p>
      </motion.div>
      
      <motion.div 
        ref={ref3}
        className={styles.gridItem}
        style={{ opacity: opacity3 }}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
      >
        <h3>The Advantage of Working With Us</h3>
        <p>Personalized service backed by local expertise. By combining deep market knowledge with strong industry connections, we ensure our clients get the best possible outcomes with dedicated support.</p>
      </motion.div>
    </div>
  );
}


