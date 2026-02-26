'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';

const images = [
    '/images/hero_factory_main.png',
    '/images/factory_sparks.jpg',
    '/images/continuous_casting_new.png',
    '/images/partners_hero.jpg'
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.sliderBg}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        className={styles.bgImage}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        style={{ backgroundImage: `url(${images[currentIndex]})` }}
                    />
                </AnimatePresence>
            </div>

            <div className={styles.overlay}></div>

            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className={styles.title}>
                            <span className={styles.titleTop}>A LEGACY OF</span>
                            <span className={styles.titleMain}>TRUST</span>
                        </h1>
                        <h2 className={styles.subtitle}>
                            <span className={styles.subtitleTop}>A PROMISE OF</span>
                            <span className={styles.subtitleMain}>STRENGTH</span>
                        </h2>

                        <div className={styles.ctaGroup}>
                            <Link href="/contact" className="btn">
                                Get a Quote
                            </Link>
                            <Link href="/products" className={styles.outlineBtn}>
                                View Products
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
