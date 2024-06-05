import {userService} from "../../../../services/user-service";

import styles from './user-posts.module.css';
import UserPost from "../../../components/UserPosts/UserPost";


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
                {userPostsData.data.map(obj => <UserPost key={obj.userId} post={obj}/>)}
            </main>
        );
    } else {
        return null;
    }
};

export default UserAllPosts;