"use client";
import PropertyCard from '../PropertyCard/PropertyCard';
import styles from './PropertyGrid.module.css';
import { motion, Variants } from 'framer-motion';

type Item = { 
  id: string; 
  title: string; 
  price: string; 
  imageUrl?: string;
  bedrooms?: number;
  bathrooms?: number;
  sqft?: number;
  address?: string;
};
type PropertyGridProps = { items: Item[] };

export default function PropertyGrid({ items }: PropertyGridProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className={styles.propertyGrid}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-100px" }}
    >
      {items.map((item, index) => (
        <motion.div key={item.id} variants={itemVariants}>
          <PropertyCard 
            title={item.title} 
            price={item.price} 
            imageUrl={item.imageUrl}
            bedrooms={item.bedrooms}
            bathrooms={item.bathrooms}
            sqft={item.sqft}
            address={item.address}
            index={index}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}


