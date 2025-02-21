import styles from './idonors.module.css';
import Image from 'next/image';
import Link from 'next/link';

const ItemDonors = () => {
  const donors = [
    {
      id: 1,
      name: "Zandile Dlamini",
      date: "01/11/2024",
      type: "One-time",
      amount: "R 550",
      category: "Monetary"
    },
    {
      id: 2,
      name: "Jane Doe",
      date: "01/11/2024",
      type: "Item",
      amount: "5",
      category: "Goods"
    },
    {
      id: 3,
      name: "John Smith",
      date: "01/01/2025",
      type: "Monetary",
      amount: "R1 500",
      category: "Finance"
    },
    {
      id: 4,
      name: "Mr Smith",
      date: "01/01/2025",
      type: "Service",
      amount: "2.5",
      category: "Hours"
    }
  ];

  const handleDelete = (id) => {
    // Add delete functionality here
    console.log(`Delete donor with id: ${id}`);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Item Donors</h2>
        <button className={styles.addButton}>Add New Donor</button>
      </header>
      
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Category</th>
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
                <td>{donor.type}</td>
                <td>{donor.amount}</td>
                <td>{donor.category}</td>
                <td>
                  <div className={styles.actions}>
                    <Link href={`/dashboard/donors/${donor.id}`} className={styles.detailsButton}>
                      Details
                    </Link>
                    <button 
                      className={styles.deleteButton}
                      onClick={() => handleDelete(donor.id)}
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

export default ItemDonors;