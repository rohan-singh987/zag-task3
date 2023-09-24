import React from 'react'
import { Progress, Space } from 'antd';


const DonutChart = () => {
    return (
        <div className='flex xl:flex-row flex-col justify-between mb-10'>

            <div className=' bg-white px-10 py-10 rounded-3xl flex flex-col justify-center items-center xl:mb-0 mb-5 '>
                <h2 className='font-semibold mb-5 text-xl'>
                    All Customers
                </h2>
                <div className='flex'>
                    <div className='me-3'>
                        <Progress type="circle" percent={85} strokeColor={"#5F27CD"} />
                        <p className='text-sm text-[#A7A7A7] mt-2 font-semibold'>Current Customers</p>
                    </div>
                    <div className='me-3'>
                        <Progress type="circle" percent={66} strokeColor={"rgba(22, 192, 152, 0.38)"} />
                        <p className='text-sm text-[#A7A7A7] mt-2 font-semibold'>New Customers</p>
                    </div>
                    <div className='me-3'>
                        <Progress type="circle" percent={90} strokeColor={"#FF6B6B"} />
                        <p className='text-sm text-[#A7A7A7] mt-2 font-semibold'>Target Customers</p>
                    </div>
                    <div className='me-'>
                        <Progress type="circle" percent={30} strokeColor={'#FFC5C5'} />
                        <p className='text-sm text-[#A7A7A7] mt-2 font-semibold'>Retarget Customers</p>
                    </div>
                </div>
            </div>

            <div className='xl:w-4/12 bg-white px-10 py-10 rounded-3xl '>
                <h2 className='font-semibold mb-5 text-xl'>
                    Stats Overview
                </h2>
                <div>
                    <p>Active</p>
                    <Progress percent={63} strokeColor={"rgba(22, 192, 152, 0.38)"} />
                </div>
                <div>
                    <p>Inactive</p>
                    <Progress percent={88} strokeColor={"#FF6B6B"} />
                </div>
            </div>
        </div>
    )
}

export default DonutChart