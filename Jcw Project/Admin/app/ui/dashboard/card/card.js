import styles from './card.module.css';
import { MdPeople, MdAutoGraph } from 'react-icons/md';

const Card = ({ title, amount, icon, info }) => {
  return (
    <div className={styles.container}>
      <MdPeople size={18} />
      <div className={styles.texts}>
        <span className={styles.title}>{title}</span>
        <span className={styles.amount}>{amount}</span>
        <span className={styles.icon}>
          {icon}
          <span className={styles.info}>{info}</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
