import React from 'react';
import Image from 'next/image';
import RoundedNumber1 from "@/assets/DNS/RoundedNumber1.svg"
import RoundedNumber2 from "@/assets/DNS/RoundedNumber2.svg"
import RoundedNumber3 from "@/assets/DNS/RoundedNumber3.svg"
import RoundedNumber4 from "@/assets/DNS/RoundedNumber4.svg"

export const RefresherArray = [
    {
        heading: "DNS Recursor",
        description: "The server finds the cache and responds to the query. Internet Service Providers run the recursor.",
        img: RoundedNumber1,
    },
    {
        heading: "DNS Root Server",
        description: "It’s the base of an entire DNS infrastructure and acts as the authoritative name server such as “.com” and “.net”.",
        img: RoundedNumber2,
    },
    {
        heading: "TLD Name Server",
        description: "Almost just as important as the root server. This is the first one to respond and point the client towards the name server.",
        img: RoundedNumber3,
    },
    {
        heading: "Authoritative Name Server",
        description: "The final destination for any query where the data it receives in response from other name servers is cached.",
        img: RoundedNumber4,
    }, 
]

const Refresher = () => {
    return (
        <>
            <div className='w-full'>
                <div className={`w-full md:w-[90%] py-[100px] rounded-[20px] mx-auto bg-[url('../assets/DNS/RefresherBg.png')] bg-cover bg-center bg-no-repeat`}>
                    <div className='max-w-[1140px] mx-auto'>
                        <div className='p-[10px]'>
                            <h2 className='mb-[70px] text-[34px] md:text-[40px] text-center text-white font-semibold leading-[1.4em]'><span className='primary-text'>A refresher on</span> DNS concepts</h2>
                            {RefresherArray.map((item, index) => (
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

export default Refresher;