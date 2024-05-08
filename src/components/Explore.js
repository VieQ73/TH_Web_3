import React from 'react'
import ChatBig from './ChatBig';
import ChatSmall from './ChatSmall';
import ExplorePage from './ExplorePage';
import Settings from './Setting';

const Explore = () => {
    return (
        <>
            <div className=' overflow-auto'>
                <div className='flex'>
                    <ChatSmall />
                    <ExplorePage/>
                </div>
                <span className='overflow-auto'><ChatBig /></span>
                <span className='overflow-auto'><Settings /></span>
            </div>
        </>
    )
}

export default Explore
