//якщо потрібна буде додатковалогіка то пропишемо 'use client'
import Link from "next/link";


const Post = ({post}) => {


    return (
        <div>
            <Link href={'/'}>Back</Link> <br/>

            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <strong>Avtor ID: {post.userId}</strong>
        </div>
    );
};

export default Post;