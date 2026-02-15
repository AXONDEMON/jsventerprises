import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={`container ${styles.container}`}>

                <div className={styles.ctaGroup}>
                    <Link href="/contact" className="btn">
                        Get a Quote
                    </Link>
                    <Link href="/products" className={`${styles.outlineBtn}`}>
                        View Products
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
