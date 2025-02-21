"use client"

import Donations from "@/app/ui/dashboard/donations/donations";
import styles from "@/app/ui/dashboard/dashboard.module.css";
import Graph from "@/app/ui/dashboard/graph/graph";
const DonationsPage= () => {
  return (
    <div className={styles.box}>
      <div className={styles.main}>
        <Graph />
        <Donations />
      </div>
    </div>
  );
};

export default DonationsPage;
