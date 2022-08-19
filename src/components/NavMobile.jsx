import React from 'react'

import Bars from '../assets/img/bars.png'
import Close from '../assets/img/close.png'
import { navigation } from '../data'
import { Link } from 'react-scroll'
import { useState } from 'react'

const NavMobile = () => {
const [isOpen,setIsOpen]=useState(false)

  return (
    <nav className='lg:hidden relative z-20 '>
      <button onClick={()=> setIsOpen(true)}>
<img src={Bars} alt="" />
      </button>
      <ul className={ `${isOpen? 'right-0' : 'right-full'} bg-primary fixed top-0 w-full h-screen text-white
      transition-all justify-center flex flex-col items-center space-y-8 text-lg
      
      `} >
<button onClick={()=>setIsOpen(false)} className='absolute top-6 left-6'>
  <img src={Close} alt="" />
</button>
{navigation.map((item,index)=>{
return <li key={index}> 
<Link to={item.href} activeClass='active'
spy={true}
offset={-200}
className='cursor-pointer'
>
{item.name }
</Link>
</li>
})}
      </ul>
    </nav>
  )
}

export default NavMobile
