import React from 'react'
import './sidebar.css';
import { MdOutlineRestaurantMenu, MdOutlineDashboard, MdChairAlt } from 'react-icons/md'
import { RiFileList3Line } from 'react-icons/ri'
import { FiUser } from 'react-icons/fi'
import { TbReport } from 'react-icons/tb'
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    return (
        <>
            <div className='sidebar'>
                <div className="top">
                    <span>Restro POS</span>
                </div><hr />
                <div className="content">
                    <ul>
                        <p className='title'>Main</p>
                        <NavLink to='/' className='navlink'><li > <MdOutlineDashboard size={22} /> <span> Dashboard</span>  </li></NavLink>

                        <p className='title'>List</p>
                        <NavLink to='/tables' className='navlink'> <li><MdChairAlt size={22} /><span>Tables</span></li></NavLink>
                        <NavLink to='/menus' className='navlink'> <li><MdOutlineRestaurantMenu size={22} /><span>Menus</span></li></NavLink>
                        <li><RiFileList3Line size={22} /><span>Orders</span></li>
                        <NavLink to='/users' className='navlink'> <li><FiUser size={22} /><span>Users</span></li></NavLink>

                        <p className='title'>Analysis</p>
                        <li><TbReport size={22} /><span>Report</span></li>
                    </ul>
                </div>
                <div className="footer"></div>
            </div>
        </>

    )
}

export default Sidebar