"use client"

import Card from "../ui/dashboard/card/card";
import styles from "../ui/dashboard/dashboard.module.css";
import Donations from "../ui/dashboard/donations/donations";
import Graph from "../ui/dashboard/graph/graph";
import { MdAutoGraph, MdTrendingUp, MdTrendingDown } from 'react-icons/md';

const Dashboard = () => {
  const cardData = [
    {
      title: "Total Donations",
      amount: "R2 881 000",
      icon: <MdTrendingUp size={24} />,
      info: "12% increase",
      trend: "positive"
    },
    {
      title: "New Donors",
      amount: "1500",
      icon: <MdTrendingUp size={24} />,
      info: "5% increase",
      trend: "positive"
    },
    {
      title: "Pending Donations",
      amount: "45",
      icon: <MdTrendingDown size={24} />,
      info: "3% decrease",
      trend: "negative"
    }
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        <div className={styles.cardGrid}>
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              amount={card.amount}
              icon={card.icon}
              info={card.info}
              trend={card.trend}
            />
          ))}
        </div>
        <div className={styles.graphSection}>
          <Graph />
        </div>
        <div className={styles.donationsSection}>
          <Donations />
        </div>
      </div>
    </div>
 
  );
}

export default Dashboard;
