import React from 'react'
import { BsGear, BsBell } from 'react-icons/bs';
import '../index.css'

export default function Settings({ visible, onClose }) {
    function handleOnClose(e) {
        if (e.target.id === 'container') {
            onClose();
        }
    }
    if (!visible) {
        return null
    }
    return (

        <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 flex justify-center overflow-auto items-center'>
            <div className='pt-4 top-2 bg-slate-900 ml-[68vw] fixed inset-0 overflow-auto text-white z-20 '>
                    <div className='flex text-lg mb-2 pb-2 px-6 justify-between items-center border-b border-gray-500'>
                        <span>Notifications</span>
                        <span><BsGear size='20px'/></span>
                    </div>              
                    <span class="text-4xl flex justify-center mt-48 items-center text-gray-500"><BsBell/></span>
                    <p className='text-3xl flex justify-center my-4 items-center text-gray-500'>No Live Notifications  </p>
                    <p className='text-xl flex justify-center text-center text-gray-600 m-4'>You will come to know about latest news here</p>
            </div>
        </div>
    )
}
