import '../statics/Navbar.css';
import { Link } from 'react-router-dom';

const handleAddTodo = () => {
    console.log("todo add button")
}

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <ul className="nav__links">
                <li className='hover__border'><Link to="/">Home</Link></li>
                <li><button onClick={() => handleAddTodo()} className='Navbar__Add'>Add Todo</button></li>
            </ul>
        </nav>        
     );
}
 
export default Navbar;