import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.column}>
                    <h3>JSV Enterprises</h3>
                    <p>Manufacturing Strength at Scale.</p>
                    <div className={styles.socials}>
                        {/* Icons would go here */}
                    </div>
                </div>

                <div className={styles.column}>
                    <h4>Quick Links</h4>
                    <ul className={styles.links}>
                        <li><Link href="/products">Our Products</Link></li>
                        <li><Link href="/facility">Manufacturing Facility</Link></li>
                        <li><Link href="/quality">Quality Assurance</Link></li>
                        <li><Link href="/careers">Careers</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4>Contact Us</h4>
                    <p><strong>Registered Office:</strong> Siyaram Nagar, Ranchi Road, Marar, Dist. Ramgarh - 82917 (Jharkhand)</p>
                    <p><strong>Works:</strong> 13/1-A, Village Konra, Barhi Industrial Area, Barhi, Hazaribagh - 825405 (Jharkhand)</p>
                    <p><strong>Phone:</strong> +91 94319 41464, +91 82109 49940</p>
                    <p><strong>Email:</strong> jsvent2018@gmail.com</p>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} JSV Enterprises. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
