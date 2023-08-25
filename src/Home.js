import BlogList from './BlogList'
import useFetch from './useFetch'
import { server } from './fetch'

const Home = () => {
    const {data, isLoading, error} = useFetch(server);

	return (
		<div className='home'>
            { error && <div>{error}</div>}
            { isLoading && <h3>Loading...</h3>}
            { data && <BlogList posts={data} /> }
		</div>
	);
};

export default Home;
