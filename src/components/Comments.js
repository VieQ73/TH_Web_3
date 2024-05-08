import React from 'react'
import img2 from '../img/img1_1.png'
import img3 from '../img/User.png'
import { MdSort,MdOutlineAccountCircle } from 'react-icons/md';
import Comment from './Comment';

const Comments = () => {
  return (
    <>
      <div className='text-white flex text-lg font-medium my-4 items-center'>
        1,260 Comments
        <div className='mx-8 flex items-center'>
          <MdSort size='24' />
          <p className='mx-2 cursor-pointer'>SORT BY</p>
        </div>
      </div>
      <div className='flex my-4'>
                <span className='text-gray-400'><MdOutlineAccountCircle size='60' /></span>
                <input className='text-sm m-3 mx-6 w-5/6 outline-none text-white placeholder:text-gray-400 border-b-[0.5px] border-gray-400 bg-transparent' type="text" placeholder='Add a comment ...' />
            </div>
            <div className='text-white'>
      <Comment icon={img2} name="GGWP" desc="Hello, good job man, keep it up!" like="24" />
      <Comment icon={img3} name="GGWP" desc="Hello, good job man, keep it up!" like="24" />
      <Comment icon={img3} name="GGWP" desc="Hello, good job man, keep it up!" like="24" />
      <Comment icon={img3} name="GGWP" desc="Hello, good job man, keep it up!" like="24" />
      </div>
    </>
  )
}

export default Comments