import Link from "next/link";

import styles from './header.module.css'


const Header = () => {
    return (
        <main className={styles.wrap}>
            <ul className={styles.ul}>
                <li className={styles.li}><Link href={'users'}>Users</Link></li>
                <li className={styles.li}><Link href={'posts'}>Posts</Link></li>
            </ul>
        </main>
    );
};

export default Header;