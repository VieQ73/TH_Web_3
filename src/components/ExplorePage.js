import React from 'react'
import ExploreShorts from './ExploreShorts'
import ExploreVideos from './ExploreVideos'
const ExplorePage = () => {
    return (
        <>
            <div className='bg-black text-white w-full px-52'>
                <h3 className='text-lg font-semibold my-4'>Trending Shorts</h3>
                <div className='flex'>
                    <ExploreShorts />
                    <ExploreShorts />
                    <ExploreShorts />
                    <ExploreShorts />
                </div>
                <h3 className='text-lg font-semibold my-4'>Trending Videos</h3>
                <div className=''>
                    <ExploreVideos/>
                    <ExploreVideos/>
                    <ExploreVideos/>
                    <ExploreVideos/>
                    <ExploreVideos/>
                    <ExploreVideos/>
                    <ExploreVideos/>
                    <ExploreVideos/>
                </div>

            </div>
        </>
    )
}

export default ExplorePage