import {fetch} from "next/dist/compiled/@edge-runtime/primitives";



export const getPostBySearch = async (search) => {
    const response = await fetch((`https://jsonplaceholder.typicode.com/posts?q=${search}`));

    return response.json();
}