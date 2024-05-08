import React, { useState } from 'react'
import { AiOutlineLike, AiOutlineScissor, AiFillLike, AiFillDislike } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { BiDislike, BiShare, BiDonateHeart, BiSave } from 'react-icons/bi';
import DescButtons from './DescButtons';
import Channel from './Channel';

const Desc = () => {
    const [like, setLike] = useState(< AiOutlineLike size='24px' />)
    const [unlike, setUnlike] = useState(<BiDislike size='24px' />)
    const [readmore, setReadmore] = useState(false)

    const info = 'GG WP'

    const show = () => {
        setReadmore(!readmore)
    }
    const liked = () => {
        if(setUnlike !== <AiFillDislike size='24px'/>)
        setLike(<AiFillLike size='24px' />)
    }
    const unliked = () => {
        setUnlike(<AiFillDislike size='24px' />)
    }

    return (
        <div className='bg-black'>
            <p className='text-blue-400 text-sm cursor-pointer'>DSA</p>
            <h3 className='text-white text-xl font-medium'>Lorem ipsum dolor sit amet.</h3>
            <div className='flex'>
                <p className='text-white text-md font-medium my-2'>1,000,000 views</p>
                <p className='text-white text-md font-medium m-2'>Date</p>
            </div>
            <p className='text-gray-300'>{readmore ? info : `${info.substring(0, 150)} ...`}

                <button className=' ml-2 text-white font-semibold' onClick={show}>{readmore ? ' Show less' : 'Read more'}</button>
            </p>
            <div className='flex text-white my-4'>
                <button onClick={liked}><DescButtons icon={like} title="100K" /></button>
                <button onClick={unliked}><DescButtons icon={unlike} title="Dislike" /></button>
                <DescButtons icon=<BiShare size="24px" /> title="Share" />
                <DescButtons icon=<BiDonateHeart size="24px" /> title="Thanks" />
                <DescButtons icon=<AiOutlineScissor size="24px" /> title="Clip" />
                <DescButtons icon=<BiSave size="24px" /> title="Save" />
                <DescButtons icon=<BsThreeDots size="24px" /> />
            </div>
            <Channel />
        </div>
    )
}

export default Desc