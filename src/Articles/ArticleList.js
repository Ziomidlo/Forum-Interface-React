import { Link } from "react-router-dom";

const ArticleList = ({articles}) => {

    return (
        <div className="article-list">
            <h1>Artykuły</h1>
            {articles.map((article) => (
                <div className="article-preview" key={article._id}>
                    <Link to = {`/articles/${article._id}`}>
                        <h2>{ article.title }</h2>  
                    </Link>
                    <p>Stworzony przez: { article.user }</p> 
                </div>
            ))}
        </div>
    );
}
 
export default ArticleList;