import Link from "next/link";

import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
      <h1>I want learn NEXT</h1>
        <ul>
            <li><Link href={'/users'}> Users</Link></li>
            <li><Link href={'/id'}>ID</Link></li>
            <li><Link href={'/users/posts'}>USERS-POSTS</Link></li>
        </ul>
    </main>
  );
}
