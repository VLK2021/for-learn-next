import styles from './single-user.module.css';


const UserById = ({params: {id}}) => {

    return(
        <main className={styles.wrap}>
            {id}
        </main>
    )
}

export default UserById;