import styles from './header.module.css'

import UlForHeader from "../UlForHeader/UlForHeader";


const Header = () => {


    return (
        <main className={styles.wrap}>
            <UlForHeader/>
        </main>
    );
};

export default Header;