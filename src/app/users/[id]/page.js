import Link from "next/link";

import styles from './single-user.module.css';
import {userService} from "../../../services/user-service";


export const metadata = {
    title: "page single user",
    description: "page single user",
    keywords: 'user, name, single'
};


const UserById = async ({params: {id}}) => {
    const userData = await userService.getSingleUser(id)

    if (userData) {
        return (
            <main className={styles.wrap}>
                <section>
                    <Link href={'/users'}>
                        <button className={styles.btn}>back</button>
                    </Link>
                </section>

                {userData.data.name}
            </main>
        )
    } else {
        return null;
    }

}

export default UserById;