import React from 'react'
import './card.css'
import{MdOutlineKeyboardArrowUp,MdOutlineKeyboardArrowDown} from 'react-icons/md'
import{TbCurrencyReal} from 'react-icons/tb'
const CustomCard = () => {
  return (
   <>
   <div className="card">
    <div className="left">
        <span className="title">Opeing Balance</span>
        <span className="counter">2,000</span>
        <span className="card-link">View Monthly Sales</span>
    </div>
    <div className="right">
        <div className="card-icon"><MdOutlineKeyboardArrowUp size={25} />
        <span>20%</span></div>
 
    </div>
    </div>
    </>
  )
}

export default CustomCard