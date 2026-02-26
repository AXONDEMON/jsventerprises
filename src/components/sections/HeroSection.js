'use client';

import { motion } from 'framer-motion';
import styles from '../Hero.module.css';
import Link from 'next/link';

const HeroSection = ({ active }) => {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={`container ${styles.container}`}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: -50 }}
                    animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
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
        </section>
    );
};

export default HeroSection;
