import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BsBell, BsMicFill } from 'react-icons/bs';
import { BiVideoPlus } from 'react-icons/bi';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { MdOutlineAccountCircle, MdOutlineCancel } from 'react-icons/md';
import { AiFillYoutube, AiOutlineSearch } from 'react-icons/ai';
import  SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import Notifications from './Notifications';
import ChatBig from "./ChatBig";
import Settings from './Setting';
const Navbar = () => {

    const [showModal, setShowModal] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [showModal3, setShowModal3] = useState(false)

    function close() {
        setShowModal(false)
    }
    function close2() {
        setShowModal2(false)
    }
    function close3() {
        setShowModal3(false)
    }
    function modalShow() {
        setShowModal(true)
    }
    function modal2Show() {
        setShowModal2(true)
    }
    function modal3Show() {
        setShowModal3(true)
    }

    const [mic, setMic] = useState(<BsMicFill size='20px'/>)
    const [listen, setListen] = useState(false)
    const [visi, setVisi] = useState('none')
    const [startListen, setStartListen] = useState(SpeechRecognition.stopListening)
    const micFunc=()=>{
      setMic(<BsMicFill size='20px'/>)
      setStartListen(SpeechRecognition.startListening)
      setListen(true)
      setVisi('block')      
    }
  
    const {
      transcript,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = useSpeechRecognition();
  
    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }
  
    const change=()=>{
      console.log("Hello");
    }

    return (
        <>
            <div className='bg-gray-900 sticky top-0 z-50 flex items-center overflow-auto px-6 py-3 justify-between text-white right-0'>
                <ChatBig onClose={close} visible={showModal} />
                <Settings onClose={close2} visible={showModal2} />
                <Notifications onClose={close3} visible={showModal3} />
                <div className='flex items-center'>
                    <span className='cursor-pointer' onClick={modalShow}><IoReorderThreeOutline size="40px" /></span>
                    <Link to="/">
                        <div className='flex cursor-pointer items-center mx-4'>
                            <AiFillYoutube size="36px" />
                            <p className='text-xl font-bold'>YouTube</p>
                        </div>
                    </Link>
                </div>
                <div className=' flex items-center'>
                    <input onChange={change} value={transcript} className=' w-[40rem] p-2 outline-none bg-black border border-gray-800' type="text" placeholder='Search' />
                    <button style={{ display: visi }} className='fixed m-[38rem]'><MdOutlineCancel size="20px" /></button>
                    <button className='border border-gray-800 bg-gray-800 px-4 py-[0.45rem]'><AiOutlineSearch size="24px" /></button>
                    <button onClick={micFunc} className='p-3 rounded-full mx-2 bg-black'>{mic}</button>
                </div>
                <div className='flex items-center'>
                    <Link to="/upload">
                        <BiVideoPlus className=' cursor-pointer mx-4' size="24px" />
                    </Link>
                    <span onClick={modal3Show}><BsBell className=' cursor-pointer mx-4' size="20px" /></span>
                    <span onClick={modal2Show}><MdOutlineAccountCircle className=' cursor-pointer mx-4 mr-6' size="24px" /></span>
                </div>
            </div>
        </>
    )
}

export default Navbar