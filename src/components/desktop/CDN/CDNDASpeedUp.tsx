import React from 'react';
import Image from 'next/image';
import UserSatisfaction from "@/assets/CDN/CDNDAUserSatisfaction.svg";
import CDNDAHigherConversion from "@/assets/CDN/CDNDAHigherConversion.svg";
import CDNDAWebsiteoptimization from "@/assets/CDN/CDNDAWebsiteoptimization.svg";

export const SpeedUpArray = [
    {
        img: UserSatisfaction,
        heading: 'User satisfaction',
        description: 'The lesser the load time, the happier the customer will be while scrolling through the website.'
    },
    {
        img: CDNDAHigherConversion,
        heading: 'Higher conversion',
        description: 'Better user experience ensures positive association with the brand & boosts up the revenue.'
    },
    {
        img: CDNDAWebsiteoptimization,
        heading: 'Website optimization',
        description: 'Better content (image) quality automatically helps your website rank higher..'
    },
]

const CDNDASpeedUp = () => {
    return (
        <>
            <div className={`pt-[100px] bg-[url('../assets/CDN/DASpeedupBg.png')] bg-cover bg-no-repeat bg-center`} style={{ backgroundSize: '90% 90%' }}>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='w-full p-[10px]'>
                        <div className='mb-5 text-center pb-[50px] px-[150px]'>
                            <h2 className='text-[40px] text-white font-bold leading-[1.4em]'><span className='text-[#4fa83d]'> Speed up your website</span> for a better user experience and higher turnover</h2>
                        </div>
                        {SpeedUpArray.map((item, index) => (
                            <div key={index} className={`p-5 mb-5 rounded-[20px] bg-[url('../assets/CDN/DASpeedupInner.png')] bg-cover bg-no-repeat bg-center z-10`}>
                                <div className='flex items-center w-full'>
                                    <div className='w-4/5 p-5'>
                                        <h2 className='mb-5 text-[#4fa83d] text-2xl leading-none font-bold '>{item.heading}</h2>
                                        <p className='text-[#cfcfcf] text-base leading-[1.5]'> {item.description} </p>
                                    </div>
                                    <div className='w-1/5 p-[10px]'>
                                        <div className='flex justify-center items-center w-full'>
                                            <Image className='w-[50px]' src={item.img} alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CDNDASpeedUp;