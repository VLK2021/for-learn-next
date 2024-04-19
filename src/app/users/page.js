import {fetch} from "next/dist/compiled/@edge-runtime/primitives";


async function fetchData() {
    const res = await fetch('http://localhost:3000/api/data');
    return await res.json();
}

const Page = async () => {
    const users = await fetchData();


    return (
        <div>
            {users.map(el => (
                <div key={el.id} className={'post'}>
                    <h2>{el.name}</h2>
                    <p>{el.age}</p>
                    <p>{el.bio}</p>
                </div>
            ))}
        </div>
    );
};

export default Page;