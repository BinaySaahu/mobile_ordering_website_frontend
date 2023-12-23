import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const ProductDetailsCrousel = ({images}) => {
  return (
    <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]'>
        <Carousel
            infiniteLoop = {false}
            thumbWidth={60}
            showIndicators = {false}
            showStatus = {false}
            className='productCarousel'
        >
          {images.map((img,idx)=>(
            <img src={img} alt="" key={idx} className='object-contain max-h-[500px]'/>
          ))}
        </Carousel>
      
    </div>
  )
}

export default ProductDetailsCrousel
