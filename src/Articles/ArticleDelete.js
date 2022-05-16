import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../useFetch";

const ArticleDelete = () => {

    const { id } = useParams();
    const { data: article, error, isPending } = useFetch('http://localhost:8000/articles/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/articles/'  + article.id, {
        method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="article-delete">
            { isPending && <div>Usuwanie...</div> }
            { error && <div>{ error }</div> }
            { article && (
                <article>
                    <h2>{ article.title }</h2>
                    <p>Stworzony przez { article.user }</p>
                    <div>{ article.body }</div>
                    <button onClick = { handleClick }>usun</button>
                </article>
            )}
        </div>
     );
}
 
export default ArticleDelete;