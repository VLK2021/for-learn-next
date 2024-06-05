import Link from "next/link";

import styles from './single-user.module.css';
import {userService} from "../../../services/user-service";


export const metadata = {
    title: "page single user",
    description: "page single user",
    keywords: 'user, name, single'
};


const UserById = async ({params: {id}}) => {
    const userData = await userService.getSingleUser(id);
    const {
        name, username, email,
        address: {
            street, suite, city, zipcode,
            geo: {lat, lng}
        },
        phone, website,
        company: {catchPhrase, bs}
    } = userData.data;

    if (userData) {
        return (
            <main className={styles.wrap}>
                <section>
                    <Link href={'/users'}>
                        <button className={styles.btn}>back</button>
                    </Link>
                </section>

                <section className={styles.blockUser}>
                    <p className={styles.title}>{name}</p>
                    <p className={styles.info}>{username}</p>
                    <p className={styles.info}>{email}</p>

                    <article>
                        <p className={styles.title}>Address:</p>
                        <p className={styles.info}>{street}</p>
                        <p className={styles.info}>{suite}</p>
                        <p className={styles.info}>{city}</p>
                        <p className={styles.info}>{zipcode}</p>

                        <article>
                            <p className={styles.title}>Geolocation:</p>
                            <p className={`${styles.info} ${styles.info1}`}>{lat}</p>
                            <p className={`${styles.info} ${styles.info1}`}>{lng}</p>
                        </article>
                    </article>
                </section>
            </main>
        )
    } else {
        return null;
    }

}

export default UserById;