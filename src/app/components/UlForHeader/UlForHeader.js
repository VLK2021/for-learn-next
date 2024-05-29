"use client"
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./UlForHeader.module.css";


const UlForHeader = () => {
    const pathname = usePathname();

    return (
        <ul className={styles.ul}>
            <li className={classNames(styles.li, {active: pathname === '/users' })}>
                <Link href={"/users"}>Users</Link>
            </li>
            <li className={classNames(styles.li, {active: pathname === '/posts' })}>
                <Link href={"/posts"}>Posts</Link>
            </li>
        </ul>
    );
};

export default UlForHeader;