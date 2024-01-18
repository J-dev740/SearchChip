import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import Logo from './logo.png'
import Image from 'next/image';
function LandingPage() {
    return (
        <div 
        // style={{backgroundImage:`url(https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg)`}}
        className=" bg-[url('./bg.webp')] w-full bg-cover bg-center bg-no-repeat min-h-screen h-fit  ">
            <div className="relative bg-black bg-opacity-75 w-full   min-h-screen h-fit flex  flex-col justify-center items-center">
            {/* social media section absolute */}

            <div className='max-w-full  w-[80%]  h-fit  flex flex-col gap-8 items-center text-wrap'>
                {/* logo */}
                <div
                className='flex object-center self-center '
                // style={{backgroundImage:`url(${Logo})`}}
                >
                <Image src={Logo} alt={'image'} />
                </div>
                {/* header */}
                <div className='flex flex-col justify-between  w-full items-start p-2 my-auto text-wrap'>
                    <p className='text-[74px] text-white tracking-widest w-full text-center font-extrabold font-inter'>Prathibha Productions</p>
                    <p className='text-[32px] text-white tracking-widest items-center text-center uppercase font-extrabold font-inter w-full'>Cinema is an art, Not a Business</p>
                </div>
                {/* aboutus */}
                <div className=' relative flex flex-col justify-between items-center p-2 text-center   text-wrap'>
                    <span className='text-[32px] font-bold font-inter uppercase '>About Us</span>
                    <p className='max-w-full w-[80%] text-[32px] font-medium font-roboto py-4 my-2 text-start'>Welcome to Prathibha Productions, We are on a Mission to FInd  amazing storytellers
                        from all walks of life , not just the usual film crowd. Join us in making movies 
                        that break the rules  and share  unique perspectives.Welcome to the new era of FilmMaking.
                    </p>
                    <span className='w-full   p-2 text-[30px] font-medium text-end uppercase tracking-tight'>- Amal Akshay</span>
                </div>

            </div>
            {/* upload your stories  */}
            <div className='flex flex-col justify-between items-center py-2 px-2 text-[16px] font-bold font-roboto'>
                {/* title */}
                <span className='font-bold uppercase text-start text-[32px] w-full'>Short Stories </span>
                {/* stories div */}
                <div className='flex flex-row w-full gap-[20px] overflow-auto h-fit justify-between items-center py-2'>
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

        </div>
    )
}

export default LandingPage