'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../../app/page.module.css';
import Link from 'next/link';

const AboutSection = ({ active }) => {
    return (
        <div className={styles.sliderSection}>
            <div className="container">
                <div className={styles.introLayout}>
                    <motion.div
                        className={styles.introContent}
                        initial={{ opacity: 0, y: 30 }}
                        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">Industrial Excellence in Steel</h2>
                        <p className={styles.lead}>
                            JSV Enterprises is a premier manufacturer of high-grade steel products in Barhi, Jharkhand.
                            Our state-of-the-art facility combines technological innovation with unyielding quality.
                        </p>
                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <h3>400</h3>
                                <p>TPD Capacity</p>
                            </div>
                            <div className={styles.statCard}>
                                <h3>12</h3>
                                <p>Stand Mill</p>
                            </div>
                            <div className={styles.statCard}>
                                <h3>ISO</h3>
                                <p>Certified Quality</p>
                            </div>
                        </div>
                        <Link href="/about" className="btn" style={{ marginTop: '2rem' }}>Learn More About Us</Link>
                    </motion.div>

                    <motion.div
                        className={styles.introImage}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Image
                            src="/images/factory_sparks.jpg"
                            alt="Steel Manufacturing"
                            width={600}
                            height={450}
                            style={{ objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
