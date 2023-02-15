import React from 'react'
import CustomCard from '../../components/cards/CustomCard'
import Navbar from '../../components/navbar/Navbar'
import BarCharts from '../../components/recharts/BarChart'
import ProgressFeature from '../../components/recharts/ProgressFeature'
import ReuseableTable from '../../components/reuseableComponents/ReuseableTable'
import Sidebar from '../../components/sidebar/Sidebar'
import './dashboard.css'
const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="content">
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
          </div>
          <div className="chart-box">
            <ProgressFeature />
            <BarCharts />
          </div>
          <div className='tables-area'>
             <ReuseableTable />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard