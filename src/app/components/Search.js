'use client'
import {useState} from "react";



const Search = () => {
    const [search, setSearch] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const res = await fetch((`https://jsonplaceholder.typicode.com/posts?q=${search}`));
        const posts = await res.json();
        console.log(posts);

    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="search"
                   placeholder={'search'}
                   value={search || ''}
                   onChange={(event) => setSearch(event.target.value)}

            />

            <button type={'submit'}>Search</button>
        </form>
    );
};

export default Search;