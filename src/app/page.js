// import Link from "next/link";
// import Search from "./components/Search";
//
//
// async function fetchData() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const result = await res.json();
//     return result;
// }
//
//
// export default async function Home() {
//     const posts = await fetchData();
//
//
//     return (
//         <main>
//             <h1>I want learn NEXT</h1>
//
//             <section className={'searchBlock'}>
//                 <Search/>
//             </section>
//
//             {posts.map(el => (
//                     <div key={el.id} className={'post'}>
//                         <h2>{el.title}</h2>
//                         <p>{el.body}</p>
//                         <Link href={'/post/' + el.id}>Details</Link>
//                     </div>
//                 ))}
//         </main>
//     );
// }


'use client'

import Link from "next/link";
import Search from "./components/Search";
import {useEffect, useState} from "react";



export default function Home() {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/posts')
           .then(response => response.json())
           .then(value => setPosts(value))
   }, []);


    return (
        <main>
            <h1>I want learn NEXT</h1>

            <section className={'searchBlock'}>
                <Search setPosts={setPosts}/>
            </section>

            {posts.map(el => (
                <div key={el.id} className={'post'}>
                    <h2>{el.title}</h2>
                    <p>{el.body}</p>
                    <Link href={'/post/' + el.id}>Details</Link>
                </div>
            ))}
        </main>
    );
}
