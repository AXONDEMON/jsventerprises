'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.sliderBg}>
                <div
                    className={styles.bgImage}
                    style={{ backgroundImage: "url('/images/header_banner_official.png')" }}
                />
            </div>

            <div className={styles.overlay}></div>

            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.ctaGroup}>
                            <Link href="/contact" className={`btn ${styles.heroBtn}`}>
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
