import React from 'react';
import AlaCarte from "/public/assets/Homepage/AlaCarte.svg";
import Image from 'next/image';
import Link from 'next/link';

const HomeComparePlans = () => {
    return (
        <>
            <div className='md:px-[30px] py-[90px]'>
                <div className={`max-w-[1140px] m-auto`}>
                    <div className={`bg-[#4fa83d] p-[30px] rounded-[20px] bg-[url('../assets/Homepage/HomeComparePlansBg.png')] bg-cover bg-no-repeat bg-center`}>
                        <h6 className=' text-black text-xl font-semibold capitalize leading-[1.4em] text-center mb-[10px]'>Compare Plans</h6>
                        <h2 className='text-white md:text-[34px] lg:text-[40px] font-semibold capitalize leading-[1.4em] text-center mb-[10px]'>Compare & Choose The Right Plan!</h2>
                        <div className='mb-[10px] flex justify-center'>
                            <Image className='w-[668px]' src={AlaCarte} alt='' />
                        </div>
                        <div className='mt-5 flex justify-center'>
                            <Link className='text-base font-semibold text-black bg-white rounded-[10px] px-[40px] py-5 transition duration-300 hover:bg-black hover:text-white' href="#">Compare CDN Plans</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComparePlans;