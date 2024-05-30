import styles from './single-user.module.css';


export const metadata = {
    title: "page single user",
    description: "page single user",
    keywords: 'user, name, single'
};


const UserById = ({params: {id}}) => {

    return(
        <main className={styles.wrap}>
            {id}
        </main>
    )
}

export default UserById;