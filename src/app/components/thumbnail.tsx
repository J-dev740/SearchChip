'use client';
import React, { useEffect, useState } from 'react'

const YOUTUBEAPI='https://www.googleapis.com/youtube/v3/playlistItems';
interface Ithumb {
    playlistId:string;
    setLink:(link:string)=>void;
}

export const YouTubeThumbnail = ({ setLink,playlistId }:Ithumb) => {
    console.log('youtubethumbnailpid',playlistId)
    const [ThumbnailUrl, setThumbnailUrl] = useState<any[]>([]);
  
    useEffect(() => {
      const fetchThumbnail = async () => {
        try {
            const res= await fetch(`${YOUTUBEAPI}?part=snippet&playlistId=${playlistId.toString()}&maxResults=50&key=AIzaSyANOzCc2W1VVf2ueCQGxO3SFayDhHzwyWE`)
            const data= await res.json();
            // console.log(data);
            const ThumbnailUrls=data.items.map((item:any)=> item.snippet.thumbnails.medium.url)
            console.log(ThumbnailUrls)
            setThumbnailUrl(data.items)
            setLink(`https://www.youtube.com/watch?v=${ThumbnailUrl[0].snippet.resourceId.videoId}`)
            
        } catch (error) {
            console.log('error getting data',error)
        }
      };
  
      fetchThumbnail();
    }, [playlistId]);
    console.log('thumbnailUrl....')
  console.log(ThumbnailUrl)
    return (
      <div className='flex fle-col justify-between items-center  overflow-y-scroll no-scrollbar mb-auto rounded-[20px] p-2 w-fit h-screen    '>
       
      {ThumbnailUrl.length>0 && (
        <ul className='flex flex-col gap-8 items-center justify-start p-4 my-auto space-y-[10px] rounded-[20px] '>
            {ThumbnailUrl.map((item,index)=>{
                // if(index==0)
                return (
                    <li
                    key={index} 
                    style={{backgroundImage:`url(${item.snippet.thumbnails.medium.url})`}}
                    className='group flex bg-cover bg-center bg-no-repeat object-center w-[300px] h-[180px] rounded-[20px] '>
                        <div 
                        onClick={()=>setLink(`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`)}
                        className=' ease-in-out duration-150  hidden group-hover:flex w-full h-full items-center text-center
                         justify-center  bg-black bg-opacity-75 font-bold uppercase text-white'>play</div>
                    </li>
                )
            })}

        </ul>
      )}
      </div>
    );
  };