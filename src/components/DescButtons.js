import React from 'react'

const DescButtons = (props) => {
    return (
        <>
            <div className='flex items-center mx-3 cursor-pointer'>
                {props.icon}
                <span className='mx-2 font-semibold'>{props.title}</span>
            </div>
        </>
    )
}

export default DescButtons