'use client';
import React, { useState } from 'react'
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player/youtube';
import YoutubeModal from '@/app/components/youtubeModal';
function FilmMaking() {
  const youtubelist = [
    {
      pname:"intro",
      img: "https://media.discordapp.net/attachments/981697615685091358/1197300381940727908/the_akshai_26113_film_making_introduction_for_beginners._photog_10f483fc-c4d9-41d8-b2fc-5388fd27cac4.png?ex=65bac3df&is=65a84edf&hm=4f2e3b99be077b4c636fbb38a7fa843b6f589441ed45266e74248f5006e96ccb&=&format=webp&quality=lossless&width=1806&height=1012",
      url: "https://www.youtube.com/watch?v=QGqMJzywasg&list=PL4cUxeGkcC9iVGY3ppchN9kIauln8IiEh&index=1"
    },
    {
      pname:"pre-production",
      img: "https://media.discordapp.net/attachments/981697615685091358/1197302029392023644/the_akshai_26113_a_girl_is_writing_scripts_for_movie_making_sto_5a507ff4-8e7f-4df8-8e26-ffe6efbb125b.png?ex=65bac568&is=65a85068&hm=9e639a9a1a1f9b7cca24f9b35c5b52c1be2055ea111e8df1963e556a93232e37&=&format=webp&quality=lossless&width=1806&height=1012",
      url: "https://www.youtube.com/watch?v=NStlixg1RNw&list=PL4cUxeGkcC9iVGY3ppchN9kIauln8IiEh&index=2"
    },
    {
      pname:"production",
      img: "https://media.discordapp.net/attachments/981697615685091358/1197307026351587338/the_akshai_26113_A_black_FILM_CLAP_BOARD_with_CAMERA._PHOTOGRAP_3402abd4-7b0b-493e-a7b0-1c64008d56c2.png?ex=65baca0f&is=65a8550f&hm=6d68073b05583a2d3abdc983d00478a8690b7eb4f52d623317c2d1a5828d9d8c&=&format=webp&quality=lossless&width=1806&height=1012",
      url: "https://www.youtube.com/watch?v=QGqMJzywasg&list=PL4cUxeGkcC9iVGY3ppchN9kIauln8IiEh&index=3"
    },
    {
      pname:"post-production",
      img: "https://media.discordapp.net/attachments/981697615685091358/1197308883916562573/the_akshai_26113_a_person_video_editing_in_FCP._Photograhic._07879b2d-900b-41bb-a042-4a0944de76d1.png?ex=65bacbca&is=65a856ca&hm=6bc0a07b4c7ed1c9636cd2ff8d903d706cf9c8d041a62305955802ba4adbc75f&=&format=webp&quality=lossless&width=1806&height=1012",
      url: "https://www.youtube.com/watch?v=QGqMJzywasg&list=PL4cUxeGkcC9iVGY3ppchN9kIauln8IiEh&index=4"
    },
    {
      pname:"distribution",
      img: "https://media.discordapp.net/attachments/981697615685091358/1197309991045058620/the_akshai_26113_business_of_film_makers._how_they_make_money.__28b22ef5-1693-4aa4-ad84-2a04ce918821.png?ex=65baccd2&is=65a857d2&hm=6fdb010f8d9e8d0f089ca2325f90a44a2a47775ebb1a184438d538636095cb9e&=&format=webp&quality=lossless&width=1806&height=1012",
      url: "https://www.youtube.com/watch?v=QGqMJzywasg&list=PL4cUxeGkcC9iVGY3ppchN9kIauln8IiEh&index=5"
    },
    {
      pname:"business",
      img: "https://media.discordapp.net/attachments/981697615685091358/1197310171890860113/the_akshai_26113_business_of_film_makers._how_they_make_money.__f2e3e148-203c-4117-be61-693c3cb247d1.png?ex=65baccfd&is=65a857fd&hm=3bc6e49c3fe722dd28f81d5c31240258c609979111cb9302ec7113e2a0f5b18c&=&format=webp&quality=lossless&width=1806&height=1012",

      url: "https://www.youtube.com/watch?v=QGqMJzywasg&list=PL4cUxeGkcC9iVGY3ppchN9kIauln8IiEh&index=6"
    },
    {
      pname:"something",
      img: "https://media.discordapp.net/attachments/981697615685091358/1197300381940727908/the_akshai_26113_film_making_introduction_for_beginners._photog_10f483fc-c4d9-41d8-b2fc-5388fd27cac4.png?ex=65bac3df&is=65a84edf&hm=4f2e3b99be077b4c636fbb38a7fa843b6f589441ed45266e74248f5006e96ccb&=&format=webp&quality=lossless&width=1806&height=1012",
      url: "https://www.youtube.com/watch?v=QGqMJzywasg&list=PL4cUxeGkcC9iVGY3ppchN9kIauln8IiEh&index=7"
    },

  ]
  // const playlistId = 'DRF1KBTH15k';
  // const opts = {
  //   height: '390',
  //   width: '640',
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters,
  //     autoplay: 1,
  //   },
  // };
  const [modal, setModal] = useState(false);
  const videolink = "https://www.youtube.com/playlist?list=PLFsfg2xP7cbLygIgGT0vaJBBQ550rmzfR"
  const pid = videolink.split('?list=')[1].toString();
  console.log('pid', pid)
  const [Playlist, setPlaylist] = useState(pid)
  return (
    <div className="bg-[url('./bg.webp')]  bg-cover bg-center bg-no-repeat ">
      <div className=" relative  w-full bg-black  bg-opacity-85 py-8 min-h-screen h-fit flex  flex-col justify-center no-scrollbar items-center">
        <ul className='grid grid-cols-3 w-full h-fit  gap-y-[20px] gap-x-[10px] '>
          {
            youtubelist.map((item, index) => {
              return (
                <li
                  key={index}
                  className={(index == 0 ? 'col-span-3' : 'col-span-1') + ' flex  justify-center items-center rounded-[20px]'}>
                  <div
                    onClick={() => setModal(true)}
                    style={{backgroundImage:`url(${item.img})`}}
                    className=' group hover:scale-110 ease-linear duration-300 flex w-[300px] h-[200px] rounded-[10px] bg-white items-center text-wrap justify-center  object-center bg-cover bg-center bg-no-repeat'>
                      <div className='ease-in-out duration-200  flex w-full h-full flex-row items-center justify-center gap-2  bg-black bg-opacity-60 hover:text-center uppercase text-wrap font-bold text-white'>
                        {/* <span className='w-fit font-roboto font-light'>{index}</span> */}
                        <span className='w-fit font-roboto text-[32px] font-extrabold'>
                      {item.pname}
                        </span></div>
                    </div>
                </li>
              )
            })
          }

        </ul>
      </div>
      {modal && (
        <YoutubeModal
          handleExit={() => {
            setModal(false)
          }}
          playlistID={Playlist}
        />
      )}
    </div>
  )
}

export default FilmMaking


// {/* <li className='col-span-1 flex w-full justify-center items-center'>
// <div className=' flex w-[300px] h-[200px] rounded-[10px] bg-white items-center text-wrap justify-center  object-center  '></div>
// </li> */}