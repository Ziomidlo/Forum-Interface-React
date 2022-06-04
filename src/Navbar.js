import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
       <nav className="navbar">

           <div className="homeLink">
           <Link to="/">Przegladaj artykuly</Link>
           <p>Witaj na forum</p>
           </div>
           <div className="links">
               <Link to="/add" style={{
                   color: "white",
                   backgroundColor: '#f1356d',
                   borderRadius: '8px'
               }}>Dodaj artykul</Link>
               <Link to="/account">Konto</Link>
           </div>
       </nav>
      );
}
 
export default Navbar;