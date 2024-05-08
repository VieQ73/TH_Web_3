import React from 'react'

const SingleChatSmall = (props) => {
  return (
    <>
        <div className='flex flex-col p-4 justify-center hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
        <span className='flex justify-center'>{props.icon}</span>
        <span className='flex justify-center text-xs py-1'>{props.title}</span>
    </div>
    </>
  )
}

export default SingleChatSmall