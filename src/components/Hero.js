import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        <span className={styles.titleTop}>A LEGACY OF</span>
                        <span className={styles.titleMain}>TRUST</span>
                    </h1>
                    <h2 className={styles.subtitle}>
                        <span className={styles.subtitleTop}>A PROMISE OF</span>
                        <span className={styles.subtitleMain}>STRENGTH</span>
                    </h2>

                    <div className={styles.ctaGroup}>
                        <Link href="/contact" className="btn">
                            Get a Quote
                        </Link>
                        <Link href="/products" className={styles.outlineBtn}>
                            View Products
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
