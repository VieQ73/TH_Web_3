import React from 'react'

const SingleSetting = (props) => {
    return (
        <>
            <div className='my-1'>
                <div className='flex items-center overflow-auto p-1 w-full hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                    <span className='flex ml-4 justify-center'>{props.icon}</span>
                    <span className=' mx-4 flex justify-center py-1'>{props.title}</span>
                </div>
            </div>
        </>
    )
}

export default SingleSetting