'use client';

import { useState } from 'react';
import styles from '../app/contact/page.module.css';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        
        // Add formsubmit.co required fields securely via fetch rather than visible inputs
        formData.append('_subject', 'New Contact Form Submission - JSV Enterprises');
        // Disable honeypot and captcha for seamless flow
        formData.append('_captcha', 'false');

        try {
            await fetch('https://formsubmit.co/jsvaplsales@gmail.com', {
                method: 'POST',
                body: formData,
            });
            setIsSubmitted(true);
        } catch (error) {
            console.error('Submission failed:', error);
            alert('There was an error sending your message. Please try again or email us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className={styles.formWrapper} style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                <h2 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Thank You!</h2>
                <p style={{ fontSize: '1.2rem', color: '#555' }}>
                    Your message has been received. We will get back in touch with you soon!
                </p>
            </div>
        );
    }

    return (
        <div className={styles.formWrapper}>
            <h2>Send us a Message</h2>
            <p>For dealer enquiries, quotes, or general questions.</p>

            <form className={styles.form} onSubmit={handleSubmit}>
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
                        <option value="Dealer Enquiry">Dealer Enquiry</option>
                        <option value="Product Quote">Product Quote</option>
                        <option value="General Support">General Support</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" placeholder="How can we help you?" required></textarea>
                </div>

                <button type="submit" className="btn" style={{ width: '100%' }} disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
}
