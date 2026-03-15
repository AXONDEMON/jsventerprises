'use client';

import { useState } from 'react';
import styles from '../app/careers/page.module.css';

export default function CareersForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        
        formData.append('_subject', 'New Job Application - Careers Page');
        formData.append('_captcha', 'false');

        try {
            await fetch('https://formsubmit.co/jsvaplsales@gmail.com', {
                method: 'POST',
                body: formData,
            });
            setIsSubmitted(true);
        } catch (error) {
            console.error('Submission failed:', error);
            alert('There was an error sending your application. Please try again or email us directly at jsvaplsales@gmail.com');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className={styles.formSection} style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                <h2 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Application Received</h2>
                <p style={{ fontSize: '1.2rem', color: '#555' }}>
                    Thank you! We will get back in touch with you soon regarding your application.
                </p>
            </div>
        );
    }

    return (
        <div className={styles.formSection}>
            <h2>Apply Now</h2>
            <form className={styles.form} onSubmit={handleSubmit} encType="multipart/form-data">
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
                        <option value="Plant Operations">Plant Operations</option>
                        <option value="Office / Admin">Office / Admin</option>
                        <option value="Sales & Marketing">Sales & Marketing</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="resume">Upload Resume</label>
                    <input type="file" id="resume" name="attachment" accept=".pdf,.doc,.docx" />
                    <small>PDF or Word documents only</small>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="message">Message / Cover Letter</label>
                    <textarea id="message" name="message" rows="4"></textarea>
                </div>

                <button type="submit" className="btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
            </form>
        </div>
    );
}
