import React from 'react';
import Image from 'next/image';
import dns from "@/assets/DNS/DNSIcon.svg";
import { SimpleDNSDocsArray } from '@/constants/SimpleDNSDocsArray';

const SimlpeDNSDocs = () => {
  return (
    <>
      <div className='w-full'>
        <div className={`md:w-[90%] mx-auto`}>
          <div className={`py-[100px] w-full rounded-[20px] bg-[url('../assets/DNS/SimpleDNSDocsBg.png')] bg-ccver lg:bg-contain bg-no-repeat bg-top`}>
            <div className='max-w-[1140px] mx-auto p-[10px]'>
              {SimpleDNSDocsArray.map((item, index) => (
                <div key={index} className={`mb-5 p-5 flex items-start flex-col-reverse md:flex-row rounded-[20px] bg-[url('../assets/DNS/SimpleDNSDocsChildBg.png')] bg-cover bg-no-repeat bg-top`}>
                  <div className='w-full md:w-4/5 p-5'>
                    <h2 className='mb-5 text-[#4fa83d] text-2xl font-semibold leading-none'>{item.heading}</h2>
                    <p className='mb-4 text-[#cfcfcf] text-base leading-[1.5]'>{item.subheading}</p>
                    <div className='mt-5'>
                      <ul>
                        {item.keypoints && item.keypoints.map((point, pointIndex) => (
                          <li key={pointIndex} className='flex items-start justify-start'>
                            <span className='w-[10px] h-[10px] mt-[6px] mr-2 bg-[#4fa83d] rounded-full'></span>
                            <h3 className='text-[#4fa83d] text-base'>{point.title}:</h3>
                            <p className='text-[#cfcfcf] text-base ml-1'>{point.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className='w-full md:w-1/5 p-[10px] flex justify-center items-center'>
                    <Image className='w-[50px] md:mt-10' src={item.icon} alt='{Dns}' />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SimlpeDNSDocs;