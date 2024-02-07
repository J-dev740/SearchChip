// 'use client';
import React from "react";
import getBlogPosts from "@/utils";
import { createClient } from "contentful";
const client = createClient({
  space: "7oo9puuj7iqt",
  accessToken: "YhY12sA6qt2h-XslJiNtmYFWysR0vjcXNRlosSk7Tn8",
  // space: '5xpzpeuq39x5',
  // accessToken: 'j-XgL8nTm1qouIKSQuv7dHOyg3S8qkVTTKbuAWhHHcI',
});

const Posts = async ({ params }) => {
  const { slug } = params;
  console.log("hello world");
  const post = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
  });
  console.log(slug);
  console.log("reading post");
  console.log(post);
  const { title, summary, titleImge, story } = post.items[0].fields;
  console.log(title, summary, titleImge);
  return (
    <div className="relative  w-full bg-[url('./bg.webp')] bg-opacity-75 py-8 bg-cover bg-center bg-no-repeat min-h-screen h-fit flex  flex-col justify-center items-center">
      <div className="flex w-screen h-screen justify-center items-center  bg-black bg-opacity-75">
      <div className="flex w-full h-fit  items-center justify-start ">
        <div className="flex flex-col justify-between gap-[10px] items-center w-full h-fit text-wrap">
          {/* image part  */}
          <div
            style={{
              backgroundImage: `url(https:${titleImge.fields.file.url})`,
            }}
            className="flex flex-shrink md:w-[600px] w-[350px] h-[200px] md:h-[400px] bg-transparent rounded-[20px] p-2 bg-cover bg-center bg-no-repeat "
          >
            {/* <Image 
                        src={'https:'+titleImge.fields.file.url}
                        alt='action-shot'
                        width={titleImge.fields.file.details.image.width}
                        height={titleImge.fields.file.details.image.width}
                        className='flex object-center object-cover rounded-lg'
                        /> */}

            {/* <img src={`${post.fields.titleImge}`} alt='.../' className=' flex object-center object-contain bg-slate-400'/> */}
          </div>
          {/* title and story part  */}
          <div className="flex w-full  flex-col justify-between items-center  text-[20px] md:text-[24px]  gap-3">
            <p>{title}</p>
            <p className=" flex flex-wrap text-wrap w-[80%]  text-white justify-center items-center text-[16px]">
              {story.content[0].content[0].value}
            </p>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Posts;
