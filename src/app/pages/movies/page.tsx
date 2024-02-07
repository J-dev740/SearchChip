// 'use client';
import React, { useEffect, useState } from 'react'
import {getBlogPosts} from '../../../utils'
import Image from 'next/image'
import { createClient } from 'contentful';
import {InferGetStaticPropsType, GetStaticProps } from 'next';
import { getImageSize, optimizeImage } from 'next/dist/server/image-optimizer';
import Link from 'next/link';

// type posts=any
// export const  getStaticProps=(async(context:any)=>
// {
//     console.log(typeof(context))
//     const client = createClient({
//         space: '5xpzpeuq39x5',
//         accessToken: 'j-XgL8nTm1qouIKSQuv7dHOyg3S8qkVTTKbuAWhHHcI',
//       });
//       const res=await client.getEntries({content_type:'blogPost'})
//       return {
//         props:{
//             posts:res.items
//         }
//       }
//     }
//     ) satisfies  GetStaticProps<{
//         posts:any
//     }>
const  Movies= async ()=> {
//   const client = createClient({
//         space: '5xpzpeuq39x5',
//         accessToken: 'j-XgL8nTm1qouIKSQuv7dHOyg3S8qkVTTKbuAWhHHcI',
//       });
//       console.log(client);
//       try {
//            client.getEntries({content_type:'blogPost'}).then((res)=>{
//                console.log('posts')
//                console.log(res.items);
//            }).catch((e)=>console.log(e))
//       } catch (error) {
//         console.log('error)')
//         console.log(error);
//       }
// const [posts,setPosts]=useState<any[]>([])

const posts=await getBlogPosts();

    // console.log("reading posts...",posts[0]?.fields);
    // console.log(posts[2]?.fields?.story.content[0].content[0].value)
    // console.log(posts)
    // console.log(posts[1]?.fields?.summary?.content[0]?.content[0].value)
  return (
    <div className="bg-[url('./bg.webp')]  bg-cover bg-center bg-no-repeat">
    <div className="relative bg-black bg-opacity-75 w-full object-center align-middle py-8   min-h-screen h-fit flex  flex-col justify-center items-center">

        <ul className='flex flex-col justify-between items-center h-screen overflow-y-scroll gap-[30px] md:gap-y-[10px] no-scrollbar p-2 md:w-[80%] w-[98%] '>
            
          {posts.length>0?posts.map((post:any,index)=>{
            return (
                <li 
                key={post.sys.id}
                // key={index}
                className='flex md:w-fit md:h-[300px] h-fit w-[400px] items-start justify-start'>
                <div className='flex md:flex-row flex-col md:justify-start items-center p-4  gap-[10px] md:items-center w-fit text-wrap'>
                    {/* image part  */}
                    <Link
                    className='flex self-start p-2'
                    href={'/pages/movies/'+post.fields.slug}
                    >
                    <div
                    style={{backgroundImage:`url(https:${post.fields.titleImge.fields.file.url})`}}
                     className='flex md:w-[400px] w-[300px] h-[200px] bg-transparent rounded-[20px] p-2 bg-cover bg-center bg-no-repeat '>
                        {/* <Image 
                        src={'https:'+post.fields.titleImge.fields.file.url}
                        alt='action-shot'
                        width={post.fields.titleImge.fields.file.details.image.width}
                        height={post.fields.titleImge.fields.file.details.image.width}
                        className='flex object-center object-cover rounded-lg'
                        /> */}


                        {/* <img src={`${post.fields.titleImge}`} alt='.../' className=' flex object-center object-contain bg-slate-400'/> */}
                     </div>
                        </Link>
                    {/* title and story part  */}
                    <div className='flex w-[87%] self-start flex-col justify-between text-wrap items-start gap-3 uppercase font-inter font-bold'>
                        <p>{post.fields.title}</p>
                        <p className='flex flex-wrap flex-shrink font-inter font-light text-white  text-wrap'>
                         {post.fields.summary}</p>
                    </div>

                </div>
            </li>
            )
          })
           :''}
        </ul>

    </div>
    </div>
  )
}

export default Movies

// Movies.getInitialProps=async()=>{
//     const Posts= await getBlogPosts();
//     console.log(Posts);
//     return {
//         props:{
//             posts:Posts
//         }
//     };
// }