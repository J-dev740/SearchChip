'use client';
import React, { useEffect, useState } from 'react'
import { getBlogPosts1,getBlogPosts }from '@/utils';
import Logo from './logo.png'
import logo from '../app/assets/logo.svg'
import Image from 'next/image';
import { createClient } from "contentful";
import ReactPlayer from 'react-player';
import { CiPlay1 } from "react-icons/ci";
const client = createClient({
//   space: "7oo9puuj7iqt",
//   accessToken: "YhY12sA6qt2h-XslJiNtmYFWysR0vjcXNRlosSk7Tn8",
  space: '5xpzpeuq39x5',
  accessToken: 'j-XgL8nTm1qouIKSQuv7dHOyg3S8qkVTTKbuAWhHHcI',
});

function LandingPage() {
const [stories,setStories]=useState<any[]>([])
const [toggle,setToggle]=useState(-1);
useEffect(() => {
const fetchStories=async()=>{
try {
    
    // const stories= await getBlogPosts1('shortStories');
    const stories= await getBlogPosts('shortStories');


    // const response = await client.getEntries({
    //     content_type: "shortStories",
    //   });
    // const stories=response.items;
    console.log('stories------------------------->')
    console.log(stories);
    const metadata=stories.map((item)=>{
        return {
            vid:item.fields.vid,
            title:item.fields.title,
            img:item?.fields?.thumbnail,
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
        className=" bg-[url('./bg.webp')] w-full bg-cover bg-center bg-no-repeat min-h-screen h-fit  ">
            <div className="relative bg-black bg-opacity-80 w-full   min-h-screen h-fit flex  flex-col justify-center items-center">
            {/* social media section absolute */}

            <div className='max-w-full mt-[150px] md:mt-[100px] xl:mt-[100px]  w-[80%]  h-fit  flex flex-col gap-2 sm:gap-4 items-center text-wrap'>
                {/* logo */}
                <div
                className='flex object-center self-center '
                // style={{backgroundImage:`url(${Logo})`}}
                >
                <Image 
                className='flex md:w-auto md:h-auto w-[120px] h-[120px] -mb-4 sm:animate-hit1 animate-hit'
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
                <div className=' relative flex flex-col justify-between items-center sm:p-2 text-center '>
                    <span className='text-[12px] md:text-[22px] font-normal font-inter underline underline-offset-2 text-white '>About Us</span>
                    <div className='flex  w-[110%] sm:w-full tracking-wide  md:w-[80%] text-[10px] md:text-[22px] font-normal text-white font-Satoshi  py-4 my-2 text-start text-wrap'>
                    Welcome to Prathibha Productions! We're on a mission to discover exceptional storytellers
                     from every background, not just the usual film crowd. If you're a talented newcomer eager
                      to break into the Indian film industry, you've come to the right place. We're more than just 
                      a film production company; we're a mini-film school too. Yes, we will teach you complete film 
                      lessons for free. Join us in making movies that break the rules and share unique perspectives.
                       Welcome to the new era of filmmaking!
                    </div>
                    <div className='flex w-full text-right flex-row justify-end  -mt-4   mr-[20px]  p-1 text-[10px] md:text-[20px] font-medium uppercase tracking-tight '>
                        <p className='flex text-white '>
                        - Amal Akshay
                            </p></div>
                </div>

            </div>
            {/* upload your stories  */}
            <div className='flex flex-col  justify-between items-center py-2 px-2 mb-[30px] text-[16px] font-bold font-roboto'>
                {/* title */}
                <span className='font-bold uppercase text-center text-[20px] sm:text-[32px] w-[80%] text-white p-2'>Short Lessons </span>
                {/* stories div */}
                <div className='flex  flex-col sm:flex-row sm:w-[80%] w-fit sm:gap-[30px] gap-[15px] sm:overflow-x-scroll overflow-y-scroll no-scrollbar sm:h-fit h-[350px]  justify-between items-center py-4 px-4'>
                    {
                       stories.length>0? stories.map((item,index)=>{
                            return (
                                <div 
                                key={index}
                                className='flex flex-col hover:scale-110 ease-linear duration-150   justify-between  items-center '>
                                    {/* image div */}
                                    <div 
                                        style={{backgroundImage:`url(https:${item.img.fields.file.url})`}}
                                        className='group flex sm:w-[200px] w-[200px] h-[250px] sm:h-[300px] rounded-[20px] bg-cover bg-center bg-no-repeat '>
                                        {!(toggle==index) && 
                                        (<div
                                            onClick={() => setToggle(index)}
                                            className='hidden ease-in duration-200 group-hover:flex flex-row items-center rounded-[20px] justify-center  w-full h-full bg-black bg-opacity-75'>
                                            <span className='flex w-fit h-fit font-bold text-[20px] text-white font-roboto text-center ease-in duration-150 '><CiPlay1 /></span>
                                        </div>)}
                                        <ReactPlayer
                            controls={true}
                            url={item.vid}
                            playing={(toggle==index?true:false)}
                            // width='100%'
                            // height='100%'
                            // light={true}
                            wrapper={({ children }) => {
                                return (
                                    <div className={`${(toggle==index)?'flex':'hidden'} flex-col w-[100%] h-[100%]  rounded-[20px] overflow-hidden object-center object-cover `}>
                                        {children}
                                    </div>
                                )
                            }}
                            // url={vidLink} 
                            />
                                    </div>
                                    {/* title div  */}
                                    <div className='flex w-full text-end items-center text-white '>{item.title}</div>
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