'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ContentCarousel.module.css';

const ContentCarousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const count = Array.isArray(children) ? children.length : 1;

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % count);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + count) % count);
    };

    if (count <= 1) return <div className={styles.singleItem}>{children}</div>;

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.slideWrapper}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className={styles.slide}
                    >
                        {children[currentIndex]}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className={styles.controls}>
                <button onClick={prev} className={styles.btn} aria-label="Previous slide">
                    <ChevronLeft size={24} />
                </button>
                <div className={styles.dots}>
                    {Array.from({ length: count }).map((_, i) => (
                        <div
                            key={i}
                            className={`${styles.dot} ${currentIndex === i ? styles.dotActive : ''}`}
                            onClick={() => setCurrentIndex(i)}
                        />
                    ))}
                </div>
                <button onClick={next} className={styles.btn} aria-label="Next slide">
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default ContentCarousel;
