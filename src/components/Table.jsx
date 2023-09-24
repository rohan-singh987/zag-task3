"use client";
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Space, Table } from 'antd';
import Image from 'next/image';
import search from '../../public/search.svg'

const TableBoard = () => {
    const tableData = useSelector((state) => state.chart)
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };
    
    const handleSearch = () =>{

    }

    const columns = [
        {
            title: 'Customer Name',
            dataIndex: 'name',
            key: 'name',
            
            filteredValue: filteredInfo.name || null,
            onFilter: (value, record) => record.name.includes(value),
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            ellipsis: true,
        },
        {
            title: 'Phone Number',
            dataIndex: 'no',
            key: 'no',
            ellipsis: true,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            ellipsis: true,
            filteredValue: filteredInfo.email || null,
            onFilter: (value, record) => record.email.includes(value),
            sorter: (a, b) => a.email.length - b.email.length,
            sortOrder: sortedInfo.columnKey === 'email' ? sortedInfo.order : null,
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
            ellipsis: true,
            filters: [
                {
                    text: 'India',
                    value: 'India',
                },
                {
                    text: 'Iran',
                    value: 'Iran',
                },
                {
                    text: 'Israel',
                    value: 'Israel',
                },
            ],
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            ellipsis: true,
            filters: [
                {
                    text: 'Active',
                    value: 'Active',
                },
                {
                    text: 'Inactive',
                    value: 'Inactive',
                },
            ],
            filteredValue: filteredInfo.status || null,
            onFilter: (value, record) => record.status.includes(value),
            sorter: (a, b) => a.status.length - b.status.length,
            sortOrder: sortedInfo.columnKey === 'status' ? sortedInfo.order : null,
        },
    ];


    return (
        <div className='bg-white pt-10 rounded-3xl'>
            <div className='flex justify-between items-end mb-5 mx-7'>
                <h2 className=' text-[#16C098] text-sm  '>
                    Active Members
                </h2>
                <div className='flex justify-between items-center px-5 rounded-xl bg-[#F9FBFF]'>
                    <Image src={search} alt='' />
                    <input type="text" className='bg-[#F9FBFF] px-3 py-2' placeholder='search'
                    onChange={handleSearch}
                    />
                </div>
            </div>
            <div>
                <Table columns={columns} dataSource={tableData} pagination={{pageSize: 6,}} onChange={handleChange} />
            </div>
        </div>
    )
}

export default TableBoard