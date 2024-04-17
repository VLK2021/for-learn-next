import styles from './current.module.css';


const Page = ({params}) => {
    return (
        <main className={styles.wrap}>
            <h1>{params.current}</h1>
        </main>
    );
};

export default Page;