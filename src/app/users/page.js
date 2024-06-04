import styles from './users.module.css';
import {userService} from "../../services/user-service";
import User from "../components/User/User";


export const metadata = {
    title: "page users",
    description: "page users",
    keywords: 'user, name, age'
};


const Users = async () => {
    const usersData = await userService.getAll();

    if (usersData) {
        return (
            <main className={styles.wrap}>
                {usersData.data.map(obj => <User key={obj.id} user={obj}/>)}
            </main>
        );
    } else {
        return null;
    }

};

export default Users;