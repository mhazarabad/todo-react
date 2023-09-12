import '../statics/Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AddTodoModal from './AddTodoModal';


const Navbar = () => {

    const [showModal, setShowModal] = useState(false);

    return ( 
        <div>
            <nav className="navbar">
            <ul className="nav__links">
                <li className='hover__border'><Link to="/">Home</Link></li>
                <li><button onClick={() => setShowModal(true)} className='Navbar__Add'>Add Todo</button></li>
            </ul>
        </nav>
        <AddTodoModal show={showModal} setModal={setShowModal}/>
        </div>
     );
}
 
export default Navbar;