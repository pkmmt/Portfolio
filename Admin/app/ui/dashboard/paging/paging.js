import styles from './paging.module.css';

const Paging = () => {
    return (
        <div className={styles.container}>
        <button className={styles.prevButton}>Previous</button>
        <button className={styles.nextButton}>Next</button>
        </div>
    );
    };

export default Paging;