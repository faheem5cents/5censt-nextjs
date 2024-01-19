import React from 'react';
import WordpressPluginVideoBg from "/public/assets/Optimizer/WordpressPluginVideoBg.png"
import Link from 'next/link';

const WordpressPluginVideo = () => {
    return (
        <>
            <div className='p-[10px] pb-[50px] md:py-[100px] px-[10]'>
                <div className='max-w-[1300px] mx-auto
                '>
                    <div className={`py-10 px-5 md:p-[50px] rounded-[35px] bg-[url('../assets/Optimizer/WordpressPluginVideoBg.png')] bg-cover bg-no-repeat bg-center`}>
                        <h2 className='mb-5 text-white text-center text-[32px] md:text-[50px] font-semibold leading-none'>
                            Boost Your WordPress <span className='text-[#4FA83D]'> Sites Too!</span>
                        </h2>
                        <p className="text-white text-center text-base md:text-base mb-[5px] leading-[1.2em] lg:leading-[1.2em] mx-0 lg:mx-[5%]">Even if you have your website hosted & built on wordpress, that’s no problem!  Optimize your website within a few clicks just by activating our wordpress plugin on it, configuring it is as easy as setting up a website on wordpress.
                        </p>
                        <div className='mb-5 pt-5 flex justify-center'>
                            <Link className='text-white text-[25px] font-semibold leading-none px-[30px] py-4 border border-[#4fa83d] bg-[#4fa83d] rounded-[10px] transition duration-300 hover:bg-transparent hover:text-[#4fa83d]' href="#">Download 5centsCDN Plugin</Link>
                        </div>
                        <div className='pt-10 lg:px-[100px]'>
                            <iframe className='w-full aspect-video' src='https://www.5centscdn.net/wp-content/uploads/2023/05/Sample-editing-1.mp4'></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WordpressPluginVideo;