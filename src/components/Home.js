import BlogList from './BlogList'
import useFetch from './useFetch';

const Home = () => {

    // const handleDel = (id) => {
    //     const newPosts = posts.filter((post) => post.id !== id);
    //     setPosts(newPosts);
    // }

    const {data, isLoading, error} = useFetch('http://localhost:8000/posts');

	return (
		<div className='home'>
            {error && <div>{error}</div>}
            {isLoading && <div>loading...</div>}
            {data && <BlogList posts={data} />}
		</div>
	);
};

export default Home;