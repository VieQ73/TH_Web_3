import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsCameraReels } from 'react-icons/bs';
import { MdOutlineExplore ,MdOutlineVideoLibrary, MdOutlineSubscriptions } from 'react-icons/md';
import SingleChatSmall from './SingleChatSmall';

const ChatSmall = () => {
  return (
    <div className='w-20 fixed top-[4rem] h-[92vh] bg-slate-900 text-white'>
    <Link to="/">
    <SingleChatSmall icon= <AiFillHome size="24px"/> title="Home"/>
    </Link>
    <Link to="/explore">
    <SingleChatSmall icon= <MdOutlineExplore size="24px"/> title="Explore"/>
    </Link>
    <SingleChatSmall icon= <BsCameraReels size="24px"/> title="Shorts"/>
    <SingleChatSmall icon= <MdOutlineSubscriptions size="24px"/> title="Subscriptions"/>
    <SingleChatSmall icon= <MdOutlineVideoLibrary size="24px"/> title="Library"/>
    </div>
  )
}

export default ChatSmall