import { ChartArea } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

const NavigationTab = ({path,title,Icon}) => {
  return (
    <NavLink 
    className={({isActive})=>
    {
      `flex ${
      isActive
        ?"border-r-4 border-[var(--tertiary)] bg-[var(--bg-hover)]"
        :""
      }`
    } }
    to={path}
    end="/"
  >
      <ChartArea size={23}/>
      {title}
      </NavLink>
  )
}

export default NavigationTab