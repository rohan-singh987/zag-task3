import DonutChart from '@/components/DonutChart';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar'
import Table from '@/components/Table';
import React from 'react'

const Dashboard = () => {
  console.log("hello");
  return (
    <div className='text-black w-full sm:px-10 px-5 pt-7 min-h-screen'>
      <div>
      <Header />
      </div>

      <div>
        <DonutChart />
      </div>

      <div>
        <Table />
      </div>
    </div>
  )
}

export default Dashboard