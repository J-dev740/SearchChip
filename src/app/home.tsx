'use client';
import React, { useEffect, useState } from 'react'
import { getBlogPosts1 }from '@/utils';
import Logo from './logo.png'
import logo from '../app/assets/logo.svg'
import Image from 'next/image';
import { createClient } from "contentful";
const client = createClient({
//   space: "7oo9puuj7iqt",
//   accessToken: "YhY12sA6qt2h-XslJiNtmYFWysR0vjcXNRlosSk7Tn8",
  space: '5xpzpeuq39x5',
  accessToken: 'j-XgL8nTm1qouIKSQuv7dHOyg3S8qkVTTKbuAWhHHcI',
});

function LandingPage() {
const [stories,setStories]=useState<any[]>([])
useEffect(() => {
const fetchStories=async()=>{
try {
    
    const stories= await getBlogPosts1('shortStories');
    // const response = await client.getEntries({
    //     content_type: "shortStories",
    //   });
    // const stories=response.items;
    console.log('stories------------------------->')
    console.log(stories);
    const metadata=stories.map((item)=>{
        return {
            slug:item.fields.slug,
            title:item.fields.title,
            img:item.fields.titleImage
        }

    })
    // console.log(metadata);
    setStories(metadata)
    console.log('stories',stories)
    
} catch (error) {
    
}
}
fetchStories();
}, [])

    return (
        <div 
        // style={{backgroundImage:`url(https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg)`}}
        className=" bg-[url('./bg.png')] w-full bg-cover bg-center bg-no-repeat min-h-screen h-fit  ">
            <div className="relative bg-black bg-opacity-85 w-full   min-h-screen h-fit flex  flex-col justify-center items-center">
            {/* social media section absolute */}

            <div className='max-w-full mt-[150px] md:mt-[50px]  w-[80%]  h-fit  flex flex-col gap-2 sm:gap-4 items-center text-wrap'>
                {/* logo */}
                <div
                className='flex object-center self-center '
                // style={{backgroundImage:`url(${Logo})`}}
                >
                <Image 
                className='flex md:w-auto md:h-auto w-[120px] h-[120px] sm:animate-hit1 animate-hit'
                src={Logo} alt={'image'} />
                </div>
                {/* header */}
                <div className='flex flex-col justify-between  w-full items-start p-2 my-auto text-wrap'>
                    {/* <p className='text-[74px] text-white tracking-widest w-full text-center font-extrabold font-inter'>Prathibha Productions</p> */}
                    <Image className='flex items-center justify-center object-center w-full h-[90px] md:h-[200px] '
                    src={logo} alt={'logo'}/>
                    {/* <p className='text-[32px] text-white tracking-widest items-center text-center uppercase font-extrabold font-inter w-full'>Cinema is an art, Not a Business</p> */}
                </div>
                {/* aboutus */}
                <div className=' relative flex flex-col justify-between items-center sm:p-2 text-center   text-wrap'>
                    <span className='text-[12px] md:text-[22px] font-bold font-inter uppercase '>About Us</span>
                    <div className='flex  w-full md:w-[80%] text-[10px] md:text-[22px] font-medium font-roboto py-4 my-2 text-start'>
                        Welcome to Prathibha Productions, We are on a Mission to FInd  amazing storytellers
                        from all walks of life , not just the usual film crowd. Join us in making movies 
                        that break the rules  and share  unique perspectives.Welcome to the new era of FilmMaking.
                    </div>
                    <div className='flex w-full text-right flex-row justify-end   mr-[20px]  p-1 text-[10px] md:text-[20px] font-medium uppercase tracking-tight '>
                        <p className='flex'>
                        - Amal Akshay
                            </p></div>
                </div>

            </div>
            {/* upload your stories  */}
            <div className='flex flex-col  justify-between items-center py-2 px-2 mb-[30px] text-[16px] font-bold font-roboto'>
                {/* title */}
                <span className='font-bold uppercase text-center text-[20px] sm:text-[32px] w-[80%] p-2'>Short Lessons </span>
                {/* stories div */}
                <div className='flex  flex-col sm:flex-row sm:w-[80%] w-fit sm:gap-[30px] gap-[10px] sm:overflow-x-scroll overflow-y-scroll no-scrollbar sm:h-fit h-[350px]  justify-between items-center py-4 px-4'>
                    {
                       stories.length>0? stories.map((item,index)=>{
                            return (
                                <div className='flex flex-col hover:scale-110 ease-linear duration-150   justify-between  items-center '>
                                    {/* image div */}
                                    <div 
                                    style={{backgroundImage:`url(https:${item.img.fields.file.url})`}}
                                    className='group flex sm:w-[200px] w-[200px] h-[250px] sm:h-[300px] rounded-[20px] bg-cover bg-center bg-no-repeat '>
                                        <div className='hidden ease-in duration-200 group-hover:flex flex-row items-center justify-center  w-full h-full bg-black bg-opacity-75'>
                                            <span className='flex w-fit h-fit font-extralight text-white font-roboto text-center ease-in duration-150 '>Go to storyline</span>
                                        </div>
                                    </div>
                                    {/* title div  */}
                                    <div className='flex w-full text-end items-center'>{item.title}</div>
                                </div>
                            )
                        })
                    :''}

                </div>
            </div>
            {/* copyright */}
            <div className='flex flex-row items-center text-center font-inter  flex-wrap text-[8px] text-white  sm:text-[12px] mt-[12px]'>Copyright © prathibhaproductions. All Right Reserved.</div>


            </div>

        </div>
    )
}

export default LandingPage