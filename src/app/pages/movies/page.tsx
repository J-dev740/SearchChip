import React from 'react'

function Movies() {
  return (
    <div className="relative bg-transparent w-full bg-[url('./bg.webp')] py-8 bg-cover bg-center bg-no-repeat min-h-screen h-fit flex  flex-col justify-center items-center">
        <ul className='flex flex-col justify-between items-center h-screen overflow-y-scroll gap-y-[20px] no-scrollbar p-2 w-[80%] '>
            
          {new Array(6).fill(0).map((item,index)=>{
            return (
                <li className='flex w-full h-[300px] items-center justify-start'>
                <div className='flex flex-row justify-start gap-[10px] items-center w-full text-wrap'>
                    {/* image part  */}
                    <div className='flex w-[300px] h-[200px] bg-white rounded-[20px] p-2 '></div>
                    {/* title and story part  */}
                    <div className='flex w-full flex-col justify-between items-start gap-3'>
                        <p>Title-synonyms-details</p>
                        <p>StoryLine------------------------------------------------------------<br/>
                        -------------------------------------------------------------------------<br/>
                        -------------------------------------------------------------------------<br/></p>
                    </div>

                </div>
            </li>
            )
          })
           }
        </ul>

    </div>
  )
}

export default Movies