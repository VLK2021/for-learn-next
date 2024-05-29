"use client"


const User = (props) => {
    const {user: {id, name}} = props;


    return (
        <main>
            {name}
        </main>
    );
};

export default User;