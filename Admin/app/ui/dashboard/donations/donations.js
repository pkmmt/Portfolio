import Image from 'next/image';
import styles from './donations.module.css';

const Donations = () => {
  const donations = [
    {
      id: 1,
      name: "John Doe",
      date: "01/11/2024",
      type: "One-time",
      amount: "R 550",
      image: "/noavatar.png"
    },
    {
      id: 2,
      name: "Jane Doe",
      date: "01/11/2024",
      type: "Item",
      amount: "5",
      image: "/noavatar.png"
    },
    {
      id: 3,
      name: "John Smith",
      date: "01/01/2025",
      type: "Monetary",
      amount: "R1 500",
      image: "/noavatar.png"
    },
    {
      id: 4,
      name: "Jane Smith",
      date: "01/01/2025",
      type: "Service",
      amount: "2.5",
      image: "/noavatar.png"
    }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recent Donations</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Donation Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation.id} className={styles.tableRow}>
                <td>
                  <div className={styles.donor}>
                    <div className={styles.imageWrapper}>
                      <Image 
                        src={donation.image} 
                        alt={`${donation.name}'s avatar`} 
                        width={32} 
                        height={32} 
                        className={styles.image}
                      />
                    </div>
                    <span className={styles.donorName}>{donation.name}</span>
                  </div>
                </td>
                <td>{donation.date}</td>
                <td>
                  <span className={`${styles.badge} ${styles[`badge${donation.type}`]}`}>
                    {donation.type}
                  </span>
                </td>
                <td>{donation.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Donations;