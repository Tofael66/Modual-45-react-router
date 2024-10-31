
import { Link, NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {

    return (
        <div>
            <h2> Navber</h2>

            <nav className="nav">
               
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">User</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/post">Post</NavLink>
                
                
                
           
              
            
              
              
            </nav>
            
        </div>
    );
};

export default Header;