import styles from './sdonors.module.css';
import Image from 'next/image';
import Link from 'next/link';

const ServiceDonors = () => {
  const donors = [
    {
      id: 1,
      name: "Zandile Dlamini",
      date: "01/11/2024",
      serviceType: "Teaching",
      location: "Cape Town Center",
      duration: "2 hours",
      status: "Completed"
    },
    {
      id: 2,
      name: "Jane Doe",
      date: "01/11/2024",
      serviceType: "Counseling",
      location: "Youth Center",
      duration: "1.5 hours",
      status: "Scheduled"
    },
    {
      id: 3,
      name: "John Smith",
      date: "01/01/2025",
      serviceType: "Maintenance",
      location: "Main Building",
      duration: "4 hours",
      status: "In Progress"
    },
    {
      id: 4,
      name: "Doja Smith",
      date: "01/01/2025",
      serviceType: "Medical Care",
      location: "Health Clinic",
      duration: "3 hours",
      status: "Completed"
    }
  ];

  const handleDelete = (id) => {
    // Add delete functionality here
    console.log(`Delete service record with id: ${id}`);
  };

  const getStatusStyle = (status) => {
    const statusStyles = {
      'Completed': 'completed',
      'Scheduled': 'scheduled',
      'In Progress': 'inProgress'
    };
    return statusStyles[status] || '';
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Service Donors</h2>
        <button className={styles.addButton}>Add New Service</button>
      </header>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Service Type</th>
              <th>Location</th>
              <th>Duration</th>
              <th>Status</th>
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
                  <span className={styles.serviceType}>
                    {donor.serviceType}
                  </span>
                </td>
                <td>{donor.location}</td>
                <td>{donor.duration}</td>
                <td>
                  <span className={`${styles.status} ${styles[getStatusStyle(donor.status)]}`}>
                    {donor.status}
                  </span>
                </td>
                <td>
                  <div className={styles.actions}>
                    <Link href={`/dashboard/services/${donor.id}`} className={styles.detailsButton}>
                      Details
                    </Link>
                    <button 
                      className={styles.deleteButton}
                      onClick={() => handleDelete(donor.id)}
                      aria-label={`Delete ${donor.name}'s service record`}
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

export default ServiceDonors;