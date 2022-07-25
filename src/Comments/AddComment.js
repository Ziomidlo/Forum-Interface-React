import { useState} from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../useFetch";

const AddComment = () => {
    
    const [body, setBody] = useState('');
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const { data: article, error, isPending} = useFetch(`http://localhost:8000/articles/${id}`);

    const handleSubmit = () => {
        const comment = {article, body, user};

            setLoading(true);

            const requestOptions = {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(comment)
            };
            fetch('http://localhost:8000/comments', requestOptions )
            .then(() => {
            setLoading(false);
            })
    }

    return ( 
        <div className="add-comment">
            {error && <div> {error} </div>}
            <h3>Dodaj Nowy Komentarz</h3>
            <form onSubmit={handleSubmit}>
                <label>Zawartość komentarza:</label>
                <textarea
                    required
                    value={ body }
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Autor: </label>
                <input
                    type = "text"
                    required
                    value={ user }
                    onChange={(e) => setUser(e.target.value)}
                />
                {!loading && <button>Dodaj Komentarz</button> }
                {loading && <h4>Dodano nowy komentarz!</h4>}
            </form>
        </div>  
     );
}
 
export default AddComment;