'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <div className={styles.logoContainer}>
                    <Link href="/" className={styles.mainLogo}>
                        <Image
                            src="/images/JSV Enterprises-2.png"
                            alt="JSV Enterprises Logo"
                            width={240}
                            height={80}
                            priority
                            style={{ objectFit: 'contain' }}
                        />
                    </Link>
                    <div className={styles.divider}></div>
                    <div className={styles.partnerHeaderLogo}>
                        <span className={styles.partnerLabel}>Proud Authorized Partner</span>
                        <Image
                            src="/images/aplapollo_logo.png"
                            alt="APL Apollo"
                            width={120}
                            height={40}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>

                <button
                    className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.bar} ${isMenuOpen ? styles.barOne : ''}`}></span>
                    <span className={`${styles.bar} ${isMenuOpen ? styles.barTwo : ''}`}></span>
                    <span className={`${styles.bar} ${isMenuOpen ? styles.barThree : ''}`}></span>
                </button>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ''}`}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem} onClick={() => setIsMenuOpen(false)}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={styles.navItem} onClick={() => setIsMenuOpen(false)}>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li className={styles.navItem} onClick={() => setIsMenuOpen(false)}>
                            <Link href="/products">Products</Link>
                        </li>
                        <li className={styles.navItem} onClick={() => setIsMenuOpen(false)}>
                            <Link href="/facility">Facility</Link>
                        </li>

                        <li className={styles.navItem} onClick={() => setIsMenuOpen(false)}>
                            <Link href="/careers">Careers</Link>
                        </li>
                        <li className={styles.navItem} onClick={() => setIsMenuOpen(false)}>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
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
