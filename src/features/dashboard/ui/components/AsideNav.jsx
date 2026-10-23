import React from 'react'
import NavigationTab from './NavigationTab'
import { useSelector } from 'react-redux'
import {employeeNavigation} from "../../../../app/constants/Navigations/employeeNavigation"
import {adminNavigation} from "../../../../app/constants/Navigations/adminNavigation"
const AsideNav = () => {
let {employee}=useSelector((store)=>store.auth)
  let navigations = 
  employee?.role === "admin"
  ?adminNavigation:employeeNavigation
  console.log("Employee:", employee);
  console.log("Role:", employee?.role);
  console.log("Navigation:", navigations);
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