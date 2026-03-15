import PageHeader from '../../components/PageHeader';
import CareersForm from '../../components/CareersForm';
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
                    <div className={`${styles.info} mobile-center`}>
                        <h2 className="section-title">Join Our Team</h2>
                        <p>
                            At JSV Enterprises, we believe that our strength lies in our people.
                            As a rapidly growing steel manufacturing company with a 400 TPD capacity and a state-of-the-art 12-stand automatic rolling mill,
                            we are constantly looking for talented, dedicated, and driven individuals to join our workforce.
                        </p>
                        <p>
                            We offer a dynamic work environment where safety, innovation, and professional growth are top priorities.
                            Whether you are an experienced engineer, a skilled technician, or a management professional,
                            JSV Enterprises provides the platform you need to build a solid career in the steel industry.
                        </p>

                        <h3 className="mobile-center">Current Openings</h3>
                        <ul className={styles.jobList}>
                            <li>Mechanical Engineers (Plant)</li>
                            <li>Electrical Maintenance Staff</li>
                            <li>Quality Control Technicians</li>
                            <li>Sales & Marketing Executives</li>
                            <li>Office Administration Staff</li>
                        </ul>

                        <div className={`${styles.hrContact} mobile-center`}>
                            <h3>HR Contact</h3>
                            <p><strong>Email:</strong> jsvaplsales@gmail.com</p>
                            <p><strong>Phone:</strong> +91 81026 95986</p>
                        </div>
                    </div>

                    <CareersForm />
                </div>
            </div>
        </main>
    );
}
