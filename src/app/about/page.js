import PageHeader from '../../components/PageHeader';
import styles from './page.module.css';

export const metadata = {
    title: 'About Us | JSV Enterprises',
    description: 'Learn about JSV Enterprises, a leading steel manufacturer in Jharkhand with 400 TPD capacity.',
};

export default function About() {
    return (
        <main>
            <PageHeader title="About JSV Enterprises" bgImage="/images/about_hero.jpg" />
            <div className="container section">
                {/* <h1 className={styles.title}>About JSV Enterprises</h1> - Removed */}

                <div className={styles.grid}>
                    <div className={styles.content}>
                        <p className={styles.intro}>
                            JSV Enterprises is a premier steel manufacturing company located in the industrial hub of Barhi, Jharkhand.
                            With a steadfast commitment to quality and innovation, we have established ourselves as a reliable name in the steel industry.
                        </p>
                        <p>
                            Our state-of-the-art facility boasts a <strong>400 TPD capacity</strong> for both Steel Billets and Structural Steel products.
                            Equipped with a fully automatic 12-stand rolling mill, we ensure precision and excellence in every ton of steel we produce.
                        </p>

                        <div className={styles.missionVision}>
                            <div className={styles.mvCard}>
                                <h3>Our Vision</h3>
                                <p>To be the most trusted steel manufacturer in the region, known for quality, integrity, and sustainable growth.</p>
                            </div>
                            <div className={styles.mvCard}>
                                <h3>Our Mission</h3>
                                <p>To deliver superior steel products that build the infrastructure of tomorrow, while maintaining the highest standards of safety and operational efficiency.</p>
                            </div>
                        </div>

                        <h2 className={styles.subtitle}>Leadership</h2>
                        <p>Our growth is driven by the vision of our dynamic partners:</p>
                        <ul className={styles.leadershipList}>
                            <li>Neeraj Aggarwal</li>
                            <li>Rajeev Kumar Agarwal</li>
                            <li>Sumit Bansal</li>
                            <li>Dev Agarwal</li>
                            <li>Vishesh Agarwal</li>
                        </ul>

                        <h2 className={styles.subtitle}>Strategic Location</h2>
                        <p>
                            Located in Village Konra, Barhi Industrial Area, Hazaribagh, Jharkhand, our plant is strategically positioned for efficient logistics and distribution across the region.
                        </p>
                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.highlightBox}>
                            <h3>Key Highlights</h3>
                            <ul>
                                <li>400 TPD Billet Capacity</li>
                                <li>400 TPD Structural Steel</li>
                                <li>Automatic 10-Stand Mill</li>
                                <li>Partnered with SG Mart</li>
                                <li>Associated with APL APOLLO</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
