import '../style/components/header.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo_header.svg'

function Header() {
    return (
        <nav className='navbarre'>
                <img className='logo_header' alt='Logo de kasa' src={Logo} />
            <ul className='link'>
                <li>
                    <NavLink to="/" className='link_accueil'>
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className='link_propos'>
                        A Propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header