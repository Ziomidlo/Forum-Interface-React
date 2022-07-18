import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../useFetch";

const SingleArticle = () =>  {


    const { id } = useParams();
    const { data: article, error, isPending } = useFetch("http://localhost:8000/articles/" + id);

    return (
        <div className="article-delete">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { article && (
                <article>
                    <h2>{ article.title }</h2>
                    <p>Stworzony przez { article.user }</p>
                    <div>{ article.body }</div>
                    <div>{article.date}</div>
                </article>
            )}
        </div>
     );
     
}
 
export default SingleArticle;