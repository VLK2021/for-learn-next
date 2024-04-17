import styles from './userId.module.css';


const Page = ({params}) => {
    return (
        <main className={styles.wrap}>
            <h1>USERID {params.userId}</h1>
        </main>
    );
};

export default Page;