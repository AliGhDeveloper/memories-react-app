import './styles.css'
import memories from '../../images/memories.png';
import { Navbar } from 'react-bootstrap';

function AppBar(){
    return (
        <nav className="AppBar my-3">
            <Navbar>
                <Navbar.Brand>Memories</Navbar.Brand>
                <img src={memories} />
            </Navbar>
        </nav>
    )
}

export default AppBar;