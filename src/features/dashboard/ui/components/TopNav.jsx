import { Bell, Menu, Search } from 'lucide-react'
import React from 'react'

const TopNav = () => {
  return (
    <div className='flex justify-between bg-[--bg-card] items-center'>
      <div className='flex gap-4 items-center w-[30%] rounded px-3 py-2 bg-[var(--bg-surface)] border-gray-600'>
        <Search size={24}/>
        <input className='w-full outline-0' type="text" placeholder='Search workspace...'/>
      </div>
      <div className='flex items-center gap-4 '>
        <Bell size={24}/>
        <Menu size={24}/>
      </div>
    </div>
  )
}

export default TopNav