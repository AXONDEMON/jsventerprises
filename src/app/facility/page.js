import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './page.module.css';
import ImageSlider from '../../components/ImageSlider';

export const metadata = {
    title: 'Manufacturing Facility | JSV Enterprises',
    description: 'State-of-the-art steel manufacturing facility in Jharkhand with 12-stand automatic rolling mill.',
};

const facilityImages = [
    '/images/continuous_casting_new.png',
    '/images/furnace_melting_premium.png',
    '/images/rolling_mill_premium.png',
    '/images/spectro_lab_premium.png',
    '/images/quality_testing_new.png',
    '/images/rolling_mill_new.png'
];

export default function Facility() {
    return (
        <main className="container section">
            <h1 className={styles.title}>Our Manufacturing Facility</h1>
            <p className={styles.intro}>
                Equipped with cutting-edge technology and fully automatic machinery, our plant in Barhi is a testament to modern engineering and efficiency.
            </p>

            <section className={styles.gallerySlider}>
                <ImageSlider images={facilityImages} interval={5000} />
            </section>

            <motion.section
                className={styles.featureSection}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
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
                        style={{ objectFit: 'cover', borderRadius: '16px' }}
                    />
                </div>
            </motion.section>

            {/* New Furnace Section */}
            <motion.section
                className={styles.featureSection}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
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
                        style={{ objectFit: 'cover', borderRadius: '16px' }}
                    />
                </div>
            </motion.section>

            <motion.section
                className={styles.statsSection}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
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
            </motion.section>

            <section className={styles.processSection}>
                <h2 className="section-title">Production Process</h2>
                <div className={styles.timeline}>
                    {[
                        { num: 1, title: "Raw Material", desc: "Sourcing premium sponge iron." },
                        { num: 2, title: "Melting", desc: "Induction furnace processing." },
                        { num: 3, title: "Casting", desc: "High-quality billet formation." },
                        { num: 4, title: "Rolling", desc: "12-stand automatic mill." },
                        { num: 5, title: "Quality", desc: "Rigorous spectrometer testing." }
                    ].map((step, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.step}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <div className={styles.stepNumber}>{step.num}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className={styles.gallerySection}>
                <h2>Infrastructure Gallery</h2>
                <div className={styles.galleryCarouselMobile}>
                    <ImageSlider images={facilityImages} interval={5000} />
                </div>
                <div className={styles.galleryGridDesktop}>
                    <div className={styles.galleryItem}>
                        <Image src="/images/continuous_casting_new.png" alt="Continuous Casting" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className={styles.galleryItem}>
                        <Image src="/images/furnace_melting_premium.png" alt="Induction Furnace" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className={styles.galleryItem}>
                        <Image src="/images/rolling_mill_premium.png" alt="Rolling Mill" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className={styles.galleryItem}>
                        <Image src="/images/spectro_lab_premium.png" alt="Spectro Lab" fill style={{ objectFit: 'cover' }} />
                    </div>
                </div>
            </section>
        </main>
    );
}
