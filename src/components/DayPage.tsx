'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './DayPage.module.css';

interface DayPageProps {
  emoji: string;
  title: string;
  date: string;
  message: string;
  poem: string[];
  gradient: string;
  prevDay?: { name: string; href: string; emoji: string };
  nextDay?: { name: string; href: string; emoji: string };
}

export default function DayPage({
  emoji,
  title,
  date,
  message,
  poem,
  gradient,
  prevDay,
  nextDay,
}: DayPageProps) {
  return (
    <div className={styles.page} style={{ background: gradient }}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Main Card */}
        <motion.div 
          className={styles.card}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
        >
          <motion.div
            className={styles.emoji}
            animate={{ 
              scale: [1, 1.1, 1],
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
          
          <h1 className={styles.title}>Happy {title}!</h1>
          <span className={styles.date}>{date}</span>
          
          <p className={styles.message}>{message}</p>
          
          <div className={styles.poem}>
            {poem.map((line, index) => (
              <motion.p
                key={index}
                className={styles.poemLine}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {line}
              </motion.p>
            ))}
          </div>
          
          <motion.div 
            className={styles.hearts}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            💕✨💕
          </motion.div>
        </motion.div>
        
        {/* Navigation */}
        <div className={styles.navigation}>
          {prevDay ? (
            <Link href={prevDay.href} className={styles.navLink}>
              <span className={styles.navEmoji}>{prevDay.emoji}</span>
              <span className={styles.navText}>← {prevDay.name}</span>
            </Link>
          ) : (
            <Link href="/" className={styles.navLink}>
              <span className={styles.navEmoji}>🏠</span>
              <span className={styles.navText}>← Home</span>
            </Link>
          )}
          
          {nextDay ? (
            <Link href={nextDay.href} className={styles.navLink}>
              <span className={styles.navText}>{nextDay.name} →</span>
              <span className={styles.navEmoji}>{nextDay.emoji}</span>
            </Link>
          ) : (
            <Link href="/" className={styles.navLink}>
              <span className={styles.navText}>Home →</span>
              <span className={styles.navEmoji}>🏠</span>
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
}
