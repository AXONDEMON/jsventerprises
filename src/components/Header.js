'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <div className={styles.logoContainer}>
                    <Link href="/" className={styles.mainLogo} onClick={closeMenu}>
                        <Image
                            src="images/JSV Enterprises-2.png"
                            alt="JSV Enterprises Logo"
                            width={120}
                            height={36}
                            priority
                            className={styles.logoImage}
                        />
                    </Link>
                </div>

                <div className={`${styles.overlay} ${isMenuOpen ? styles.overlayActive : ''}`} onClick={closeMenu}></div>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ''}`}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem} onClick={closeMenu}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={styles.navItem} onClick={closeMenu}>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li className={styles.navItem} onClick={closeMenu}>
                            <Link href="/products">Products</Link>
                        </li>
                        <li className={styles.navItem} onClick={closeMenu}>
                            <Link href="/facility">Facility</Link>
                        </li>

                        <li className={styles.navItem} onClick={closeMenu}>
                            <Link href="/careers">Careers</Link>
                        </li>
                        <li className={styles.navItem} onClick={closeMenu}>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

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
