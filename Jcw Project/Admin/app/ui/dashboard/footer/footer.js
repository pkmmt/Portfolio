import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>Binary Wizards</div>
            <div className={styles.rights}>© All rights reserved.</div>
        </div>
    );
}

export default Footer;