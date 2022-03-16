import {Link} from 'react-router-dom'
function Header(){
    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About/phones/iphone300">About</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
        </ul>
    )
}

export default Header