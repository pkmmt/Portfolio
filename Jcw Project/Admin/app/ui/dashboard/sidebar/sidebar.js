"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './sidebar.module.css';
import { 
  MdAutoGraph,
  MdPerson,
  MdPeople,
  MdAltRoute,
  MdOutlineCases,
  MdLogout,
} from 'react-icons/md';

const MENU_ITEMS = [
  {
    title: "Dashboard",
    icon: <MdAutoGraph />,
    path: "/dashboard",
  },
  {
    title: "Donations",
    icon: <MdOutlineCases />,
    path: "/dashboard/donations",
  },
  {
    title: "Donor Management",
    icon: <MdPeople />,
    path: "/dashboard/donors",
  },
  {
    title: "Communications",
    icon: <MdAltRoute />,
    path: "/dashboard/communications",
  },
  {
    title: "Admins",
    icon: <MdPerson />,
    path: "/dashboard/admins",
  },
  {
    title: "Rep Management",
    icon: <MdPeople />,
    path: "/dashboard/repmanagement",
  },
  {
    title: "Reports",
    icon: <MdOutlineCases />,
    path: "/dashboard/reports",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.container}>
      <div className={styles.logoWrapper}>
        <Image 
          src="/logo.png" 
          alt="logo" 
          width={220} 
          height={80} 
          className={styles.logo}
        />
      </div>
      
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          {MENU_ITEMS.map((item) => (
            <li key={item.title} className={styles.listItem}>
              <Link
                href={item.path}
                className={`${styles.link} ${pathname === item.path ? styles.active : ''}`}
              >
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.title}>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className={styles.footer}>
        <Link
          href="/login"
          className={styles.logoutButton}
        >
          <span className={styles.icon}><MdLogout /></span>
          <span className={styles.title}>Logout</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
