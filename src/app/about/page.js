'use client';

import { motion } from 'framer-motion';
import PageHeader from '../../components/PageHeader';
import styles from './page.module.css';

export default function About() {
    return (
        <main>
            <PageHeader title="About JSV Enterprises" bgImage="/images/hero_bg_industrial.jpg" />
            <div className="container section">
                {/* <h1 className={styles.title}>About JSV Enterprises</h1> - Removed */}

                <div className={styles.grid}>
                    <motion.div
                        className={styles.content}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className={`${styles.intro} mobile-center`}>
                            JSV Enterprises is a premier steel manufacturing company located in the industrial hub of Barhi, Jharkhand.
                            With a steadfast commitment to quality and innovation, we have established ourselves as a reliable name in the steel industry.
                        </p>
                        <p className="mobile-center">
                            Our state-of-the-art facility boasts a <strong>1.5 Lakh Tonnes yearly capacity</strong> for Steel Billets and MS Structural products including Flats, Angles, Channels, Round Plain Rods, Squares, and Zed Sections.
                            Equipped with a fully automatic 12-stand rolling mill, we ensure precision and excellence in every ton of steel we produce.
                        </p>

                        <div className={styles.missionVision}>
                            <motion.div
                                className={`${styles.mvCard} mobile-center`}
                                whileHover={{ scale: 1.02, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <h3>Our Vision</h3>
                                <p>To be the most trusted steel manufacturer in the region, known for quality, integrity, and sustainable growth.</p>
                            </motion.div>
                            <motion.div
                                className={`${styles.mvCard} mobile-center`}
                                whileHover={{ scale: 1.02, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <h3>Our Mission</h3>
                                <p>To deliver superior steel products that build the infrastructure of tomorrow, while maintaining the highest standards of safety and operational efficiency.</p>
                            </motion.div>
                        </div>

                        <h2 className={`${styles.subtitle} mobile-center`}>Strategic Location</h2>
                        <p className="mobile-center">
                            Located in Village Konra, Barhi Industrial Area, Hazaribagh, Jharkhand, our plant is strategically positioned for efficient logistics and distribution across the region.
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.sidebar}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.highlightBox}>
                            <h3>Key Highlights</h3>
                            <ul>
                                <li>1.5 Lakh MT Billet Capacity</li>
                                <li>1.5 Lakh MT Structural Steel</li>
                                <li>Automatic 10-Stand Mill</li>
                                <li>Partnered with SG Mart</li>
                                <li>Associated with APL APOLLO</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
