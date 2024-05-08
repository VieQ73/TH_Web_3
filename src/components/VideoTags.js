import React, {useState} from 'react'
import { BsArrowRightCircle } from 'react-icons/bs';
import data from './Tagsdata.js'

const Tags = () => {
  const [index, setIndex] = useState(0);
  const {id, title, title2, title3, title4, title5} = data[index]

  const checkNum = (number)=>{
    if(number<0){
        return data.length-1;
    }
    if (number>data.length-1){
        return 0;
    }
    return number;

  }
  const next=()=>{
    setIndex((index)=>{
        let newIndex = index+1;
        return checkNum(newIndex);
    })
  }
  return (
    <>
    <div className='h-[4.5rem] flex items-center text-white'>
      <span className='border-slate-600 bg-slate-700 mx-2 font-medium rounded-2xl px-3 py-1 w-fit cursor-pointer hover:bg-slate-600'>{title}</span>
      <span className='border-slate-600 bg-slate-700 mx-1 font-medium rounded-2xl px-3 py-1 w-fit cursor-pointer hover:bg-slate-600'>{title2}</span>
      <span className='border-slate-600 bg-slate-700 mx-1 font-medium rounded-2xl px-3 py-1 w-fit cursor-pointer hover:bg-slate-600'>{title3}</span>
      <span className='border-slate-600 bg-slate-700 mx-1 font-medium rounded-2xl px-3 py-1 w-fit cursor-pointer hover:bg-slate-600'>{title4}</span>
      <span className='border-slate-600 bg-slate-700 mx-1 font-medium rounded-2xl px-3 py-1 w-fit cursor-pointer hover:bg-slate-600'>{title5}</span>
        <span className=" text-gray-300 cursor-pointer mx-[27rem] fixed" onClick={next}><BsArrowRightCircle size="20px"/></span>
    </div>
    </>
  )
}

export default Tags