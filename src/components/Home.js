import { useEffect, useState } from 'react';
import BlogList from './BlogList'

const Home = () => {

    // const handleDel = (id) => {
    //     const newPosts = posts.filter((post) => post.id !== id);
    //     setPosts(newPosts);
    // }

    const [posts, setPosts] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/posts')
        .then((response) => {
            if (response.ok != true) {
                throw Error('Не могу получить данные из этого ресурса!')
            }
            return response.json()
        })
        .then((data) => {
            setPosts(data)
            setLoading(false)
            setError(null)
        })
        .catch((error) => {
            setError(error.message)
            setLoading(false)
        })
    }, [])

	return (
		<div className='home'>
            {error && <div>{error}</div>}
            {isLoading && <div>loading...</div>}
            {posts && <BlogList posts={posts} />}
		</div>
	);
};

export default Home;