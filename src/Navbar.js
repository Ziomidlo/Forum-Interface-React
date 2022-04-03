import { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const  [user, setUser] = useState('Ziomidlo');

    return (
       <nav className="navbar">

           <div className="homeLink">
           <Link to="/">Przegladaj artykuly</Link>
           <p>Witaj { user }</p>
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