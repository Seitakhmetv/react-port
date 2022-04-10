import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub, faTelegram, faDiscord} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/seitsushima/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/Seitakhmetv/'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://t.me/bluffbluff'>
                    <FontAwesomeIcon icon={faTelegram} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://discordapp.com/users/562164848813801487/'>
                    <FontAwesomeIcon icon={faDiscord} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar