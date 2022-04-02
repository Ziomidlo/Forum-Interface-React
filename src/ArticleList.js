const ArticleList = ({articles, handleDelete}) => {

    return (
        <div className="article-list">
            <h1>Artykuły</h1>
            {articles.map((article) => (
            <div className="article-preview" key={article.id}>
            <h2>{ article.title }</h2>
            <p>Stworzony przez: { article.user }</p>
            <p>Liczba komenatrzy: { article.commentsNumber }</p>
            </div>
        ))}
        </div>
      );
}
 
export default ArticleList;