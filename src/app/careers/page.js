import PageHeader from '../../components/PageHeader';
import styles from './page.module.css';

export const metadata = {
    title: 'Careers | JSV Enterprises',
    description: 'Join the team at JSV Enterprises. Explore job opportunities in our steel plant and office.',
};

export default function Careers() {
    return (
        <main>
            <PageHeader title="Careers at JSV Enterprises" bgImage="/images/careers_hero.jpg" />
            <div className="container section">
                {/* <h1 className={styles.title}>Careers at JSV Enterprises</h1> - Removed */}

                <div className={styles.content}>
                    <div className={styles.info}>
                        <h2>Join Our Team</h2>
                        <p>
                            At JSV Enterprises, we believe that our strength lies in our people.
                            As a rapidly growing steel manufacturing company with a 400 TPD capacity and a state-of-the-art 10-stand automatic rolling mill,
                            we are constantly looking for talented, dedicated, and driven individuals to join our workforce.
                        </p>
                        <p>
                            We offer a dynamic work environment where safety, innovation, and professional growth are top priorities.
                            Whether you are an experienced engineer, a skilled technician, or a management professional,
                            JSV Enterprises provides the platform you need to build a solid career in the steel industry.
                        </p>

                        <h3>Current Openings</h3>
                        <ul className={styles.jobList}>
                            <li>Mechanical Engineers (Plant)</li>
                            <li>Electrical Maintenance Staff</li>
                            <li>Quality Control Technicians</li>
                            <li>Sales & Marketing Executives</li>
                            <li>Office Administration Staff</li>
                        </ul>

                        <div className={styles.hrContact}>
                            <h3>HR Contact</h3>
                            <p><strong>Email:</strong> jsvent2018@gmail.com</p>
                            <p><strong>Phone:</strong> +91 94319 41464</p>
                        </div>
                    </div>

                    <div className={styles.formSection}>
                        <h2>Apply Now</h2>
                        <form className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="position">Position Applied For</label>
                                <select id="position" name="position">
                                    <option value="plant">Plant Operations</option>
                                    <option value="office">Office / Admin</option>
                                    <option value="sales">Sales & Marketing</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="resume">Upload Resume</label>
                                <input type="file" id="resume" name="resume" />
                                <small>PDF or Word documents only</small>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message / Cover Letter</label>
                                <textarea id="message" name="message" rows="4"></textarea>
                            </div>

                            <button type="submit" className="btn">Submit Application</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
