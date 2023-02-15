import React from 'react'
import './navbar.css'
import { AiOutlineAlignLeft, AiOutlineSearch, AiOutlineLogout } from 'react-icons/ai'
import { RiNotification3Line } from 'react-icons/ri'
import { FiUser } from 'react-icons/fi'

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className='navbar-left'>
          <  AiOutlineAlignLeft size={25} />
          <div className="search-box">
            <input type="text" />
            <AiOutlineSearch size={25} className='search-icon' />
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-icon">
            <RiNotification3Line size={25} />
            <span>+9</span>
          </div>
          <div className="nav-profile">
            <img className='dropbtn' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
            <div class="dropdown-content">
              <ul>
                <li><FiUser size={22} /> Profile</li>
                <li><AiOutlineLogout size={22} /> Logout </li>

              </ul>
            </div>
          </div>
        </div>


      </div>

    </>
  )
}

export default Navbar