'use client';

import { motion } from 'framer-motion';
import DayCard from '@/components/DayCard';
import CountdownTimer from '@/components/CountdownTimer';
import ParticleText from '@/components/ParticleText';
import MemoryCapsule from '@/components/MemoryCapsule';
import SecretMessage from '@/components/SecretMessage';
import ReasonCounter from '@/components/ReasonCounter';
import PolaroidGallery from '@/components/PolaroidGallery';
import styles from './page.module.css';

const valentineWeek = [
  {
    emoji: '🌹',
    title: 'Rose Day',
    date: 'February 7',
    description: 'Express your love with beautiful roses',
    href: '/rose-day',
  },
  {
    emoji: '💝',
    title: 'Propose Day',
    date: 'February 8',
    description: 'The perfect day to express your feelings',
    href: '/propose-day',
  },
  {
    emoji: '🍫',
    title: 'Chocolate Day',
    date: 'February 9',
    description: 'Sweeten your love with chocolates',
    href: '/chocolate-day',
  },
  {
    emoji: '🧸',
    title: 'Teddy Day',
    date: 'February 10',
    description: 'Gift a cuddly companion',
    href: '/teddy-day',
  },
  {
    emoji: '🤞',
    title: 'Promise Day',
    date: 'February 11',
    description: 'Make promises that last forever',
    href: '/promise-day',
  },
  {
    emoji: '🤗',
    title: 'Hug Day',
    date: 'February 12',
    description: 'Embrace with warm, loving hugs',
    href: '/hug-day',
  },
  {
    emoji: '💋',
    title: 'Kiss Day',
    date: 'February 13',
    description: 'Seal your love with a kiss',
    href: '/kiss-day',
  },
  {
    emoji: '💕',
    title: "Valentine's Day",
    date: 'February 14',
    description: 'Celebrate your love story',
    href: '/valentines-day',
  },
];

const memories = [
  {
    title: "First Smile",
    content: "The first time I saw your smile, I knew my life would never be the same. It's the most beautiful sight in the world.",
    emoji: "😊",
    color: "linear-gradient(135deg, #fff0f5, #ffe4ec)"
  },
  {
    title: "Midnight Talks",
    content: "Those late-night conversations where time just disappears. I could talk to you forever and never get bored.",
    emoji: "🌙",
    color: "linear-gradient(135deg, #e6f2ff, #cce5ff)"
  },
  {
    title: "Your Laugh",
    content: "Your laughter is my favorite sound in the entire universe. It makes everything better instantly.",
    emoji: "😄",
    color: "linear-gradient(135deg, #fff9e6, #ffecb3)"
  },
  {
    title: "Inside Jokes",
    content: "All our silly inside jokes that no one else understands. They're our little secret language of love.",
    emoji: "🤭",
    color: "linear-gradient(135deg, #f0fff0, #d4f1d4)"
  },
  {
    title: "Random Adventures",
    content: "Every adventure with you, no matter how small, becomes an unforgettable memory.",
    emoji: "🗺️",
    color: "linear-gradient(135deg, #fff0ff, #f5e6ff)"
  },
  {
    title: "Your Kindness",
    content: "The way you care for everyone around you inspires me every single day. You have the most beautiful heart.",
    emoji: "💝",
    color: "linear-gradient(135deg, #ffe6e6, #ffcccc)"
  }
];

export default function Home() {
  return (
    <div className={styles.page}>
      {/* 3D Animated Name Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ padding: '4rem 0', marginTop: '2rem' }}
      >
        <ParticleText text="Annu🍒" />
      </motion.section>

      {/* Hero Section */}
      <motion.section 
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className={styles.heroEmoji}
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          💕
        </motion.div>
        
        <motion.h1
          className={styles.title}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Happy Valentine Week
          <br />
          <span className={styles.subtitle}>Annu🍒 💕</span>
        </motion.h1>
        
        <motion.p
          className={styles.message}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          ✨ Every moment with Annu is special, but this week is pure magic ✨
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <CountdownTimer />
        </motion.div>
      </motion.section>

      {/* Days Grid */}
      <section className={styles.daysSection}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ✨ Celebrate Each Day of Love ✨
        </motion.h2>
        
        <div className={styles.grid}>
          {valentineWeek.map((day, index) => (
            <DayCard
              key={day.href}
              {...day}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Reason Counter */}
      <ReasonCounter />

      {/* Memory Capsules */}
      <MemoryCapsule memories={memories} />

      {/* Polaroid Gallery */}
      <PolaroidGallery />

      {/* Secret Message */}
      <SecretMessage />

      {/* Love Letter Section */}
      <motion.section 
        className={styles.letterSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.letter}>
          <h3 className={styles.letterTitle}>💌 A Letter For Annu 💌</h3>
          <p className={styles.letterContent}>
            Dear Annu🍒,
            <br /><br />
            Every moment with you feels like a beautiful dream I never want to wake up from.
            Your smile lights up my entire world, and your laughter is the sweetest sound I've ever heard.
            You make ordinary days extraordinary just by being in them.
            <br /><br />
            This Valentine Week is dedicated to celebrating YOU and all the joy you bring into my life.
            You're not just my Valentine - you're my best friend, my inspiration, and my forever person.
            <br /><br />
            <span className={styles.signature}>Forever Yours, Always ❤️</span>
          </p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>Made with 💕 and endless love for Annu🍒</p>
        <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem' }}>
          ✨ You deserve all the happiness in the world ✨
        </p>
      </footer>
    </div>
  );
}
