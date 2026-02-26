'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../../app/page.module.css';

const QualitySection = ({ active }) => {
    return (
        <div className={styles.sliderSection}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                >
                    Uncompromising Quality
                </motion.h2>
                <div className={styles.galleryGrid} style={{ marginTop: '2rem' }}>
                    {[
                        { src: "/images/Billet-Manufacturing-CCM.jpg", label: "Precision Casting" },
                        { src: "/images/quality_testing_new.png", label: "Spectro Lab" },
                        { src: "/images/continuous_casting_new.png", label: "Advanced CCM" },
                        { src: "/images/partners_hero.jpg", label: "Certified Grade" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className={styles.galleryItem}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: i * 0.15 }}
                        >
                            <Image src={item.src} alt={item.label} fill style={{ objectFit: 'cover' }} />
                            <div className={styles.galleryOverlay}>
                                <span>{item.label}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.p
                    className={styles.lead}
                    style={{ textAlign: 'center', marginTop: '2rem' }}
                    initial={{ opacity: 0 }}
                    animate={active ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    Adhering to stringent IS standards with in-house testing for every batch.
                </motion.p>
            </div>
        </div>
    );
};

export default QualitySection;
