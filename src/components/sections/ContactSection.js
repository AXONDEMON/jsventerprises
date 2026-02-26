'use client';

import { motion } from 'framer-motion';
import styles from '../../app/page.module.css';
import Link from 'next/link';

const ContactSection = ({ active }) => {
    return (
        <div className={styles.sliderSection} style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
            <div className="container">
                <div className={styles.ctaContent} style={{ textAlign: 'center' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'white' }}
                    >
                        Ready to Build the Future?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={active ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.3 }}
                        style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2.5rem' }}
                    >
                        Partner with JSV Enterprises for unmatched steel quality and reliable delivery.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ delay: 0.5 }}
                        className={styles.contactGroup}
                        style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}
                    >
                        <Link href="/contact" className="btn">Contact Us Now</Link>
                        <Link href="/products" className={styles.outlineBtn} style={{ borderColor: 'white' }}>View Product Catalogue</Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
