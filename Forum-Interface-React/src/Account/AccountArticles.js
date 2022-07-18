import ArticleList from "../Articles/ArticleList";
import useFetch from "../useFetch";

const AccountArticles = () => {

    const {data: articles, isPending, error} = useFetch('http://localhost:8000/articles')

    return ( 
        <div className="account-articles">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }  
            { articles && <ArticleList articles = { articles }/>}
        </div>


     );
}
 
export default AccountArticles;