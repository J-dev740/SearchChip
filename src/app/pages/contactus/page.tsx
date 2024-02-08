'use client';
import React, { useState } from 'react'

function ContactUs() {

  return (
    <div className="bg-[url('./bg.webp')]  bg-cover bg-center bg-no-repeat">
    <div className="  w-full bg-black bg-opacity-75 py-8  min-h-screen h-fit flex  flex-col justify-center items-center">
        <div className='w-[75%] h-[75%] flex flex-col justify-between items-center p-4 gap-[10px]'>
            {/* search filter  */}

            {/* phone number part  */}
            {/* <div className='flex flex-col justify-between items-center gap-[20px] w-full h-fit text-bold text-white  text-3xl backdrop-blur-md  rounded-t-[30px] p-4'>
                <span>+919400717738</span>
                <span>+919400717738</span>

            </div> */}
            {/* drop a mail part  */}
            <div className='flex flex-col justify-between items-center gap-[20px] w-full h-fit text-bold text-white text-xl  md:text-3xl   rounded-b-[30px] p-4'>
                <p>Drop us a mail @</p>
                <div className='font-inter font-bold underline underline-offset-2'>Prathibhaproduction@gmail.com</div>
            </div>


        </div>

    </div>
    </div>
  )
}

export default ContactUs