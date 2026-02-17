import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
    title: 'Manufacturing Facility | JSV Enterprises',
    description: 'State-of-the-art steel manufacturing facility in Jharkhand with 12-stand automatic rolling mill.',
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
                    <h2>Tech Highlight: 12-Stand Automatic Rolling Mill</h2>
                    <p>
                        At the heart of our operations lies our fully automatic <strong>12-stand rolling mill</strong>.
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
                        src="/images/rolling_mill_new.png"
                        alt="12-Stand Automatic Rolling Mill"
                        fill
                        style={{ objectFit: 'cover', borderRadius: '8px' }}
                    />
                </div>
            </section>

            {/* New Furnace Section */}
            <section className={styles.featureSection} style={{ flexDirection: 'row-reverse' }}>
                <div className={styles.featureText}>
                    <h2>Induction Furnace Facility</h2>
                    <p>
                        Powering our production are <strong>3 x 12 Tonnes Induction Furnaces</strong>.
                        These high-capacity furnaces ensure efficient melting with precise temperature and chemistry control, featuring:
                    </p>
                    <ul>
                        <li>Energy-efficient operation</li>
                        <li>Advanced pollution control systems</li>
                        <li>Consistent molten metal quality</li>
                        <li>Rapid melting capability</li>
                    </ul>
                </div>
                <div className={styles.featureImage}>
                    <Image
                        src="/images/melting_refining_new.png"
                        alt="Induction Furnace"
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
                        <p>Shaping through our 12-stand automatic mill.</p>
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
                    <div className={styles.galleryItem}>
                        <Image src="/images/Billet-Manufacturing-CCM.jpg" alt="Billet CCM" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className={styles.galleryItem}>
                        <Image src="/images/continuous_casting_new.png" alt="Continuous Casting" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className={styles.galleryItem}>
                        <Image src="/images/quality_testing_new.png" alt="Quality Testing" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className={styles.galleryItem}>
                        <Image src="/images/rolling_mill_new.png" alt="Rolling Mill" fill style={{ objectFit: 'cover' }} />
                    </div>
                </div>
            </section>
        </main>
    );
}
