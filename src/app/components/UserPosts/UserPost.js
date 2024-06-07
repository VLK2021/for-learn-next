import styles from './UserPost.module.css';


const UserPost = ({post}) => {
    const {userId, id, title, body} = post;


    return (
        <main className={styles.wrap}>
            <p>{userId}</p>
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>
        </main>
    );
};

export default UserPost;