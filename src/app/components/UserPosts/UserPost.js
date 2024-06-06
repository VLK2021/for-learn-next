import styles from './UserPost.module.css';


const UserPost = ({post}) => {
    const {userId, id, title, body} = post;


    return (
        <main className={styles.wrap}>
            {title}
        </main>
    );
};

export default UserPost;