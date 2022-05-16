import { useState } from "react";

const AddArticle = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [user, setUser] = useState('');
    const [isPending, setIsPending] = useState(false);


    const handleSubmit = () => {
        const article = { title, body, user};

        setIsPending(true);

        fetch('http://localhost:8000/articles', {
            method: 'POST', 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(article)
        }).then(() => {
            setIsPending(false);
        })
    }
    return (
        <div className="add-article">
            <h2>Dodaj Nowy Artykuł</h2>
            <form onSubmit={handleSubmit}>
                <label>Tytuł artykułu:</label>
                <input
                    type="text"
                    required
                    value={ title }
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Zawartość artykułu:</label>
                <textarea
                    required
                    value={ body }
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Autor artykułu:</label>
                <input
                    type = "text"
                    required
                    value={ user }
                    onChange={(e) => setUser(e.target.value)}
                />
                 {!isPending && <button>Dodaj Artykuł</button>}
                 {isPending && <h3>Dodano nowy artykuł!</h3>}       
            </form>          
        </div>
      );
}
 
export default AddArticle;