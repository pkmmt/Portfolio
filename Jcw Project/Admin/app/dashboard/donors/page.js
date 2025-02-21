// DonorsPage.js
"use client"

import { useState } from 'react';
import Link from 'next/link';
import styles from '@/app/ui/dashboard/donors/donors.module.css';
import Search from '@/app/ui/dashboard/search/search';
import TotalDonors from '@/app/ui/dashboard/donors/totaldonors/totaldonors';
import MonetaryDonors from '@/app/ui/dashboard/donors/mdonors/mdonors';
import ItemDonors from '@/app/ui/dashboard/donors/idonors/idonors';
import ServiceDonors from '@/app/ui/dashboard/donors/sdonors/sdonors';
import Paging from '@/app/ui/dashboard/paging/paging';
import { MdTrendingDown, MdTrendingUp } from 'react-icons/md';

const Card = ({ title, amount, icon, info, isSelected, onClick }) => (
  <button 
    className={`${styles.card} ${isSelected ? styles.selectedCard : ''}`} 
    onClick={onClick}
  >
    <div className={styles.cardContent}>
      <h3>{title}</h3>
      <div className={styles.cardDetails}>
        <span className={styles.amount}>{amount}</span>
        <div className={styles.trend}>
          {icon}
          <span>{info}</span>
        </div>
      </div>
    </div>
  </button>
);

const DonorsPage = () => {
  const [selectedCard, setSelectedCard] = useState('total');

  const cards = [
    {
      id: 'total',
      title: 'Total Donations',
      amount: '45',
      icon: <MdTrendingDown className={styles.trendDown} />,
      info: '3% decrease'
    },
    {
      id: 'monetary',
      title: 'Monetary Donations',
      amount: '45',
      icon: <MdTrendingDown className={styles.trendDown} />,
      info: '3% decrease'
    },
    {
      id: 'item',
      title: 'Item Donations',
      amount: '30',
      icon: <MdTrendingUp className={styles.trendUp} />,
      info: '4% increase'
    },
    {
      id: 'service',
      title: 'Service Donations',
      amount: '25',
      icon: <MdTrendingUp className={styles.trendUp} />,
      info: '6% increase'
    }
  ];

  const DonorComponents = {
    total: TotalDonors,
    monetary: MonetaryDonors,
    item: ItemDonors,
    service: ServiceDonors
  };

  const SelectedDonorComponent = DonorComponents[selectedCard];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.cardsGrid}>
        {cards.map(card => (
          <Card
            key={card.id}
            {...card}
            isSelected={selectedCard === card.id}
            onClick={() => setSelectedCard(card.id)}
          />
        ))}
      </div>

      <div className={styles.controlsContainer}>
        <div className={styles.searchBar}>
          <Search placeholder="Search for a donor..." />
          <Link href="/dashboard/donors/add">
            <button className={styles.addButton}>Add Donor</button>
          </Link>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <SelectedDonorComponent />
      </div>

      <div className={styles.pagination}>
        <Paging />
      </div>
    </div>
  );
};

export default DonorsPage;
