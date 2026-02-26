'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ImageSlider.module.css';

const ImageSlider = ({ images, interval = 4000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(timer);
    }, [images, interval]);

    if (!images || images.length === 0) return null;

    return (
        <div className={styles.sliderContainer}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    className={styles.slide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex}`}
                        fill
                        className={styles.image}
                        style={{ objectFit: 'cover' }}
                    />
                </motion.div>
            </AnimatePresence>

            {images.length > 1 && (
                <div className={styles.dots}>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${currentIndex === index ? styles.dotActive : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageSlider;
