"use client";

import { usePathname } from "next/navigation";
import styles from "./itemLink.module.css";
import Link from "next/link";

const ItemLink = ({ item }) => {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path ? styles.activeLink : ''}`}>
      {item.icon}
      {item.title}
    </Link>
  );
};

export default ItemLink;
