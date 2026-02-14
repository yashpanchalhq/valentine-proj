'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './PolaroidGallery.module.css';

interface Photo {
  id: number;
  caption: string;
  color: string;
  emoji: string;
}

export default function PolaroidGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos: Photo[] = [
    { id: 1, caption: "The moment I realized you're the one 💕", color: '#ffe4ec', emoji: '😍' },
    { id: 2, caption: "Your smile that brightens my day ☀️", color: '#fff0f5', emoji: '😊' },
    { id: 3, caption: "Adventures with my favorite person 🗺️", color: '#e6f2ff', emoji: '🎒' },
    { id: 4, caption: "Laughing until our stomachs hurt 😂", color: '#fff9e6', emoji: '🤣' },
    { id: 5, caption: "Quiet moments that mean everything 🌙", color: '#f0fff0', emoji: '💭' },
    { id: 6, caption: "Forever grateful for you 🙏", color: '#fff0ff', emoji: '✨' },
  ];

  return (
    <div className={styles.container}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        📸 Memories with Anu 📸
      </motion.h2>

      <div className={styles.gallery}>
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className={styles.polaroid}
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{
              scale: 1,
              rotate: Math.random() * 20 - 10,
              opacity: 1
            }}
            transition={{
              delay: index * 0.15,
              type: 'spring',
              stiffness: 150
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 10,
              transition: { duration: 0.3 }
            }}
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className={styles.photo} style={{ background: photo.color }}>
              <motion.div
                className={styles.photoEmoji}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                {photo.emoji}
              </motion.div>
              <div className={styles.heartStamp}>💕</div>
            </div>
            <div className={styles.caption}>{photo.caption}</div>
          </motion.div>
        ))}
      </div>

      {selectedPhoto && (
        <motion.div
          className={styles.modal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            className={styles.modalPolaroid}
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1.2, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            transition={{ type: 'tween', duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalPhoto} style={{ background: selectedPhoto.color }}>
              <div className={styles.modalEmoji}>{selectedPhoto.emoji}</div>
            </div>
            <div className={styles.modalCaption}>{selectedPhoto.caption}</div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
