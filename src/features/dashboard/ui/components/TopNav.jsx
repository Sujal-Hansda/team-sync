import { Bell, Lightbulb, Menu, Moon, Search } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../../../shared/state/themeSlice';



const TopNav = () => {

  let {mode} = useSelector((store => store.theme))


  let dispatch = useDispatch();

  let handleThemeChange = () =>
  {
    dispatch(toggleTheme());
  }



  return (
    <div className='flex justify-between bg-[--bg-card] items-center '>
      <div className='flex gap-4 items-center w-[30%] rounded px-3 py-2 bg-[var(--bg-surface)] border-gray-600'>
        <Search size={24}/>
        <input className='w-full outline-0' type="text" placeholder='Search workspace...'/>
      </div>
      <div className='flex items-center gap-4 '>
        
        {
          mode==='light'?(<Moon onClick={handleThemeChange} size={23}/>):(<Lightbulb onClick={handleThemeChange}  size={23}/>)
        }
        
        
        <Bell size={24}/>
        <Menu size={24}/>
      </div>
    </div>
  )
}

export default TopNav