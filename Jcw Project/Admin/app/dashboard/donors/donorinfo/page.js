// UserProfileCard.js
import React from 'react';
import '@/app/ui/dashboard/donors/donorinfo/donorinfo.module.css';

const DonorInfo = ({ user }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{user.name}</h2>
      <div className={styles.info}>
        <p><strong>Amount Donated:</strong> ${user.amountDonated.toFixed(2)}</p>
        <p><strong>Type:</strong> {user.isIndividual ? 'Individual' : 'Company'}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phoneNumber}</p>
        <p><strong>ID:</strong> {user.id}</p>
      </div>
    </div>
  );
};

export default DonorInfo;