import './Header.scss'
import logo from '../../assets/oozou-logo.png'

function Header() {
    return ( 
        <div className='header-wrapper'>
            <a className='logo-link' href='/'>
                <img className='logo' src={logo} />
            </a>
            <div className='nav-right'>
                <a className='nav-link' href='https://oozou.com/'>
                    Work
                </a>
                <a className='nav-link' href='https://oozou.com/blog'>
                    Blog
                </a>
                <a className='nav-link' href='https://oozou.com/careers'>
                    Careers
                </a>
            </div>
        </div>
     );
}

export default Header;