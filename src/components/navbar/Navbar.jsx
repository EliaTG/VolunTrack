import React from 'react'
import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import LanguageIcon from '@mui/icons-material/Language';

const Navbar = () => {
  return (
    <section class="navbarContainer">
        <section className="wrapper">
           <section className="seachbar">
               <input type="text" id="search-bar" placeholder="Search..." />
               <SearchIcon/>
           </section>
           <section className="navbarRight">
                <section className="languages">
                      <LanguageIcon/>
                      <span>English</span>
                    {/* <img src="../../assets/imgs/united-kingdom.png" alt="" srcset="" /> */}
                </section>
                <section className="profileAvatar">
                         <Avatar alt="Joe Doe Sharp" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                </section>
           </section>
        </section>
    </section>
  )
}

export default Navbar
