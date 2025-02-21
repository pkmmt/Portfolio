import styles from './mdonors.module.css';
import Image from 'next/image';
import Link from 'next/link';

const MonetaryDonors = () => {
  const donors = [
    {
      id: 1,
      name: "Zandile Dlamini",
      date: "01/11/2024",
      paymentType: "One-time",
      amount: "R 550"
    },
    {
      id: 2,
      name: "Jane Doe",
      date: "01/11/2024",
      paymentType: "Item",
      amount: "5"
    },
    {
      id: 3,
      name: "Will Smith",
      date: "01/01/2025",
      paymentType: "Monetary",
      amount: "R1 500"
    },
    {
      id: 4,
      name: "Jane Smith",
      date: "01/01/2025",
      paymentType: "Service",
      amount: "2.5"
    }
  ];

  const handleDelete = (id) => {
    // Add delete functionality here
    console.log(`Delete donor with id: ${id}`);
  };

  const formatAmount = (amount, paymentType) => {
    if (paymentType === "Service") return `${amount} hrs`;
    if (paymentType === "Item") return `${amount} items`;
    return amount;
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Monetary Donors</h2>
        <button className={styles.addButton}>Add New Donor</button>
      </header>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Payment Type</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor) => (
              <tr key={donor.id}>
                <td>
                  <div className={styles.donor}>
                    <div className={styles.avatarWrapper}>
                      <Image
                        src="/noavatar.png"
                        alt={`${donor.name}'s avatar`}
                        width={32}
                        height={32}
                        className={styles.avatar}
                      />
                    </div>
                    <span className={styles.donorName}>{donor.name}</span>
                  </div>
                </td>
                <td>{donor.date}</td>
                <td>
                  <span className={`${styles.badge} ${styles[donor.paymentType.toLowerCase()]}`}>
                    {donor.paymentType}
                  </span>
                </td>
                <td>{formatAmount(donor.amount, donor.paymentType)}</td>
                <td>
                  <div className={styles.actions}>
                    <Link href={`/dashboard/donors/${donor.id}`} className={styles.detailsButton}>
                      Details
                    </Link>
                    <button 
                      className={styles.deleteButton}
                      onClick={() => handleDelete(donor.id)}
                      aria-label={`Delete ${donor.name}`}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MonetaryDonors;