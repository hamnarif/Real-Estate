import styles from './PropertyCard.module.css';
import { motion } from 'framer-motion';

type PropertyCardProps = {
  title: string;
  price: string;
  imageUrl?: string;
  bedrooms?: number;
  bathrooms?: number;
  sqft?: number;
  address?: string;
  index?: number;
};

export default function PropertyCard({ 
  title, 
  price, 
  imageUrl, 
  bedrooms = 3, 
  bathrooms = 2, 
  sqft = 1800,
  address = "Toronto, ON",
  index = 0
}: PropertyCardProps) {
  const getImageHeight = () => {
    switch(index) {
      case 0: return '360px';
      case 1: return '280px';
      case 2: return '400px';
      case 3: return '320px';
      default: return '320px';
    }
  };

  return (
    <motion.article 
      className={styles.propertyCard}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {imageUrl && <img src={imageUrl} alt={title} style={{ height: getImageHeight() }} />}
      <div className={styles.propertyInfo}>
        <h3>{title}</h3>
        <p className={styles.address}>{address}</p>
        <div className={styles.propertyDetails}>
          <span className={styles.detail}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9,22 9,12 15,12 15,22"/>
            </svg>
            {bedrooms} bed
          </span>
          <span className={styles.detail}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <path d="M4 8h16"/>
              <path d="M8 12h8"/>
            </svg>
            {bathrooms} bath
          </span>
          <span className={styles.detail}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <path d="M9 9h.01"/>
              <path d="M15 9h.01"/>
              <path d="M9 15h.01"/>
              <path d="M15 15h.01"/>
            </svg>
            {sqft.toLocaleString()} sqft
          </span>
        </div>
        <p className={styles.price}>{price}</p>
      </div>
    </motion.article>
  );
}


