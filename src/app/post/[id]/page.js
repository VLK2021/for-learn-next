import Post from "../../components/Post";


export async function generateMetadata({params, searchParams}) {
    const post = await fetchData(params.id);

    return {
        title: post.title + `- id${params.id}`,
        description: post.body,
        keywords: 'name, age'
    }
}


async function fetchData(id) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    return await res.json();

}


const PagePost = async ({params: {id}}) => {
    const post = await fetchData(id);


    return (
        <main className={'post'}>
            <Post post={post}/>
        </main>
    );
};

export default PagePost;