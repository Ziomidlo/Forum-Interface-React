import Navbar from './Navbar';
import ArticleSite from './Articles/ArticleSite';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddArticle from './Articles/AddArticle';
import AccountArticles from './Account/AccountArticles';
import ArticleDelete from './Articles/ArticleDelete';
import CommentSite from './Comments/CommentSite';
import AddComment from './Comments/AddComment';
import CommentDelete from './Comments/CommentDelete';
import AccountComments from './Account/AccountComments';
import ArticleCounter from './Account/ArticleCounter';
import CommentCounter from './Account/CommentCounter';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
         <Route exact path="/">
            <ArticleSite />
           </Route>
           <Route path="/add">
            <AddArticle />
           </Route> 
           <Route path="/account">
           <ArticleCounter />
           <AccountArticles />
           <CommentCounter />
           <AccountComments />
           </Route> 
           <Route path="/articles/:id">
            <ArticleDelete />
            <CommentSite /> 
            <AddComment />
           </Route> 
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
