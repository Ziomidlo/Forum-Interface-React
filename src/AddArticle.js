import { useState } from "react";

const AddArticle = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [user, setUser] = useState('');
    const [isPending, setIsPending] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const article = { title, body, user};

        setIsPending(true);

        fetch('http://localhost:8000/articles', {
            method: 'POST', 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(article)
        }).then(() => {
            console.log('dodano nowy artykuł.');
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
                <select
                    required
                    value={ user }
                    onChange={(e) => setUser(e.target.value)}
                >
                    <option value="u1">u1</option>
                    <option value="uzytkownik">uzytkownik</option>
                </select>
                { !isPending && <button>Dodaj Artykuł</button> }
                { isPending && <button disabled>Dodawanie artykułu...</button> }
            </form>
        </div>
      );
}
 
export default AddArticle;