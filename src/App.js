import React from 'react';
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
import ArticleList from './Articles/ArticleList';
import SingleArticle from './Articles/SingleArticle';
import useFetch from './useFetch';
import Footer from './Footer';
import Admin from './Admin/Admin';
import SingleComment from './Comments/SingleComment';

  
class App extends React.Component{

render() {

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
            <SingleArticle />
            <AddComment />
            </Route>
           <Route path="/admin" >
           <Admin />
           </Route>
          </Switch>
          <div className="footer-app">
          <Footer />
           </div>
        </div>
      </div>
    </Router>
  );
}
}

export default App;
