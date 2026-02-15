import PageHeader from '../../components/PageHeader';
import styles from './page.module.css';

export const metadata = {
    title: 'Quality Assurance | JSV Enterprises',
    description: 'Commitment to quality, safety, and dimensional accuracy in steel manufacturing.',
};

export default function Quality() {
    return (
        <main>
            <PageHeader title="Quality Assurance" bgImage="/images/quality_hero.jpg" />
            <div className="container section">
                {/* <h1 className={styles.title}>Quality Assurance</h1> - Removed */}
                <p className={styles.intro}>
                    At JSV Enterprises, quality is not just a standard; it is our philosophy.
                    We adhere to stringent quality control measures at every stage of production to ensure our steel meets the highest industry benchmarks.
                </p>

                <div className={styles.qualityGrid}>
                    <div className={styles.card}>
                        <div className={styles.icon}>📏</div>
                        <h3>Dimensional Accuracy</h3>
                        <p>
                            Our 10-stand automatic rolling mill ensures that every bar and section produced has precise dimensions,
                            eliminating the risk of structural inconsistencies.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.icon}>🔥</div>
                        <h3>Process Control</h3>
                        <p>
                            From raw material selection to the final cooling bed, every step is monitored.
                            Temperature control in induction furnaces ensures optimal chemical composition.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.icon}>💪</div>
                        <h3>Strength & Durability</h3>
                        <p>
                            We focus on producing steel with high tensile strength and ductility,
                            making it perfect for critical infrastructure projects and heavy construction.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.icon}>🛡️</div>
                        <h3>Safety Standards</h3>
                        <p>
                            Our manufacturing processes comply with national safety and environmental standards,
                            ensuring a safe workplace and sustainable production.
                        </p>
                    </div>
                </div>

                <div className={styles.labSection}>
                    <h2>In-House Testing Laboratory</h2>
                    <p>
                        Our facility is equipped with a modern laboratory for real-time testing of chemical and mechanical properties.
                        <strong> Spectrometer analysis</strong> and <strong>Tensile testing</strong> machines allow us to certify every batch before dispatch.
                    </p>
                </div>
            </div>
        </main>
    );
}
