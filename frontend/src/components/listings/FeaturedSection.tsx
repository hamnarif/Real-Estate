"use client";
import styles from './FeaturedSection.module.css';
import { PropertyGrid } from './PropertyGrid';
import { useScrollOpacity } from '@/hooks/useScrollOpacity';
import type { Listing } from '@/services/listingService';

type Props = { items: Listing[] };

export default function FeaturedSection({ items }: Props) {
  const { opacity, elementRef } = useScrollOpacity();

  return (
    <section 
      ref={elementRef}
      className={styles.section}
      style={{ opacity }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.title}>Featured Listings</h3>
          <a className={styles.link} href="/listings">View all →</a>
        </div>
        <PropertyGrid items={items} />
      </div>
    </section>
  );
}


