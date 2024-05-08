import React from 'react'

const SingleTag = (props) => {
  return (
    <>
    <div className='border-slate-600 bg-slate-700 m-2 font-medium rounded-2xl px-3 py-1 w-fit cursor-pointer hover:bg-slate-600'>{props.title}</div>
    </>
  )
}

export default SingleTag