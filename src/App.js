import Navbar from './Navbar';
import ArticleSite from './ArticleSite';

function App() {
  const title = 'Forum'

  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <ArticleSite /> 
      </div>
    </div>
  );
}

export default App;
