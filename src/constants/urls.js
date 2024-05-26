const users = '/users'
const posts = '/posts'

const urls = {
    users: {
        getAll: users,
        getSingle: (id) => `${users}/${id}`,
        getUserPosts:(id)=>`${users}/${id}/${posts}`

    },
    posts: {
        getAll: posts,
    }
}

export {urls}