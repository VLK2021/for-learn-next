"use client"
import Link from "next/link";

import styles from './User.module.css';


const User = (props) => {
    const {user: {id, name}} = props;


    return (
        <main className={styles.wrap}>
            <p className={styles.name}>{name}</p>

            <section className={styles.links}>
                <Link href={`/users/${id}`}>
                    <button className={styles.btn}>details</button>
                </Link>

                <Link href={`/users/${id}/posts`}>
                    <button className={styles.btn}>posts</button>
                </Link>
            </section>

        </main>
    );
};

export default User;