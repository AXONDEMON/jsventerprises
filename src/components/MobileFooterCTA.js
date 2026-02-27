'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import styles from './MobileFooterCTA.module.css';

const MobileFooterCTA = () => {
    return (
        <div className={styles.stickyCTA}>
            <Link href="/contact" className={styles.ctaButton}>
                <Phone size={18} />
                Get a Quote
            </Link>
        </div>
    );
};

export default MobileFooterCTA;
