import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '../../components/PageHeader';
import styles from './page.module.css';

export const metadata = {
    title: 'Our Products | JSV Enterprises',
    description: 'High quality Steel Billets and Structural Steel (Angles, Channels, Square Bars) from JSV Enterprises.',
};

export default function Products() {
    return (
        <main>
            <PageHeader title="Our Products" bgImage="/images/hero_banner_industrial.png" />
            <div className="container section">
                {/* <h1 className={styles.title}>Our Products</h1> - Removed */}
                <p className={styles.intro}>
                    We manufacture high-grade steel products adhering to international quality standards.
                    Our integrated plant ensures consistent quality from raw material to finished product.
                </p>

                {/* Steel Billets Section */}
                <motion.section
                    className={styles.productSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.productInfo}>
                        <h2>Steel Billets</h2>
                        <p className={styles.specHighlight}>Capacity: 400 TPD</p>
                        <p>
                            Our mild steel billets are known for their chemical purity and physical strength.
                            Produced using advanced induction furnaces and continuous casting machines, they serve as the perfect raw material for high-quality rolling.
                        </p>
                        <h3>Key Features</h3>
                        <ul className={styles.featureList}>
                            <li>Superior surface finish</li>
                            <li>Consistent chemical composition</li>
                            <li>Free from internal defects like cracks or blowholes</li>
                            <li>Available in various grades and sizes</li>
                        </ul>
                    </div>
                    <div className={styles.productImagePlaceholder}>
                        <Image
                            src="/images/steel_billets_premium.png"
                            alt="Premium Steel Billets Manufacturing"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </motion.section>

                <hr className={styles.divider} />

                {/* Structural Steel Section */}
                <motion.section
                    className={styles.productSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className={styles.productInfo}>
                        <h2>Structural Steel</h2>
                        <p className={styles.specHighlight}>Capacity: 400 TPD</p>
                        <p>
                            We produce a wide range of structural steel products including Angles, Channels, and Square Bars.
                            Our fully automatic <strong>12-stand rolling mill</strong> ensures precise dimensions and superior straightness.
                        </p>

                        <h3>Product Range</h3>
                        <div className={styles.specsGrid}>
                            <motion.div
                                className={styles.specCard}
                                whileHover={{ scale: 1.05 }}
                            >
                                <h4>Angles & Channels</h4>
                                <p>Precision rolled for heavy construction use.</p>
                            </motion.div>
                            <motion.div
                                className={styles.specCard}
                                whileHover={{ scale: 1.05 }}
                            >
                                <h4>Square Bars</h4>
                                <p><strong>Sizes:</strong> 25mm to 75mm</p>
                            </motion.div>
                        </div>

                        <div className={styles.partnershipNote}>
                            <p><strong>Brand Partnerships:</strong></p>
                            <div className={styles.logos}>
                                <span className={styles.badge}>APL APOLLO</span>
                                <span className={styles.badge}>SG Mart Limited</span>
                            </div>
                            <div style={{ marginTop: '1.5rem' }}>
                                <Image
                                    src="/images/apl_apollo_amitabh_new.png"
                                    alt="APL Apollo - Amitabh Bachchan"
                                    width={500}
                                    height={250}
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: '12px',
                                        width: '100%',
                                        height: 'auto',
                                        maxWidth: '500px',
                                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.productImagePlaceholder}>
                        <Image
                            src="/images/steel_angle_channels_premium.png"
                            alt="Premium Structural Steel - Angles and Channels"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </motion.section>

                <div className={styles.ctaBox}>
                    <h3>Need a Custom Quote?</h3>
                    <p>Contact our sales team for bulk orders and dealer enquiries.</p>
                    <Link href="/contact" className="btn">Get a Quote</Link>
                </div>
            </div>
        </main>
    );
}
