import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContentDeliveryNetworkImage from "@/assets/HighlightProducts/ContentDeliveryNetwork.png";

const ContentDeliveryNetwork = () => {
    return (
        <>
            <div className='max-w-[1140px] m-auto flex flex-col lg:flex-row justify-center items-center py-[90px]'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center items-start p-[15px] lg:p-[10px] lg:mr-5'>
                        <div className='w-full'>
                            <Image src={ContentDeliveryNetworkImage} alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center items-start p-[15px] lg:p-[10px] lg:ml-5'>
                        <div className='flex flex-col w-full'>
                            <h3 className='text-[#4fa83d] text-[22px] font-semibold mb-5 leading-none'>Content Delivery Network</h3>
                            <h3 className='text-white text-[32px] font-semibold leading-[1.4em] mb-5'>Secured, adaptive, and optimized content delivery experience</h3>
                            <p className='text-[#CFCFCF] text-base mb-5 mr-[90px]'>Upload your files to 5centsCDN cloud storage and access via HTTPS using the OpenStack Swift API, the S3 API, File Manager or Horizon Dashboard. You can build a custom application by integrating with our API that lets you store data on our highly scalable cloud storage and deliver content with CDN.</p>
                            <Link className='text-base font-semibold text-white border border-[#4fa83d] rounded-[10px] bg-[#4fa83d] py-5 px-10 w-fit leading-none transition duration-300 hover:bg-transparent' href="">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentDeliveryNetwork;