import React, {useState} from 'react'
import maindata from './MainTagsData'
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';

const Tags = () => {
  const [index, setIndex] = useState(0);
  const {title, title2, title3, title4, title5, title6, title7, title8, title9, title10, title11, title12} = maindata[index]

  const checkNum = (number)=>{
    if(number<0){
        return maindata.length-1;
    }
    if (number>maindata.length-1){
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

  const prev=()=>{
    setIndex((index)=>{
        let newIndex = index-1;
        return checkNum(newIndex);
    })
  }
  return (
    <>
    <div className='bg-slate-900 fixed h-[3.6rem] z-10 border-y w-[94%] ml-20 px-[1rem] flex items-center border-gray-600 text-white'>
    <span className=" text-gray-300 cursor-pointer mx-4" onClick={prev}><BsArrowLeftCircle size="20px"/></span>
      <span className='border-slate-600 bg-slate-700 mx-1 m-2 font-medium rounded-2xl px-3 py-1 w-fit cursor-pointer hover:bg-slate-600'>{title}</span>
      <span className='border-slate-600 bg-slate-700 mx-1 m-2 font-medium rounded-2xl px-3 py-1 w-fit cursor-pointer hover:bg-slate-600'>{title2}</span>
      <span className='border-slate-600 bg-slate-700 m-2 mx-1 font-medium rounded-2xl px-3 py-1 w-fit cursor-pointer hover:bg-slate-600'>{title3}</span>
      <span className='border-slate-600 bg-slate-700 m-2 mx-1 font-medium rounded-2xl px-3 py-1 w-fit cursor-pointer hover:bg-slate-600'>{title4}</span>
      <span className='border-slate-600 bg-slate-700 m-2 mx-1 font-medium rounded-2xl px-3 py-1 w-fit cursor-pointer hover:bg-slate-600'>{title5}</span>
      <span className='border-slate-600 bg-slate-700 m-2 mx-1 font-medium rounded-2xl px-3 py-1 w-fit cursor-pointer hover:bg-slate-600'>{title6}</span>
      <span className='border-slate-600 bg-slate-700 m-2 mx-1 font-medium rounded-2xl px-3 py-1 w-fit cursor-pointer hover:bg-slate-600'>{title7}</span>
      <span className='border-slate-600 bg-slate-700 m-2 mx-1 font-medium rounded-2xl px-3 py-1 w-fit cursor-pointer hover:bg-slate-600'>{title8}</span>
      <span className='border-slate-600 bg-slate-700 m-2 mx-1 font-medium rounded-2xl px-3 py-1 w-fit cursor-pointer hover:bg-slate-600'>{title9}</span>
      <span className='border-slate-600 bg-slate-700 m-2 mx-1 font-medium rounded-2xl px-3 py-1 w-fit cursor-pointer hover:bg-slate-600'>{title10}</span>
      <span className='border-slate-600 bg-slate-700 m-2 mx-1 font-medium rounded-2xl px-3 py-1 w-fit cursor-pointer hover:bg-slate-600'>{title11}</span>
      <span className='border-slate-600 bg-slate-700 m-2 mx-1 font-medium rounded-2xl px-3 py-1 w-fit cursor-pointer hover:bg-slate-600'>{title12}</span>
        <span className=" text-gray-300 cursor-pointer fixed mx-[70rem]" onClick={next}><BsArrowRightCircle size="20px"/></span>
    </div>
    </>
  )
}

export default Tags