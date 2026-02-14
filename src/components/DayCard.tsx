'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './DayCard.module.css';

interface DayCardProps {
  emoji: string;
  title: string;
  date: string;
  description: string;
  href: string;
  color?: string;
  index?: number;
}

export default function DayCard({ 
  emoji, 
  title, 
  date, 
  description, 
  href,
  index = 0 
}: DayCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        y: -10,
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={href} className={styles.card}>
        <motion.div 
          className={styles.emoji}
          animate={{ 
            rotate: [0, 10, -10, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          {emoji}
        </motion.div>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.date}>{date}</span>
        <p className={styles.description}>{description}</p>
        <motion.div 
          className={styles.arrow}
          whileHover={{ x: 5 }}
        >
          →
        </motion.div>
      </Link>
    </motion.div>
  );
}
