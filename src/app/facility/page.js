import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
    title: 'Manufacturing Facility | JSV Enterprises',
    description: 'State-of-the-art steel manufacturing facility in Jharkhand with 10-stand automatic rolling mill.',
};

export default function Facility() {
    return (
        <main className="container section">
            <h1 className={styles.title}>Our Manufacturing Facility</h1>
            <p className={styles.intro}>
                Equipped with cutting-edge technology and fully automatic machinery, our plant in Barhi is a testament to modern engineering and efficiency.
            </p>

            <section className={styles.featureSection}>
                <div className={styles.featureText}>
                    <h2>Tech Highlight: 10-Stand Automatic Rolling Mill</h2>
                    <p>
                        At the heart of our operations lies our fully automatic <strong>10-stand rolling mill</strong>.
                        This advanced machinery allows for continuous production with minimal manual intervention, ensuring:
                    </p>
                    <ul>
                        <li>Precise dimensional accuracy</li>
                        <li>Superior surface finish</li>
                        <li>High production speed</li>
                        <li>Consistent mechanical properties</li>
                    </ul>
                </div>
                <div className={styles.featureImage}>
                    <Image
                        src="/images/rolling_mill.jpg"
                        alt="10-Stand Automatic Rolling Mill"
                        fill
                        style={{ objectFit: 'cover', borderRadius: '8px' }}
                    />
                </div>
            </section>

            <section className={styles.statsSection}>
                <div className={styles.statBox}>
                    <h3>400 TPD</h3>
                    <p>Daily Production Capacity</p>
                </div>
                <div className={styles.statBox}>
                    <h3>24/7</h3>
                    <p>Continuous Operation</p>
                </div>
                <div className={styles.statBox}>
                    <h3>Automated</h3>
                    <p>Process Control</p>
                </div>
            </section>

            <section className={styles.processSection}>
                <h2>Production Process</h2>
                <div className={styles.timeline}>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>1</div>
                        <h3>Raw Material Selection</h3>
                        <p>Sourcing high-quality sponge iron and scrap.</p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>2</div>
                        <h3>Melting & Refining</h3>
                        <p>Induction furnace processing with precise temperature control.</p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>3</div>
                        <h3>Continuous Casting</h3>
                        <p>Formation of high-quality billets.</p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>4</div>
                        <h3>Rolling</h3>
                        <p>Shaping through our 10-stand automatic mill.</p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>5</div>
                        <h3>Quality Testing</h3>
                        <p>Rigorous testing for strength and defects.</p>
                    </div>
                </div>
            </section>

            <section className={styles.gallerySection}>
                <h2>Infrastructure Gallery</h2>
                <div className={styles.galleryGrid}>
                    <div className={styles.galleryItem}>Plant View 1</div>
                    <div className={styles.galleryItem}>Plant View 2</div>
                    <div className={styles.galleryItem}>Stock Yard</div>
                </div>
            </section>
        </main>
    );
}
