import Image from 'next/image';
import styles from './TopBar.module.css';

const TopBar = () => {
    return (
        <div className={styles.topBar}>
            <div className={`container ${styles.container}`}>
                <div className={styles.partnerInfo}>
                    <span className={styles.label}>Proud Authorized Partner of</span>
                    <div className={styles.logoWrapper}>
                        <Image
                            src="/images/aplapollo_logo.png"
                            alt="APL APOLLO"
                            width={90}
                            height={28}
                            className={styles.partnerLogo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
