import { Link } from "react-router-dom";
import deletePost from './deletePost'

const BlogList = ({ posts, setUpdateFlag, updateFlag }) => {

	return (
		<div className='blog'>
			{posts.map((post) => (
				<div className='post-preview' key={post.id}>
					<Link to={`/blogs/${post.id}`}>
						<h2>{post.title}</h2>
						<p>{post.author}</p>
					</Link>
					<button onClick={() => {deletePost(post.id, setUpdateFlag(!updateFlag))}} className='btn-delete'>Delete</button>
				</div>
			))}
		</div>
	);
};

export default BlogList;
