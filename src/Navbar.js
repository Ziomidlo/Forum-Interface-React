import { useState } from "react";
import ArticleSite from "./ArticleSite";

const Navbar = () => {

    const  [user, setUser] = useState('Ziomidlo');

    return (
       <nav className="navbar">

           <div className="homeLink">
           <a href="/">Przegladaj artykuly</a>
           <p>Witaj { user }</p>
           </div>
           <div className="links">
               <a href="/create" style={{
                   color: "white",
                   backgroundColor: '#f1356d',
                   borderRadius: '8px'
               }}>Dodaj artykul</a>
               <a href="/">Konto</a>
           </div>
       </nav>
      );
}
 
export default Navbar;