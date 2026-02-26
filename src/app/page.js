'use client';

import Link from 'next/link';
import Image from 'next/image';
import Hero from '../components/Hero';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Welcome */}
      <section id="welcome" className="section container">
        <div className={styles.introLayout}>
          <div className={styles.introContent}>
            <h2 className="section-title">Industrial Excellence in Steel</h2>
            <p className={styles.lead}>
              JSV Enterprises is a premier manufacturer of high-grade steel products in Barhi, Jharkhand.
              Our state-of-the-art facility combines technological innovation with a commitment to unyielding quality.
              Proudly delivering <strong>400 TPD</strong> capacity in association with industry giants <strong>APL APOLLO</strong> and <strong>SG Mart Limited</strong>.
            </p>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h3>400</h3>
                <p>TPD Capacity</p>
              </div>
              <div className={styles.statCard}>
                <h3>12</h3>
                <p>Stand Mill</p>
              </div>
              <div className={styles.statCard}>
                <h3>ISO</h3>
                <p>Certified Quality</p>
              </div>
            </div>
          </div>
          <div className={styles.introImage}>
            <Image
              src="/images/factory_sparks.jpg"
              alt="Steel Manufacturing Process"
              width={600}
              height={450}
              style={{ objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
      </section>

      {/* Section 3: Process */}
      <section id="process" className={`${styles.processSection} section`}>
        <div className="container">
          <h2 className={styles.sectionTitleWhite}>Engineered for Quality</h2>
          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processImageContainer}>
                <Image src="/images/raw_material_new.png" alt="Raw Material" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3>Raw Material</h3>
              <p>Rigorous selection of premium Sponge Iron and calibrated scrap.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processImageContainer}>
                <Image src="/images/melting_refining_new.png" alt="Melting" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3>Melting & Refining</h3>
              <p>Advanced Induction Furnace with real-time chemistry monitoring.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processImageContainer}>
                <Image src="/images/continuous_casting_new.png" alt="Casting" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3>Continuous Casting</h3>
              <p>Modern CCM technology for consistent, defect-free steel billets.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processImageContainer}>
                <Image src="/images/rolling_mill_new.png" alt="Rolling" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3>Precision Rolling</h3>
              <p>Fully automated 12-stand mill for perfect structural dimensions.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processImageContainer}>
                <Image src="/images/quality_testing_new.png" alt="Quality Check" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3>Rigorous Testing</h3>
              <p>In-house Spectro Labs ensuring compliance with IS standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Partners */}
      <section id="partners" className={styles.partnersSection}>
        <div className="container">
          <h2 className="section-title">Strategic Associations</h2>
          <p className={styles.lead}>Strengthening the nation's infrastructure through quality and scale.</p>

          <div className={styles.brandFeature}>
            <Image
              src="/images/apl_apollo_amitabh_new.png"
              alt="APL Apollo - Amitabh Bachchan"
              width={800}
              height={400}
              style={{ objectFit: 'cover', borderRadius: '16px', margin: '2rem auto', display: 'block', maxWidth: '100%', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
            />
          </div>

          <div className={styles.logoGrid}>
            <div className={styles.partnerLogo}>
              <Image
                src="/images/aplapollo_logo.png"
                alt="APL APOLLO"
                width={180}
                height={60}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.brandName}>
              <span>SG MART LIMITED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Infrastructure */}
      <section id="infrastructure" className={styles.parallaxSection}>
        <div className={styles.parallaxOverlay}>
          <h2>World Class Infrastructure</h2>
          <p>Fully Automatic 12-Stand Rolling Mill</p>
          <p>3 x 12 Tonnes Electric Furnaces</p>
          <p>Continuous Casting Machine (CCM)</p>
          <p>High-Capacity Crushing Machines</p>
          <p>Spectro Labs & Quality Testing</p>
          <p>Advanced Material Handling Cranes</p>
        </div>
      </section>

      {/* Section 6: Products */}
      <section id="products" className="section container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Products</h2>
        <div className={styles.productsGrid}>
          <div className={styles.productCard}>
            <div className={styles.cardImage}>
              <Image
                src="/images/rolling_mill_new.png"
                alt="Steel Rolling"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3>Steel Billets</h3>
            <p>High-quality billets for rolling mills. 400 TPD production capacity ensuring consistent supply.</p>
            <Link href="/products" className={styles.textLink}>Learn More &rarr;</Link>
          </div>
          <div className={styles.productCard}>
            <div className={styles.cardImage}>
              <Image
                src="/images/steel_stack.jpg"
                alt="Structural Steel"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3>Structural Steel</h3>
            <p>Angles, Channels, and Square Bars (25mm-75mm). Manufactured using our 12-stand automatic mill.</p>
            <Link href="/products" className={styles.textLink}>Learn More &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Section 7: Gallery */}
      <section id="gallery" className={styles.gallerySection}>
        <div className="container">
          <h2>Industrial Excellence</h2>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem}>
              <Image src="/images/Billet-Manufacturing-CCM.jpg" alt="Rolling Mill" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/images/quality_testing_new.png" alt="Quality Testing" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/images/continuous_casting_new.png" alt="Continuous Casting" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/images/partners_hero.jpg" alt="Production Quality" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: CTA */}
      <section id="cta" className={styles.ctaSection}>
        <div className="container">
          <h2>Ready to Partner With Us?</h2>
          <p>Contact us today for quotes and dealer enquiries.</p>
          <Link href="/contact" className="btn">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
