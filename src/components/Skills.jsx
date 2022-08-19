import React from 'react'

import {skills} from '../data'

const Skills = () => {
  return (
    <section id='skills' className='section bg-slate-100 pb-32 '>
      <div className="container mx-auto text-center">
        <h2 className='text-5xl font-primary font-extrabold mb-4'>
Our Work
        </h2>

        <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ipsa mollitia eos, deleniti a doloremque suscipit
        </p>
        <div className='lg:grid grid-cols-3 gap-12'>
          {skills.map((item,index)=>
          {
            const {icon,title,description} = item;        
          return <div className='flex flex-col items-center justify-center mb-16 lg:mb-0 last:mb-0'>
            <img className='mb-6' src={icon} alt="" />
          <h3 className='text-2xl mb-2 font-primary font-bold'>{title}</h3>
          <p className='max-w-[332px] lg:max-w-[350px] '>{description}</p>
          
          </div>
          }
          )}
        </div>
      </div>
    </section>
  )
}

export default Skills
