'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

const days = [
  { emoji: '🌹', path: '/rose-day', label: 'Rose' },
  { emoji: '💝', path: '/propose-day', label: 'Propose' },
  { emoji: '🍫', path: '/chocolate-day', label: 'Chocolate' },
  { emoji: '🧸', path: '/teddy-day', label: 'Teddy' },
  { emoji: '🤞', path: '/promise-day', label: 'Promise' },
  { emoji: '🤗', path: '/hug-day', label: 'Hug' },
  { emoji: '💋', path: '/kiss-day', label: 'Kiss' },
  { emoji: '💕', path: '/valentines-day', label: 'Valentine' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <motion.nav 
      className={styles.nav}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
    >
      <Link href="/" className={styles.logo}>
        <span className={styles.logoEmoji}>💕</span>
        <span className={styles.logoText}>Valentine Week</span>
      </Link>
      
      <div className={styles.days}>
        {days.map((day, index) => {
          const isActive = pathname === day.path;
          return (
            <motion.div
              key={day.path}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + index * 0.05, type: 'spring' }}
            >
              <Link
                href={day.path}
                className={`${styles.dayLink} ${isActive ? styles.active : ''}`}
                title={`${day.label} Day`}
              >
                <motion.span
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {day.emoji}
                </motion.span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.nav>
  );
}
