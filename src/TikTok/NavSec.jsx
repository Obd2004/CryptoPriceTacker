import React from 'react'
import logo from './styles/images/logo.svg'
import SearchIcon from '@mui/icons-material/Search';
function NavSec() {
  return (
    <div className='nav'>
        <div className="header__content">
            <div className="navbar__logo">
                <a href="#">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className="search">
                <form action="#">
                    <input 
                        type="text" 
                        className='searchInput'
                        placeholder='Search account'
                    />
                    <button type='button'>
                        <SearchIcon/>
                    </button>
                </form>
            </div>
            <div className="navigations">
                <li className='navItem'>
                    <a href="#">Upload</a>
                </li>
                <button className='login'>
                    Log in
                </button>
            </div>
        </div>  
    </div>
  )
}

export default NavSec