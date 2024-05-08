import React from 'react'

const SingleChatBig = (props) => {
    return (
        <>
            <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                <span className='flex px-4'>{props.icon}</span>
                <span className='flex py-1 px-2'>{props.title}</span>
            </div>
        </>
    )
}

export default SingleChatBig