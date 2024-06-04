import React from 'react'

import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='flex flex-row'>
        <SideBar/>
        <div className='w-full'> 
            <Outlet/>
        </div>

    </div>
  )
}
