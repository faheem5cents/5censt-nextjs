import React from 'react';
import Link from 'next/link';

const Infographics = () => {
    return (
        <>
            <div className={`px-[10px] py-[150px] bg-[url('../assets/Homepage/InfographicsBg.png')] bg-cover bg-no-repeat bg-center`}>
                <div className='max-w-[1140px] m-auto'>
                    <div className='p-[10px] flex flex-col'>
                        <h6 className='mb-5 text-center text-white text-2xl font-semibold capitalize leading-[1.4em]'>Want To Know How To <span className='text-[#4fa83d]'> Buy Our Products?</span></h6>
                        <div className='mt-5 flex justify-center'>
                            <Link className='text-base font-semibold text-white border border-[#4fa83d] bg-[#4fa83d] rounded-[10px] px-[40px] py-5 transition duration-300 hover:bg-transparent hover:text-[#4fa83d]' href="#">Check our Infographics</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Infographics;