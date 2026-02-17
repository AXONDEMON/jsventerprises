import Link from 'next/link';
import Image from 'next/image';
import Hero from '../components/Hero';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <div style={{ background: '#0056b3', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '0.5rem', fontWeight: 'bold' }}>
        <span>Proud Authorized Partner of</span>
        <Image
          src="/images/aplapollo_logo.png"
          alt="APL APOLLO"
          width={100}
          height={30}
          style={{ objectFit: 'contain', background: 'white', padding: '2px', borderRadius: '4px' }}
        />
      </div>
      {/* Hero Section */}
      <Hero />

      {/* Intro Section with Image */}
      <section className="section container">
        <div className={styles.introLayout}>
          <div className={styles.introContent}>
            <h2>Welcome to JSV Enterprises</h2>
            <p className={styles.lead}>
              A leader in steel manufacturing based in Barhi, Jharkhand. We specialize in high-quality Steel Billets and Structural Steel products with a production capacity of 400 TPD.
              Proudly associated with <strong>APL APOLLO</strong> and <strong>SG Mart Limited</strong>.
            </p>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h3>400 TPD</h3>
                <p>Billet Capacity</p>
              </div>
              <div className={styles.statCard}>
                <h3>400 TPD</h3>
                <p>Structural Steel</p>
              </div>
              <div className={styles.statCard}>
                <h3>12-Stand</h3>
                <p>Automatic Rolling Mill</p>
              </div>
            </div>
          </div>
          <div className={styles.introImage}>
            <Image
              src="/images/factory_sparks.jpg"
              alt="Steel Manufacturing Process"
              width={600}
              height={400}
              style={{ objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>
        </div>
      </section>

      {/* Production Process Section */}
      <section className={`${styles.processSection} section`}>
        <div className="container">
          <h2 className={styles.sectionTitleWhite}>Our Production Process</h2>
          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processImageContainer}>
                <Image src="/images/raw_material_new.png" alt="Raw Material" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3>Raw Material</h3>
              <p>Selection of high-grade Sponge Iron and Scrap.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processImageContainer}>
                <Image src="/images/melting_refining_new.png" alt="Melting" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3>Melting & Refining</h3>
              <p>Induction Furnace melting with precise chemistry control.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processImageContainer}>
                <Image src="/images/continuous_casting_new.png" alt="Casting" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3>Continuous Casting</h3>
              <p>Casting into high-quality billets using CCM.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processImageContainer}>
                <Image src="/images/rolling_mill_new.png" alt="Rolling" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3>Rolling</h3>
              <p>Hot rolling in our automated 12-stand mill.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processImageContainer}>
                <Image src="/images/quality_testing_new.png" alt="Quality Check" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3>Quality Testing</h3>
              <p>Rigorous physical and chemical testing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Partnerships */}
      <section className={styles.partnersSection}>
        <div className="container">
          <h2>In Association with APL APOLLO</h2>
          <p>We are proud to be a key partner of India's largest structural steel tube manufacturer.</p>

          <div className={styles.brandFeature}>
            <Image
              src="/images/apl_apollo_amitabh_new.png"
              alt="APL Apollo - Amitabh Bachchan"
              width={800}
              height={400}
              style={{ objectFit: 'cover', borderRadius: '12px', margin: '2rem auto', display: 'block', maxWidth: '100%' }}
            />
          </div>

          <div className={styles.logoGrid}>
            <div className={styles.partnerLogo}>
              <Image
                src="/images/aplapollo_logo.png"
                alt="APL APOLLO"
                width={200}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.partnerLogo}>
              <span>SG Mart Limited</span>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax / Infrastructure Highlight */}
      <section className={styles.parallaxSection}>
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

      {/* Products Preview */}
      <section className="section container">
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

      {/* Gallery Section */}
      <section className={styles.gallerySection}>
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

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Ready to Partner With Us?</h2>
          <p>Contact us today for quotes and dealer enquiries.</p>
          <Link href="/contact" className="btn">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
