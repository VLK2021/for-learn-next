import styles from './id.module.css';


const Page = ({params}) => {
    return (
        <main className={styles.wrap}>
            <h1>{params.id}</h1>
        </main>
    );
};

export default Page;