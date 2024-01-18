import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import VODTranscodingEncodingBlog from "@/assets/VideoService/VODTranscodingEncodingBlog.png"

const VSQuestionsAndBlog = () => {
    return (
        <>
            <div className='py-[50px] lg:py-[100px] bg-[#131518]'>
                <h2 className='text-white text-center text-[30px] md:text-[34px] lg:text-[40px] font-bold leading-[1.4em]'>
                    <span className='text-[#4fa83d]'>Have some questions</span> before getting started?
                </h2>
            </div>
            <div className='py-[60px] px-4 lg:py-[100px]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className={`border border-[#4fa83d]  rounded-[20px] bg-[url('../assets/VideoService/VSEncodingFreeBg.png')] bg-cover bg-no-repeat`}>
                        <div className='p-[30px] rounded-[20px] flex flex-col md:flex-row items-center flex-wrap'>
                            <div className='w-full lg:w-[80%]'>
                                <div className='p-[10px]'>
                                    <div className='mb-4'>
                                        <h2 className='text-[#4fa83d] text-center lg:text-left text-[32px] font-bold leading-[1.4em]'>Hop On Board With Free Trial</h2>
                                    </div>
                                    <div>
                                        <p className='text-white text-center md:text-center lg:text-left text-[20px] font-bold leading-[1.5]'>No setup fee, no commitment, start experiencing
                                            <br /> the advanced features right away.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full lg:w-1/5'>
                                <div className='p-[10px] flex justify-center items-center w-full'>
                                    <Link className="text-white text-base font-medium leading-none capitalize bg-[#4fa83d] border border-[#4fa83d] rounded-[10px] px-[40px] py-5 transition duration-300 hover:bg-transparent" href="#">Try for free </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-4 pb-8 lg:py-[50px] bg-[#121314]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='flex items-center flex-col-reverse md:flex-row flex-wrap w-full'>
                        <div className='w-full md:w-[70%] p-[10px]'>
                            <div className='mb-[30px]'>
                                <h2 className='text-[#4fa83d] md:text-[34px] lg:text-[22px] text-left font-bold capitalize leading-[1.4em]'>From The Blog:</h2>
                            </div>
                            <div className='mb-[30px]'>
                                <h3 className='text-white text-[24px] text-left font-bold capitalize leading-[1.4em]'>VOD (Video) Transcoding / Encoding</h3>
                            </div>
                            <div className='mb-[50px]'>
                                <p className='text-[#cfcfcf] text-base text-left leading-[1.4em]'>Video transcoding is part of a wider process of digital video conversion that evolved along with broadcasting and streaming technologies. This procedure will involve file transcoding of several extensions of video and basically translates the format….</p>
                            </div>
                            <div>
                                <Link className="text-white text-base font-medium leading-none capitalize bg-[#4fa83d] border border-[#4fa83d] rounded-[10px] px-[40px] py-5 transition duration-300 hover:bg-transparent" href="#">Read Full Blog </Link>
                            </div>
                        </div>
                        <div className='w-full md:w-[30%]'>
                            <div className='p-[10px] w-full flex justify-center items-center'>
                                <Image className='w-[95%]' src={VODTranscodingEncodingBlog} alt="VODTranscodingEncodingBlog" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VSQuestionsAndBlog;