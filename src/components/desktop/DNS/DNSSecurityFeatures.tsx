import React from 'react';
import Image from 'next/image';
import TrafficAlertIcoon from "/public/assets/DNS/TrafficAlertIcoon.svg"
import StatsAnalyticsIcon from "/public/assets/DNS/StatsAnalyticsIcon.svg"
import FilteringIcon from "/public/assets/DNS/FilteringIcon.svg"
import AccountSecurityIcon from "/public/assets/DNS/AccountSecurityIcon.svg"

export const SecurityFeaturesArray = [
    {
        heading: "Traffic Alert",
        description: "The system notifies when the traffic fluctuates.",
        img: TrafficAlertIcoon,
    },
    {
        heading: "Stats & analytics",
        description: "Stay vigilant with real-time reporting",
        img: StatsAnalyticsIcon,
    },
    {
        heading: "Filtering",
        description: "Have full control over your traffic",
        img: FilteringIcon,
    },
    {
        heading: "Account security",
        description: "Multi-layer security to protect entry points",
        img: AccountSecurityIcon,
    }, 
]

const SecurityFeatures = () => {
    return (
        <>
            <div className='w-full'>
                <div className={`w-full md:w-[90%] py-[100px] rounded-[20px] mx-auto bg-[url('../assets/DNS/RefresherBg.png')] bg-cover bg-center bg-no-repeat`}>
                    <div className='max-w-[1140px] mx-auto'>
                        <div className='p-[10px]'>
                            <h2 className='mb-[70px] text-[34px] md:text-[40px] text-center text-white font-semibold leading-[1.4em]'><span className='primary-text'>Security features</span> to ensure your network is safe</h2>
                            {SecurityFeaturesArray.map((item, index) => (
                                <div key={index} className={`p-5 mb-5 rounded-[20px] bg-[url('../assets/DNS/RefresherInnerBg.png')] bg-cover bg-no-repeat`}>
                                    <div className='flex flex-col-reverse md:flex-row items-center'>
                                        <div className='w-full md:w-4/5'>
                                            <div className='p-5'>
                                                <h2 className='mb-5 primary-text text-2xl font-semibold leading-none'>{item.heading}</h2>
                                                <p className='text-[#cfcfcf] text-base leading-[1.5] mb-4'>{item.description}</p>
                                            </div>
                                        </div>
                                        <div className='w-full md:w-1/5'>
                                            <div className='p-[10px] flex justify-center items-center'>
                                                <div className='w-[60px] md:w-[80px]'>
                                                    <Image src={item.img} alt='CDN' />
                                                </div>
                                            </div>
                                        </div>
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

export default SecurityFeatures;