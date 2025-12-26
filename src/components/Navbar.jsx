import { navIcons, navLinks } from '#constants'
import useWindowStore from '#store/window'
import dayjs from 'dayjs'
import React from 'react'

const Navbar = () => {

const { openWindow } = useWindowStore()

  return (
    <nav className='text-white'>
      <div>
        <img src="/images/logo.svg" className='invert' alt="logo" />
        <p className='font-bold'>Mustaqeem's Portfolio</p>

        <ul>
            {navLinks.map(({id,name,type})=>(
                <li key={id} onClick={()=>openWindow(type)}>
                    <p>{name}</p>
                </li>
            ))}
        </ul>
      </div>
      <div>
        <ul>
            {navIcons.map(({id,img})=>(
                <li key={id}>
                    <img src={img} className='icon-hover invert' alt={`icon-${id}`} />
                </li>
            ))}
        </ul>
        <time className='invert'>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
      
    </nav>
  )
}

export default Navbar


//npm i dayjs  for time