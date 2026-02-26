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

    const handleDragEnd = (event, info) => {
        if (info.offset.x < -50) {
            next();
        } else if (info.offset.x > 50) {
            prev();
        }
    };

    if (count <= 1) return <div className={styles.singleItem}>{children}</div>;

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.slideWrapper}>
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95, x: 100 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95, x: -100 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={handleDragEnd}
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
