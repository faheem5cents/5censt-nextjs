import React from 'react';
import Image from 'next/image';
import { CloudStorageFeaturesArray } from '@/constants/CloudStorageFeaturesArray';

const CloudStorageFeatures = () => {
    return (
        <>
            <div className='py-[90px]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='p-[10px]'>
                        <div className='mb-5'>
                            <h2 className='text-[40px] text-white text-center font-semibold leading-[1.4em] lg:mx-[15%]'>
                                <span className='text-[#4fa83d]'>Build a custom platform</span> for your viewers using cloud storage</h2>
                        </div>
                        <div className='mt-[80px]'>
                            <div className='flex flex-col md:flex-row items-start flex-wrap justify-between gap-y-10'>
                                {CloudStorageFeaturesArray.map((item, index) => (
                                    <div key={index} className='w-full md:w-[29.5%]'>
                                        <div className='flex flex-col'>
                                            <div className='mb-5 flex justify-center'>
                                                <Image className='w-full max-w-[378px] md:w-full' src={item.img} alt='Live Recording DVR' />
                                            </div>
                                            <div className='mb-5'>
                                                <h3 className='text-[22px] text-[#4fa83d] text-left font-semibold leading-none'>{item.heading}</h3>
                                            </div>
                                            <p className='text-[#cfcfcf] text-base leading-[1.5]'>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CloudStorageFeatures;