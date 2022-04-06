import Navbar from './Navbar';
import ArticleSite from './ArticleSite';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddArticle from './AddArticle';
import Account from './Account';
import ArticleDetails from './ArticleDetails';

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
            <Account />
           </Route> 
           <Route path="/articles/:id">
            <ArticleDetails />
           </Route> 
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
