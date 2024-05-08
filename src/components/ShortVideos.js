import React from 'react'
import img1 from '../img/img1.webp'

const ShortVideos = () => {
  return (
    <div className='flex mb-2 cursor-pointer'>
      <img className='w-48' src={img1} alt="" />
      <div className='mx-2 font-medium '>
        <h3 className='text-white'>Which electric car is the most in 2024? (Shortlisted Models)</h3>
        <p className='mt-1 mb-0.5 text-sm text-gray-400'>CodeWithHarry</p>
        <div className='flex text-sm text-gray-400'>
          <span>2.1K views </span><span>&nbsp;&nbsp;:&nbsp; 2 hours ago</span>
        </div>
      </div>

    </div>
  )
}

export default ShortVideos