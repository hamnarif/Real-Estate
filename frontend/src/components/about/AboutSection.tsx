"use client";
import styles from "./AboutSection.module.css";
import AboutGrid from "./AboutGrid";
import { useScrollOpacity } from "@/hooks/useScrollOpacity";

export default function AboutSection() {
  const { opacity, elementRef } = useScrollOpacity();

  return (
    <section 
      ref={elementRef}
      id="about" 
      className={styles.section}
      style={{ opacity }}
    >
      <div className={styles.container}>
        <h2 className={styles.heading}>
          <span className={styles.headingGradient}>About ArcHaus</span>
        </h2>
        <AboutGrid />
      </div>
    </section>
  );
}


