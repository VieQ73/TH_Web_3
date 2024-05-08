import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css'
import { AiFillHome, AiFillYoutube, AiOutlineBulb, AiOutlineTrophy, AiOutlineSetting } from 'react-icons/ai';
import { BsCameraReels, BsBroadcast, BsFlag } from 'react-icons/bs';
import { BiLike, BiSlideshow } from 'react-icons/bi';
import { TbHanger } from 'react-icons/tb';
import { SiYoutubegaming, SiYoutubestudio, SiYoutubemusic } from 'react-icons/si';
import { IoReorderThreeOutline, IoAddCircleOutline, IoHelpCircleOutline } from 'react-icons/io5';
import { RiVideoLine } from 'react-icons/ri';
import { MdOutlineExplore, MdOutlineVideoLibrary, MdOutlineSubscriptions, MdOutlineHistory, MdOutlineWatchLater, MdOutlineLocalMovies, MdOutlineChildCare, MdOutlineFeedback } from 'react-icons/md';

import SingleChatBig from './SingleChatBig';

export default function Modal({ visible, onClose }) {
    function handleOnClose(e) {
        if (e.target.id === 'container') {
            onClose();
        }
    }
    if (!visible) {
        return null
    }
    return (

        <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 flex justify-center overflow-auto items-center'>
            <div className='w-[16rem] pt-4 bg-slate-900 fixed inset-0 overflow-auto text-white z-20 '>
                <div className=' '>
                    <div className='flex px-6 pb-4 items-center '>
                        <span className='cursor-pointer'><IoReorderThreeOutline size="40px" /></span>
                        <div className='flex cursor-pointer items-center mx-4'>
                            <AiFillYoutube size="36px" />
                            <p className='text-xl font-bold'>YouTube</p>
                        </div>
                    </div>
                    <Link to="/">
                    <SingleChatBig icon= <AiFillHome size="24px"/> title="Home"/>
                    </Link>
                    <Link to="/explore">
                    <SingleChatBig icon= <MdOutlineExplore size="24px"/> title="Explore"/>
                    </Link>
                    <SingleChatBig icon= <BsCameraReels size="24px"/> title="Shorts"/>
                    <SingleChatBig icon= <MdOutlineSubscriptions size="24px"/> title="Subscriptions"/>

                    <div className='border-b my-4 border-gray-600'></div>

                    <SingleChatBig icon= <MdOutlineVideoLibrary size="24px"/> title="Library"/>
                    <SingleChatBig icon= <MdOutlineHistory size="24px"/> title="History"/>
                    <SingleChatBig icon= <RiVideoLine size="24px"/> title="Your videos"/>
                    <SingleChatBig icon= <MdOutlineWatchLater size="24px"/> title="Watch later"/>
                    <SingleChatBig icon= <BiLike size="24px"/> title="Liked videos"/>

                    <div className='border-b my-4 border-gray-600'></div>

                    <p className='mx-8 my-2 font-medium text-sm text-gray-400'>SUBSCRIPTIONS</p>
                    <SingleChatBig icon= <IoAddCircleOutline size="24px"/> title="Browse channels"/>

                    <div className='border-b my-4 border-gray-600'></div>
                    <p className='mx-8 my-2 font-medium text-sm text-gray-400'>EXPLORE</p>
                    <SingleChatBig icon= <MdOutlineLocalMovies size="24px"/> title="Movies"/>
                    <SingleChatBig icon= <SiYoutubegaming size="24px"/> title="Gaming"/>
                    <SingleChatBig icon= <BsBroadcast size="24px"/> title="Live"/>
                    <SingleChatBig icon= <TbHanger size="24px"/> title="Fashion & Beauty"/>
                    <SingleChatBig icon= <AiOutlineBulb size="24px"/> title="Learning"/>
                    <SingleChatBig icon= <AiOutlineTrophy size="24px"/> title="Sports"/>

                    <div className='border-b my-4 border-gray-600'></div>
                    <p className='mx-8 my-2 font-medium text-sm text-gray-400'>MORE FROM YOUTUBE</p>
                    <SingleChatBig icon= <MdOutlineLocalMovies size="24px"/> title="YouTube Premium"/>
                    <SingleChatBig icon= <SiYoutubestudio size="24px"/> title="Creator Studio"/>
                    <SingleChatBig icon= <SiYoutubemusic size="24px"/> title="YouTube Music"/>
                    <SingleChatBig icon= <MdOutlineChildCare size="24px"/> title="YouTube Kids"/>
                    <SingleChatBig icon= <BiSlideshow size="24px"/> title="YouTube TV"/>
                
                    <div className='border-b my-4 border-gray-600'></div>
                    <SingleChatBig icon= <AiOutlineSetting size="24px"/> title="Settings"/>
                    <SingleChatBig icon= <BsFlag size="24px"/> title="Report history"/>
                    <SingleChatBig icon= <IoHelpCircleOutline size="24px"/> title="Help"/>
                    <SingleChatBig icon= <MdOutlineFeedback size="24px"/> title="Send feedback"/>

                    <div className='border-b my-4 border-gray-600'></div>
                    <p className='text-sm text-gray-500 mx-6 my-4'>&copy; 2022 Google LLC </p>
                </div>
            </div>
        </div>
    )
}
