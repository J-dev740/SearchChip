'use client';
import React, { useEffect, useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
function SideBar() {
  const [screenWidth,setScreenWidth]=useState<any>(null);
  useEffect(() => {
    // Function to update screenWidth
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Initial screen width
    updateScreenWidth();

    // Event listener to update screenWidth on window resize
    window.addEventListener('resize', updateScreenWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, [])
  return (
    <div className={`z-50 gap-[80px] py-2 md:py-4
    bg-slate-800 bg-opacity-25 backdrop-blur-lg
 rounded-[20px] px-2 md:px-4  h-fit w-fit flex  ${screenWidth>760?"fixed flex-col right-8 top-36":"absolute flex-row  left-[26%]  bottom-4"}  gap-8 md:justify-between items-center   `}>
        <FaFacebook className='flex w-[20px] h-[20px] md:w-[40px] md:h-[40px] bg-transparent text-white hover:cursor-pointer' href='#'></FaFacebook>
        <FaWhatsapp className='flex w-[20px] h-[20px] md:w-[40px] md:h-[40px]  bg-transparent text-white hover:cursor-pointer' href='#'></FaWhatsapp>
        <FaInstagram className='flex w-[20px] h-[20px] md:w-[40px] md:h-[40px] bg-transparent text-white hover:cursor-pointer' href='#'></FaInstagram>
        <GrYoutube className='flex w-[20px] h-[20px] md:w-[40px] md:h-[40px] bg-transparent text-white hover:cursor-pointer' href='#'></GrYoutube>
    </div>
  )
}

export default SideBar