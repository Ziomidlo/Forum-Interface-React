import Navbar from './Navbar';
import ArticleSite from './ArticleSite';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddArticle from './AddArticle';
import Account from './Account';

function App() {
  const title = 'Forum'

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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
