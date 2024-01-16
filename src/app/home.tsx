import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import Logo from './logo.png'
import Image from 'next/image';
function LandingPage() {
    return (
        <div className=" relative bg-transparent w-full bg-[url('./bg.webp')] bg-cover bg-center bg-no-repeat min-h-screen h-fit flex  flex-col justify-center items-center  ">
            {/* social media section absolute */}

            <div className='max-w-full  w-[80%]  h-fit  flex flex-col   items-center text-wrap'>
                {/* logo */}
                <div
                className='flex object-center self-center '
                // style={{backgroundImage:`url(${Logo})`}}
                >
                <Image src={Logo} alt={'image'} />
                </div>
                {/* header */}
                <div className='flex flex-col justify-between items-center p-2 my-auto text-wrap'>
                    <p className='text-[74px] text-white tracking-widest  font-extrabold font-sans'>Prathibha Productions</p>
                    <p className='text-[32px] text-white tracking-wide font-bold font-sans '>Cinema is an art, Not a Business</p>
                </div>
                {/* aboutus */}
                <div className=' relative flex flex-col justify-between items-center p-2 text-center   text-wrap'>
                    <span className='text-[32px] font-bold font-sans '>About Us</span>
                    <p className='max-w-full text-[32px] font-medium font-sans py-4 my-2'>Welcome to Prathibha Productions, We are on a Mission to FInd  amazing storytellers
                        from all walks of life , not just the usual film crowd. Join us in making movies 
                        that break the rules  and share  unique perspectives . Welcome to the new era of FilmMaking.
                    </p>
                    <span className='w-full   p-2 text-[30px] font-light text-end'>- Amal Akshay</span>
                </div>

            </div>
            {/* upload your stories  */}
            <div className='flex flex-col justify-between items-center py-2 px-2 text-[16px] font-bold font-sans'>
                {/* title */}
                <span>Upload your stories </span>
                {/* stories div */}
                <div className='flex flex-row w-full gap-[20px] overflow-auto h-fit justify-between items-center p-2'>
                    {
                        new Array(4).fill(0).map((item,index)=>{
                            return (
                                <div className='flex flex-col  justify-between  items-center '>
                                    {/* image div */}
                                    <div className='flex w-[200px] h-[300px] rounded-[20px] bg-white '></div>
                                    {/* title div  */}
                                    <div className='flex w-full text-end items-center'>Title</div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </div>
    )
}

export default LandingPage