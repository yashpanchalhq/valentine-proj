'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styles from './MemoryCapsule.module.css';

interface Memory {
  title: string;
  content: string;
  emoji: string;
  color: string;
}

interface MemoryCapsuleProps {
  memories: Memory[];
}

export default function MemoryCapsule({ memories }: MemoryCapsuleProps) {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>💭 Special Memories with Anu 💭</h2>

      <div className={styles.grid}>
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            className={styles.capsule}
            style={{ background: memory.color }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedMemory(memory)}
          >
            <div className={styles.emoji}>{memory.emoji}</div>
            <h3>{memory.title}</h3>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0, rotateY: -180 }}
              transition={{ type: 'spring', stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalEmoji}>{selectedMemory.emoji}</div>
              <h2>{selectedMemory.title}</h2>
              <p>{selectedMemory.content}</p>
              <button
                className={styles.closeBtn}
                onClick={() => setSelectedMemory(null)}
              >
                Close 💕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
