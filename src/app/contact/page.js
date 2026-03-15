import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import styles from './page.module.css';

export const metadata = {
    title: 'Contact Us | JSV Enterprises',
    description: 'Get in touch with JSV Enterprises. Plant in Barhi, Office in Ramgarh, Jharkhand.',
};

export default function Contact() {
    return (
        <main>
            <PageHeader title="Contact Us" bgImage="/images/contact_hero.jpg" />
            <div className="container section">
                {/* <h1 className={styles.title}>Contact Us</h1> - Removed */}

                <div className={styles.grid}>
                    <div className={styles.contactInfo}>
                        <div className={styles.infoCard}>
                            <h2>Our Locations</h2>

                            <div className={styles.addressBlock}>
                                <h3>🏭 Plant Address</h3>
                                <p>
                                    13/1-A, Village Konra<br />
                                    Barhi Industrial Area<br />
                                    Barhi, Hazaribagh<br />
                                    Jharkhand – 825405
                                </p>
                            </div>

                            <div className={styles.addressBlock}>
                                <h3>🏢 Office Address</h3>
                                <p>
                                    Siyaram Nagar, Ranchi Road<br />
                                    Marar, Post-Marar<br />
                                    Dist. Ramgarh<br />
                                    Jharkhand – 82917
                                </p>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <h2>Get in Touch</h2>
                            <div className={styles.contactItem}>
                                <span className={styles.icon}>📞</span>
                                <a href="tel:+918102695986">+91 81026 95986</a>, <a href="tel:+918273232200">+91 82732 32200</a>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.icon}>✉️</span>
                                <a href="mailto:jsvaplsales@gmail.com">jsvaplsales@gmail.com</a>
                            </div>

                            <a href="https://wa.me/918102695986" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                                Chat on WhatsApp
                            </a>
                        </div>

                        {/* Simple Map Embed Placeholder - In production use real Google Maps Embed API */}
                        <div className={styles.mapContainer}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.332450749408!2d85.43334287535309!3d24.300036278299384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f36fdb76bbeaef%3A0xcafe5747c020777a!2sJSV%20enterprise!5e0!3m2!1sen!2sin!4v1771314856994!5m2!1sen!2sin"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Plant Location"
                            ></iframe>
                        </div>
                    </div>

                    <div className={styles.formColumn}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </main>
    );
}
