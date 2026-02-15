import styles from './PageHeader.module.css';

const PageHeader = ({ title, bgImage }) => {
    return (
        <div
            className={styles.pageHeader}
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className={styles.overlay}></div>
            <div className={`container ${styles.container}`}>
                <h1 className={styles.title}>{title}</h1>
            </div>
        </div>
    );
};

export default PageHeader;
