import React from 'react'
import { NavLink } from 'react-router'
import NavigationTab from './NavigationTab'
import { ChartArea, Key } from 'lucide-react'
import { useSelector } from 'react-redux'
import { adminNavigation, employeeNavigation } from '../../../../app/constants/Navigations'

const AsideNav = () => {
let {employee}=useSelector((store)=>store.auth)
  let navigations =employee.role === 'admin'?adminNavigation:employeeNavigation
  return (
    <div>
      <div className='flex flex-col gap-1'>
        <h1 className='text-3xl font-semibold'>team-sync</h1>
        <p className='text-sm text-[var(--text-secondary)]'>Enterprise Workspace</p>
      </div>
      <div className='flex flex-col gap-3 '>
        {
            navigations.map((route)=>
            { 
              return(
              <NavigationTab
              
              key={route.path} 
              path={route.path}
              Icon = {route.icon}
              title={route.title}
              />
            )})
        }
      </div>
    </div>
  )
}

export default AsideNav