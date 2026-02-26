'use client';

import { motion } from 'framer-motion';
import styles from '../../app/page.module.css';

const InfraSection = ({ active }) => {
    return (
        <div className={styles.parallaxSection} style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
            <motion.div
                className={styles.parallaxOverlay}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 1 }}
            >
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.3 }}
                >
                    World Class Infrastructure
                </motion.h2>
                <motion.div
                    className={styles.infraList}
                    initial={{ opacity: 0 }}
                    animate={active ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5, staggerChildren: 0.1 }}
                >
                    <p>Fully Automatic 12-Stand Rolling Mill</p>
                    <p>3 x 12 Tonnes Electric Furnaces</p>
                    <p>Continuous Casting Machine (CCM)</p>
                    <p>High-Capacity Crushing Machines</p>
                    <p>Spectro Labs & Quality Testing</p>
                    <p>Advanced Material Handling Cranes</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default InfraSection;
