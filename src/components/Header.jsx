import '../style/components/header.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo_header.svg'

function Header() {
    return (
        <nav className='navbarre'>
                <img className='navbarre__logo' alt='Logo de kasa' src={Logo} />
            <ul className='link'>
                <li>
                    <NavLink to="/" className='link__accueil'>
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className='link__propos'>
                        A Propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header