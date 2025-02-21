"use client";
import React from 'react';
import Sidebar from '@/app/ui/dashboard/sidebar/sidebar';
import styles from '@/app/ui/dashboard/dashboardLayout.module.css';

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;