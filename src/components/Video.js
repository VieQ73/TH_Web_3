import React from 'react'
import video1 from '../img/FitBuddy.mkv'
import ShortVideos from './ShortVideos';
import VideoTags from './VideoTags';
import Desc from './Desc';
import Comments from './Comments';

const Video = () => {
    return (
        <div className='flex bg-black'>
        <div className='pl-12 mr-4 w-[70%]'>
        {/* <iframe className='mt-6 mb-4'  width="700" height="370" src="https://www.youtube.com/watch?v=_aghWPzkB7M&list=RD_aghWPzkB7M&start_radio=1" title="Project 1: PDF Merger WebApp Using JavaScript & Bootstrap | JavaScript Tutorial in Hindi #102" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <video className=' pt-6 outline-none' src={video1} controls></video>
            <Desc/>
            <Comments/>
        </div>
        <div className='w-[45%] m-4'>
            <VideoTags/>
            <ShortVideos/>
            <ShortVideos/>
            <ShortVideos/>
            <ShortVideos/>
            <ShortVideos/>
            <ShortVideos/>
            <ShortVideos/>
            <ShortVideos/>
            <ShortVideos/>
            <ShortVideos/>
        </div>
        </div>
    )
}

export default Video