import React, { useEffect, useState } from 'react'
import './menus.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import ReuseableTable from '../../components/reuseableComponents/ReuseableTable';
import { NavLink } from 'react-router-dom'
import axios from 'axios';


const Menus = () => {
  const [menuList, setMenuList] = useState([])

  const fetchMenuList = async () => {

    const menuItemList = await axios.get(`${process.env.REACT_APP_API_URL}/menus`)
    setMenuList(menuItemList.data.menusData)
  }

  useEffect(() => {
    fetchMenuList()
  }, [])

  return (
    <>

      <div className="dashboard">
        <Sidebar />
        <div className="main-content">
      
          <Navbar />
          <div className="menu-content">
            <div>
              <NavLink className="navlink" to='/add-menu'> <button className='btnSubmit'>Add More Menu</button></NavLink>
            </div>
            <div className='table-wrapper'>
              <ReuseableTable rows={menuList} fetchList={fetchMenuList} />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Menus