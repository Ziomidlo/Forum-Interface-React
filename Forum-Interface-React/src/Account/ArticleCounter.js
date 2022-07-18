import useFetch from "../useFetch";

const ArticleCounter = () => {

    const { data: article, error} = useFetch('http://localhost:8000/articles/');
    
    return ( 
        <div className="article-counter">
            { error && <div>{ error }</div> }      
            { article && (
                <article>
                <h3>Ilość napisanych artykułów: {article.length}</h3>    
                </article>
            )}
        </div>
    );
}
 
export default ArticleCounter;