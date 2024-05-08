import React, { useState } from 'react'
import img2 from '../img/img1_1.png'
import { ToastContainer, toast } from 'react-toastify';
import { HiOutlineBell } from "react-icons/hi";
import { TbBellRinging } from "react-icons/tb";
import 'react-toastify/dist/ReactToastify.css';

const Channel = () => {
    const [bel, setBel] = useState(<HiOutlineBell size='20px' />)
    const [sub, setSub] = useState("SUBSCRIBE")
    const [colo, setCol] = useState("red")
    const [disp, setDisp] = useState("none")
    const bell = () => {
        setBel(<TbBellRinging size='20px' />)
    }
    const notify = () => {

        if (sub == 'SUBSCRIBE') {
            toast.success("Subscribed ✅");
            setSub("SUBSCRIBED✅")
            setCol("green")
            setDisp("block")
        }
        if (sub === 'SUBSCRIBED✅') {
            toast.error("Unsubscribed");
            setSub("SUBSCRIBE")
            setCol("red")
            setDisp("none")
        }
    }
    return (
        <>
            <div className='flex items-center justify-between'>
                <div className='m-2 flex'>
                    <img className='w-12 h-12' src={img2} alt="" />
                    <div className='mx-3'>
                        <h3 className='text-white font-bold cursor-pointer'>CodeWithHarry</h3>
                        <p className='text-[0.85rem] text-gray-400 font-medium'>3.30M subscribers</p>
                    </div>
                </div>
                <div className='flex w-[20rem]'>
                    <button className='border border-blue-400 bg-transparent text-blue-400 px-5 py-2 mx-4'>JOIN</button>
                    <button id='but' onClick={notify} style={{ backgroundColor: colo }} className='border outline-none border-red-600 text-white px-5 mx-2 py-2 font-medium'>{sub}</button>
                    <ToastContainer />
                    <button style={{ display: disp }} className='text-white mx-2' onClick={bell}>{bel}</button>
                </div>
            </div>
        </>
    )
}

export default Channel