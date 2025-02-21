"use client"

import { usePathname, useSearchParams } from 'next/navigation';
import styles from './search.module.css';
import { MdSearch } from 'react-icons/md';
import { useRouter } from 'next/navigation';

const Search = () => {

    return (
        <div className={styles.container}>
            <MdSearch className={styles.icon} />
            <input type="text"  className={styles.input}/>
        </div>
    );
}

export default Search;