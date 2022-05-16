import { useState } from "react";

const AddComment = () => {
    
    const [body, setBody] = useState('');
    const [user, setUser] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = () => {
        const comment = {body, user};

        setIsPending(true);

        fetch('http://localhost:8000/comments', {
            method: 'POST', 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(comment)
        }).then(() => {
            setIsPending(false);
        })
    }

    return ( 
        <div className="add-comment">
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
                { !isPending && <button>Dodaj Komentarz</button> }
                {isPending && <h4>Dodano nowy komentarz!</h4>}
            </form>
        </div>  
     );
}
 
export default AddComment;