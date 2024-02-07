'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import Image from 'next/image'

function NavBar() {
    const [toggle,setToggle]=useState(false);
    return (
        // <nav className='flex flex-row justify-between items-center p-[30px] rounded-[20px]  bg-black bg-opacity-70 backdrop-blur-lg '>
        //     {/* logo part */}
        //     <div>
        //     Logo
        //     </div>
        //     {/* navigation part  */}
        //     <div>
        //         <ul className='flex flex-row justify-between  gap-10 font-bold text-[24px] font-roboto '>
        //             <li>
        //                 <Link href='#'>
        //             Learn Film Making
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link href='#'>
        //             Movies
        //                 </Link>
        //             </li>           
        //                 <li>
        //                 <Link href='#'>
        //             Reviews
        //                 </Link>
        //             </li>              
        //              <li>
        //                 <Link href='#'>
        //             Gallery
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link href='#'>
        //             Join WorkShop
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link href='#'>
        //             contact Us
        //                 </Link>
        //             </li>


        //         </ul>
        //     </div>
        // </nav>


        <nav className=" sticky top-0 z-30 flex flex-row justify-between items-center px-[10px]   rounded-[20px]  ">
            <div className="absolute inset-0 w-full h-fit bg-black bg-opacity-20 flex flex-row z-30 flex-wrap items-center justify-between mx-auto p-2 uppercase font-inter">
                <div className=" flex xl:w-[200px] md:w-[100px] h-[50px]">
                    <Link
                    href='/'>
                    <Image 
                        className='flex items-center justify-center  object-contain object-left  flex-grow-0 flex-shrink h-[50px] sm:[h-90px] '
                    src={Logo} alt={''}/>
                    </Link>

                    {/* <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse"> */}
                        {/* <img src="" className="h-8" alt="Logo" /> */}
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                    {/* </a> */}
                </div>
                <button 
                onClick={()=>setToggle(!toggle)}
                 type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
                    {/* <span className="sr-only">Open main menu</span> */}
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${toggle?'flex flex-row justify-end items-center ':'hidden'} w-full   h-fit   md:flex md:w-auto` }>
                    <ul className=" bg-black bg-opacity-60 font-bold md:text-[15px]  font-roboto md:justify-between text-white flex flex-col items-end space-y-4 px-4 md:p-0 mt-2  rounded-lg md:flex-row md:space-x-[50px] space-x-[20px] rtl:space-x-reverse md:mt-0 ">
                        <li className='flex flex-row  flex-grow  md:flex-col'>

                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" hover:scale-105 ease-in duration-100 text-center bg-transparent inline-flex items-center " type="button">Learn FilmMaking <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                            </button>

                            {/* <!-- Dropdown menu --> */}
                            <div id="dropdown" className="  hidden bg-black z-50 ring-1 ring-white bg-opacity-100 backdrop-blur-lg rounded-[10px] divide-y divide-white shadow w-auto text-wrap dark:bg-gray-700">
                                <ul className="flex  flex-col py-2 text-md text-white dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <a href="#" className="hover:scale-105 ease-in duration-100 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tamil</a>
                                    </li>
                                    <li  onClick={()=>setToggle(!toggle)}>
                                        <a href="/pages/filmmaking" className="hover:scale-105 ease-in duration-100 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Malayalam</a>
                                    </li>

                                </ul>
                            </div>

                        </li>
                        <li className='flex hover:scale-105 ease-in duration-100 '> 
                            <Link  onClick={()=>setToggle(!toggle)}
                            href='/pages/movies'>
                                Stories
                            </Link>
                        </li>
                        <li className='flex hover:scale-105 ease-in duration-100 '> 
                            <Link onClick={()=>setToggle(!toggle)} href='#'>
                                Reviews
                            </Link>
                        </li>
                        <li className='flex hover:scale-105 ease-in duration-100 '> 
                            <Link onClick={()=>setToggle(!toggle)} href='#'>
                                Movies
                            </Link>
                        </li>
                        <li className='flex hover:scale-105 ease-in duration-100 '> 
                            <Link onClick={()=>setToggle(!toggle)} href='#'>
                                Join WorkShop
                            </Link>
                        </li>
                        <li className='flex hover:scale-105 ease-in duration-100 '> 
                            <Link onClick={()=>setToggle(!toggle)} href='/pages/contactus'>
                                contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar