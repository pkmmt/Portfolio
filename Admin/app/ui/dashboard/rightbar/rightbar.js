import DonationsChart from '../donations/chart/donationsChart';
import styles from './rightbar.module.css';

const RightBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.chart}>
                <DonationsChart />
            </div>
        </div>
    )
}

export default RightBar;