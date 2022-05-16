import ArticleList from "./ArticleList";
import useFetch from "../useFetch";


const ArticleSite = () => {
    const { data: articles, isPending, error } = useFetch('http://localhost:8000/articles')
    return (
        <div className="ArticleSite">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { articles && <ArticleList articles = { articles }/>}
        </div>
    );
}
 
export default ArticleSite;