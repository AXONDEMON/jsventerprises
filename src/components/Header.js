'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 900);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
    };

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Products', href: '/products' },
        { name: 'Facility', href: '/facility' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
    ];

    const menuVariants = {
        closed: {
            x: '100%',
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40,
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40,
                staggerChildren: 0.07,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        closed: { opacity: isMobile ? 0 : 1, x: isMobile ? 50 : 0 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <div className={styles.logoContainer}>
                    <Link href="/" className={styles.mainLogo} onClick={closeMenu}>
                        <Image
                            src="/images/JSV Enterprises-2.png"
                            alt="JSV Enterprises Logo"
                            width={150}
                            height={45}
                            priority
                            className={styles.logoImage}
                        />
                    </Link>
                </div>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={styles.overlay}
                            onClick={closeMenu}
                        />
                    )}
                </AnimatePresence>

                <motion.nav
                    className={styles.nav}
                    initial={isMobile ? "closed" : "open"}
                    animate={isMobile ? (isMenuOpen ? "open" : "closed") : "open"}
                    variants={menuVariants}
                >
                    <ul className={styles.navList}>
                        {navItems.map((item) => (
                            <motion.li
                                key={item.name}
                                className={styles.navItem}
                                variants={itemVariants}
                                onClick={closeMenu}
                            >
                                <Link href={item.href}>{item.name}</Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.nav>

                <button
                    className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.bar} ${isMenuOpen ? styles.barOne : ''}`}></span>
                    <span className={`${styles.bar} ${isMenuOpen ? styles.barTwo : ''}`}></span>
                    <span className={`${styles.bar} ${isMenuOpen ? styles.barThree : ''}`}></span>
                </button>
                <div className={styles.cta}>
                    <Link href="/contact" className="btn">
                        Get a Quote
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
