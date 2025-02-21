import styles from './tdonors.module.css';
import Image from 'next/image';
import Link from 'next/link';

const TotalDonors = () => {
  const donors = [
    {
      id: "DON-2024-001",
      name: "John Doe",
      type: "Individual",
      date: "01/11/2024",
      email: "john.doe@email.com",
      phone: "+27 82 123 4567",
      donationType: "Monetary",
      status: "Active"
    },
    {
      id: "DON-2024-002",
      name: "Jane Doe",
      type: "Corporate",
      date: "01/11/2024",
      email: "jane.doe@company.com",
      phone: "+27 83 234 5678",
      donationType: "Item",
      status: "Active"
    },
    {
      id: "DON-2025-001",
      name: "John Smith",
      type: "Individual",
      date: "01/01/2025",
      email: "john.smith@email.com",
      phone: "+27 84 345 6789",
      donationType: "Monetary",
      status: "Active"
    },
    {
      id: "DON-2025-002",
      name: "Jane Smith",
      type: "Individual",
      date: "01/01/2025",
      email: "jane.smith@email.com",
      phone: "+27 85 456 7890",
      donationType: "Service",
      status: "Active"
    }
  ];

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete donor ${name}?`)) {
      console.log(`Deleting donor with ID: ${id}`);
    }
  };

  const getDonationTypeStyle = (type) => {
    const types = {
      'Monetary': 'monetary',
      'Item': 'item',
      'Service': 'service'
    };
    return types[type] || '';
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Total Donor List</h2>
        <div className={styles.headerActions}>
          <button className={styles.exportButton}>Export List</button>
          <button className={styles.addButton}>Add New Donor</button>
        </div>
      </header>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Donor Type</th>
              <th>Date</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Donation Type</th>
              <th>Donor ID</th>
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
                <td>
                  <span className={styles.donorType}>
                    {donor.type}
                  </span>
                </td>
                <td>{donor.date}</td>
                <td>
                  <a href={`mailto:${donor.email}`} className={styles.email}>
                    {donor.email}
                  </a>
                </td>
                <td>{donor.phone}</td>
                <td>
                  <span className={`${styles.badge} ${styles[getDonationTypeStyle(donor.donationType)]}`}>
                    {donor.donationType}
                  </span>
                </td>
                <td>
                  <span className={styles.donorId}>{donor.id}</span>
                </td>
                <td>
                  <div className={styles.actions}>
                    <Link 
                      href={`/dashboard/donors/${donor.id}`} 
                      className={styles.detailsButton}
                    >
                      Details
                    </Link>
                    <button 
                      className={styles.deleteButton}
                      onClick={() => handleDelete(donor.id, donor.name)}
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

export default TotalDonors;