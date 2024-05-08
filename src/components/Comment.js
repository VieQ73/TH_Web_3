import React from 'react'
import img2 from '../img/img1_1.png'
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BiDislike, BiLike } from 'react-icons/bi';

const Comment = (props) => {
    return (
        <>

            <div className='flex mx-2 my-4'>
                <img className='w-12 h-12 text-white bg-white cursor-pointer rounded-full' src={props.icon} alt="" />
                <div className='mx-4'>
                <div className='flex mb-1 items-center'>
                    <p className='text-white cursor-pointer font-bold text-sm'>{props.name}</p>
                    <span className='text-gray-400 text-sm mx-2'>2 years ago</span>
                    </div>
                    <p className='text-white'>{props.desc}</p>
                    <div className='flex text-white my-2'>
                        <div className='flex items-center'>
                            <BiLike size="20" />
                            <span className='px-2 text-xs cursor-pointer'>{props.like}</span>
                        </div>
                        <div className='flex items-center cursor-pointer px-4'>
                            <BiDislike size="20" />
                            <span className='text-xs'></span>
                        </div>
                        <p className='text-gray-300 text-xs cursor-pointer font-bold'>REPLY</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment