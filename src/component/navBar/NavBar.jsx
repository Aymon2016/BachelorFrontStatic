import './navbar.scss'
import { Link } from "react-router-dom"
const NavBar = () => {
    return (
        <div className="navbar" style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/millpage">Mill</Link></li>
                <li><Link to="/memberpage">Member</Link></li>
                <li><Link to="/noticepage">Notice</Link></li>
            </ul>

        </div >
    )
}

export default NavBar