'use client'
import {useState} from "react";

// import {getPostBySearch} from "../../services/getPostsHelpers";


const Search = () => {
    const [search, setSearch] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // const posts = await getPostBySearch(search);
        // console.log(posts);
        console.log(event.target.value);
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