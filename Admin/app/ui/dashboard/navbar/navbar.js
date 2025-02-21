// navbar.js
"use client";

import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import { MdSearch, MdNotifications, MdSettings, MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>
        <div className={styles.searchContainer}>
          <MdSearch className={styles.searchIcon} />
          <input 
            className={styles.searchInput} 
            type="text" 
            placeholder="Search..."
            aria-label="Search" 
          />
        </div>
        
        <div className={styles.actions}>
          <button className={styles.iconButton} aria-label="Notifications">
            <MdNotifications />
            <span className={styles.badge}>2</span>
          </button>
          <button className={styles.iconButton} aria-label="Settings">
            <MdSettings />
          </button>
          <button className={styles.profileButton} aria-label="Profile">
            <MdAccountCircle />
            <span className={styles.profileText}>Profile</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
