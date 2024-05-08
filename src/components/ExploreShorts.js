import React from 'react'
import img4 from '../img/img4.webp'

const ExploreShorts = () => {
    return (
        <>
            <div className='w-[14.5rem] mb-4'>
                <div className='bg-slate-800 mx-0.5 cursor-pointer'>
                    <img className='w-20 mx-auto flex justify-center' src={img4} alt="" />
                </div>
                <p className='font-bold my-2'>Coding AI for Phones 📳</p>
                <p className='text-gray-400 text-sm font-medium'>CodeWithHarry</p>
                <div className='flex text-sm font-medium my-1 text-gray-400'>
                    <p>10K views</p>
                    <span className='mx-1'>:</span>
                    <p>1 day ago</p>
                </div>
            </div>
        </>
    )
}

export default ExploreShorts