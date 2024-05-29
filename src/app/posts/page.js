import styles from './posts.module.css';


export const metadata = {
    title: "page posts",
    description: "page posts",
    keywords: 'post, name, age'
};


const Posts = () => {
    return (
        <main className={styles.wrap}>
            Posts
        </main>
    );
};

export default Posts;