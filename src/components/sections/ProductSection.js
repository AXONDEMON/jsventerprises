'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../../app/page.module.css';
import Link from 'next/link';

const ProductSection = ({ active }) => {
    return (
        <div className={styles.sliderSection} style={{ backgroundColor: '#fdfdfd' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                >
                    Premium Steel Products
                </motion.h2>
                <div className={styles.productsGrid}>
                    <motion.div
                        className={styles.productCard}
                        initial={{ opacity: 0, x: -30 }}
                        animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className={styles.cardImage}>
                            <Image src="/images/rolling_mill_new.png" alt="Steel Billets" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <h3>Steel Billets</h3>
                        <p>High-quality billets for rolling mills. 400 TPD production capacity ensuring consistent supply.</p>
                        <Link href="/products" className={styles.textLink}>Learn More &rarr;</Link>
                    </motion.div>

                    <motion.div
                        className={styles.productCard}
                        initial={{ opacity: 0, x: 30 }}
                        animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className={styles.cardImage}>
                            <Image src="/images/steel_stack.jpg" alt="Structural Steel" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <h3>Structural Steel</h3>
                        <p>Angles, Channels, and Square Bars (25mm-75mm). Manufactured using our 12-stand automatic mill.</p>
                        <Link href="/products" className={styles.textLink}>Learn More &rarr;</Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
