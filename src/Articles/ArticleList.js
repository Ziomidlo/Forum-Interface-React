import { Link } from "react-router-dom";

const ArticleList = ({articles, handleDelete}) => {

    return (
        <div className="article-list">
            <h1>Artykuły</h1>
            {articles.map((article) => (
                <div className="article-preview" key={article.id}>
                    <Link to = {`/articles/${article.id}`}>
                        <h2>{ article.title }</h2>  
                    </Link>
                    <p>Stworzony przez: { article.user }</p> 
                </div>
            ))}
        </div>
    );
}
 
export default ArticleList;