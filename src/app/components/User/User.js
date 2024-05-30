"use client"


import Link from "next/link";

const User = (props) => {
    const {user: {id, name}} = props;


    return (
        <main>
            {name}
            <Link href={`/users/${id}`}>
                <button>details</button>
            </Link>
        </main>
    );
};

export default User;