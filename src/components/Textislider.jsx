import React from 'react'
import {testimonials} from '../data'



import {Swiper,SwiperSlide} from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';
import './testimonialSlider.css'

import { Autoplay,pagination } from 'swiper';


const Textislider = () => {
  return (
    <>
     <Swiper pagination={{dynamicBullets:true,
    clickable:true
    }}
    
    >

      {testimonials.map((item,index)=>{

        const {text,name,image,position}=item;
return<SwiperSlide

key={index}
>
<div className="relative lg:mt-[34px]
before:content-quote p-8

">

</div>
</SwiperSlide>
      })}
      
      </Swiper> 
    </>
  )
}

export default Textislider
