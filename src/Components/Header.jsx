import { useState, useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/OmniLogo.png';
import profileIcon from '../assets/profile-icon.png';


const Header = () => {
    const navigate = useNavigate();
    const logoutClick = (event) => {
        event.preventDefault();
        sessionStorage.removeItem('loginEmail');
        sessionStorage.removeItem('loginName');
        sessionStorage.removeItem('loginID');
        navigate('/');
    };
    useEffect(() => {
        if(!sessionStorage.getItem('loginEmail')){
            navigate('/');
        }
    }, [])

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="navbar-collapse" id="navbarSupportedContent">
                <Link className='navbar-brand mt-2 mt-lg-0' to="/dashboard">
                    <img className='logo' src={logo} width="100" height="50" />
                </Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {/* <li className="nav-item">
                        <Link className='nav-link' to="/">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/register">Register</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className='nav-link' to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/hybris">Hybris</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/softwares">Softwares</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/documents">Documents</Link>
                    </li>
                </ul>

                </div>

                <div className="d-flex align-items-center">
                    <span className='login-icon'>
                        {sessionStorage.getItem('loginName')}
                        <img className='rounded-circle' src={profileIcon} height="40" />
                    </span>
                    <a className="d-flex align-items-center" onClick={logoutClick} href="#">Logout</a>
                </div>
            </div>
        </nav>      

    </>
  )
}

export default Header
