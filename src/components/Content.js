import React from 'react'
import '../index.css';

const Content = (props) => {
    let head = props.heading
    return (        
        <div className='bg-black text-white'>
            <div className='cursor-pointer p-4'>
                <div className=''>
                <img className='rounded-lg' src={props.image} alt="" />
                <span className='bg-black text-[0.75rem] font-semibold absolute -mt-6 ml-[14rem] px-1 py-[0.025rem] align-middle rounded-[0.40rem]'>{props.dur}</span>
                </div>
                <div className='flex my-4'>
                    <img className='h-10 w-10 rounded-full' src={props.authorImg} alt="" />
                    <div className='mx-2 font-medium '>
                        <h3 className='text-[0.95rem] font-semibold'>{head.substring(0,45)}...</h3>
                        <p className='mt-2 mb-0.5 text-sm text-gray-400'>{props.author}</p>
                        <div className='flex text-sm text-gray-400'>
                            <span>{props.views} views </span><span>&nbsp;&nbsp;:&nbsp; {props.time} ago</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Content