import styles from './UserPost.module.css';


const UserPost = ({post}) => {
    return (
        <main className={styles.wrap}>
            {post.title}
        </main>
    );
};

export default UserPost;