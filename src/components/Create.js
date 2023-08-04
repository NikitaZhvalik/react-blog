import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('John Joe');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);

        fetch('http://localhost:8000/posts', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            setIsPending(false);
            setTitle('');
            setBody('');
            navigate('/');
        })
    }

    return (
        <div className="create">
            <h2>new post</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Post title</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>

                <label>Post content</ label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>

                <label htmlFor="">Author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="John Joe">John Joe</option>
                    <option value="Mary Jane">Mary Jane</option>
                    <option value="Tom Soyer">Tom Soyer </option>
                </select>

                {isPending && <button disabled>Add post...</button>}
                {!isPending && <button>Create post</button>}
            </form>
        </div>
    );
}

export default Create;