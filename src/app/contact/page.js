import PageHeader from '../../components/PageHeader';
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
                                    Plot No. 48, Village- Konra<br />
                                    Barhi Industrial Area<br />
                                    Barhi, Dist.- Hazaribagh<br />
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
                                <a href="tel:+919431941464">+91 94319 41464</a>, <a href="tel:+918210949940">+91 82109 49940</a>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.icon}>✉️</span>
                                <a href="mailto:jsvent2018@gmail.com">jsvent2018@gmail.com</a>
                            </div>

                            <a href="https://wa.me/919431941464" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                                Chat on WhatsApp
                            </a>
                        </div>

                        {/* Simple Map Embed Placeholder - In production use real Google Maps Embed API */}
                        <div className={styles.mapContainer}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.26123456789!2d85.35!3d24.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDE4JzAwLjAiTiA4NcKwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
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
                        <div className={styles.formWrapper}>
                            <h2>Send us a Message</h2>
                            <p>For dealer enquiries, quotes, or general questions.</p>

                            <form className={styles.form}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" placeholder="your@email.com" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="phone">Phone</label>
                                    <input type="tel" id="phone" name="phone" placeholder="Mobile Number" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="subject">Subject</label>
                                    <select id="subject" name="subject">
                                        <option>Dealer Enquiry</option>
                                        <option>Product Quote</option>
                                        <option>General Support</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows="5" placeholder="How can we help you?" required></textarea>
                                </div>

                                <button type="submit" className="btn" style={{ width: '100%' }}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
