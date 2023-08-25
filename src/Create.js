import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { server } from './fetch'

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('John Doe');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const clearForm = () => {
        setTitle('')
        setBody('')
        setAuthor('John Doe')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);

        setTimeout(() => {
            fetch(server, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(blog)
            }).then(() => {
                setIsPending(false);
                clearForm();
                navigate('/')
            })
        }, 500)
    }

    return (
        <div className="create">
            <h2>Add a new Post!</h2>
            <form onSubmit={handleSubmit}>
                <label>Post title</label>
                <input type="text" required value={title} onChange={(e) => {setTitle(e.target.value)}} />

                <label>Post content</label>
                <textarea value={body} onChange={(e) => {setBody(e.target.value)}}></textarea>

                <label>Author</label>
                <select value={author} onChange={(e) => {setAuthor(e.target.value)}}>
                    <option value="John Doe">John Doe</option>
                    <option value="Mary Jane">Mary Jane</option>
                    <option value="Tom Soyer">Tom Soyer</option>
                </select>

                {isPending && <button disabled>Adding post...</button>}
                {!isPending && <button>Create Post</button>}

            </form>
        </div>
    );
}

export default Create;