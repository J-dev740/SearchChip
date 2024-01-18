'use client';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { YouTubeThumbnail } from './thumbnail';
// import getVideoInfo from 'get-video-info'
// import axios from 'axios';
// import { Cheerio } from 'cheerio';


interface Imodal {
    handleExit: () => void;
    playlistID:string;

}

function YoutubeModal({ handleExit,playlistID }: Imodal) {
const [vidLink,setvidLink]=useState('');
    return (
        <div className='fixed  z-50 inset-0 flex justify-center bg-black bg-opacity-95 backdrop-blur-sm font-alpina font-bold'>
            <div className='flex flex-col  items-center w-full h-screen overflow-scroll no-scrollbar p-4 '>
                {/* header */}
                <div className='flex flex-row justify-between items-start w-full px-8 py-2  '>
                    <p>youtube Modal</p>
                    <span
                        onClick={handleExit}
                        className='text-white text-[32px] font-bold font-roboto'>X</span>
                </div>
                {/* body */}
                <div className='flex flex-row  gap-[20px] items-start w-[90%]  rounded-[20px] h-fit'>
                    {/* section 1 player  */}
                    <div className='flex  flex-col justify-between items-center  w-[70%] h-fit rounded-[20px]  '>
                        <ReactPlayer
                            controls={true}
                            // light={true}
                            wrapper={({ children }) => {
                                return (
                                    <div className='flex flex-col w-[80%]  h-[400px] rounded-[30px] overflow-hidden object-center object-cover '>
                                        {children}
                                    </div>
                                )
                            }}
                            url={vidLink} />
                    </div>
                    {/* section 2 playlist  */}
                    <div className='flex flex-col justify-start items-center w-[30%]  rounded-[20px] my-auto  py-4  h-fit min-h-screen  px-1'>
                        {/* <YouTubeThumbnail videoUrl={`${playlist}&index=0`}/> */}
                        <YouTubeThumbnail
                        setLink={(link:string)=>{
                            // console.log(link);
                            console.log('set the video link as ',link)
                            setvidLink(link);
                            console.log(vidLink)
                        }}
                         playlistId={playlistID}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default YoutubeModal