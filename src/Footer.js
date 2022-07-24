import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
    return (
        <footer className="footer">
            <p>Copyrights 2022 Jakub Ziomek | kziomek33@gmail.com  |</p>
            <Link to="/admin">Panel Admnistratora</Link>
        </footer>
      );
}
 
export default Footer;