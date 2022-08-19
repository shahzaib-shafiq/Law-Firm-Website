import React from 'react'

import {team} from '../data'
const Team = () => {
  return (
    <section id='team' className='section ' >
      <div className="container mx-auto text-center">
        <h2 className='text-5xl font-primary font-extrabold mb-4'>Our Attourneys</h2>
  

<div className='lg:grid lg:gap-x-[30px] lg:grid-cols-3'>
{team.map((item,index)=>{

const {image,name,position,description}=item;
return <div className='text-center lg:text-left mb-12 ' key={index}>
<img src={image} className='mx-auto lg:mx-0 mb-6' alt="" />

<h4 className='text-2xl mb-2 font-primary font-bold '>
{name}
</h4>
    <p className='text-sm'> {position}</p>
<p className='text-sm mt-4 mx-auto'>{description}</p>
</div>
})}

</div>

      </div>
    </section>
  )
}

export default Team
