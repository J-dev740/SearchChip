import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
function SideBar() {
  return (
    <div className='  fixed right-8 top-36  z-50 gap-[80px] py-4
    bg-slate-800 bg-opacity-25 backdrop-blur-lg
 rounded-[20px] px-4  h-fit w-fit flex flex-col justify-between items-center  '>
        <FaFacebook className='w-[40px] h-[40px]  bg-transparent text-white hover:cursor-pointer' href='#'></FaFacebook>
        <FaWhatsapp className='w-[40px] h-[40px]  bg-transparent text-white hover:cursor-pointer' href='#'></FaWhatsapp>
        <FaInstagram className='w-[40px] h-[40px]  bg-transparent text-white hover:cursor-pointer' href='#'></FaInstagram>
        <GrYoutube className='w-[40px] h-[40px]  bg-transparent text-white hover:cursor-pointer' href='#'></GrYoutube>
    </div>
  )
}

export default SideBar