import {userService} from "../../../../services/user-service";

import styles from './user-posts.module.css';
import UserPost from "../../../components/UserPosts/UserPost";
import Link from "next/link";


export const metadata = {
    title: "page user posts",
    description: "page user posts",
    keywords: 'user, name, posts'
};


const UserAllPosts = async ({params: {id}}) => {
    const userPostsData = await userService.getUserPosts(id);

    if (userPostsData) {
        return (
            <main className={styles.wrap}>
                <section>
                    <Link href={`/users/${id}`}>
                        <button className={styles.btn}>back</button>
                    </Link>
                </section>

                {userPostsData.data.map(obj => <UserPost key={obj.userId} post={obj}/>)}
            </main>
        );
    } else {
        return null;
    }
};

export default UserAllPosts;