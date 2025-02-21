import styles from './centers.module.css';
import Image from 'next/image'

const CenterMan = ({ title, image, button, info }) => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>{title}</span>
            <span className={styles.image}>
                <Image src="/noavatar.png" alt="" width={125} height={125} className={styles.image}/>
            </span>
            <span className={styles.info}>{info}</span>
            <span className={styles.button}>
                <button>Details</button>
            </span>
        </div>
    )
}

export default CenterMan;