import React from 'react';
import Image from 'next/image';
import StreamTesterImg from "/public/assets/GlobalImages/StreamTester.jpg";
import { Button } from '@nextui-org/react';

const StreamTester = () => {
    return (
        <>
            <div className={`pt-[80px] lg:pt-[100px] pb-[80px] lg:pb-[120px] `}>
                <div className='max-w-[1140px] mx-auto px-5'>
                    <h2 className='mb-5 text-white text-center text-[30px] lg:text-[40px] leading-[1.2em] font-bold'>
                        Multiple Formats <span className='primary-text'>Support</span> <br /> Test M3U8, DASH Streams
                    </h2>
                    <h6 className='pb-5 md:py-5 primary-text text-2xl text-center font-semibold capitalize leading-[1.4em]'>
                        Try Your Video Link Here!
                    </h6>
                    <div className='w-4/5 mx-auto p-[6px] bg-transparent border border-[#4FA83D] rounded-[10px]'>
                        <input
                            type="email"
                            placeholder="Enter your hls or dash url to test"
                            className="bg-transparent w-full md:w-4/5 min-h-[59px] px-3 outline-0 text-white"
                        />
                        <button className="bg-[#4fa83d] text-white text text-base font-medium min-h-[59px] w-full md:w-1/5 py-5 px-10 rounded-[10px] transition duration-300 ease-in-out hover:bg-white hover:text-[#4fa83d]">
                            Play
                        </button>
                    </div>
                    <div className='mt-10 w-4/5 mx-auto relative'>
                        <Image src={StreamTesterImg} alt='Stream Tester' />
                        <Button className='absolute bg-[#4FA83D] text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full h-20  w-20'>Play</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StreamTester;