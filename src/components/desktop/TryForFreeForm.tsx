import React from "react";

const TryForFreeForm = ({heading}:{heading: string}) => {
    return (
        <>
            <div className='py-[90px] px-[10px]'>
                <div className='max-w-[1140px] m-auto'>
                    <div className='bg-[#4fa83d] py-[50px] px-[30px] rounded-[20px]'>
                        <h2 className='mb-5 md:mx-[10%] text-white text-[22px] md:text-[30px] lg:text-[40px] font-semibold capitalize leading-[1.4em] text-center' dangerouslySetInnerHTML={{ __html: heading }}></h2>
                        <div className='p-[10px]'>
                            <div className='lg:mx-[20%] w-full lg:w-auto mt-[2%]'>
                                <div className='w-full p-[5px] bg-white border border-[#4fa83d] rounded-[10px] '>
                                    <form action="#">
                                        <input type="email" placeholder='Enter your email to sign-in' className='md:w-[70%] w-full bg-transparent text-base text-black py-[7px] px-5 min-h-[59px] outline-none' />
                                        <button className='bg-[#4FA83D] text-base text-white font-semibold border border-[#4FA83D] rounded-[10px] px-[40px] py-5 w-full md:w-[30%] transition duration-300 hover:bg-transparent hover:text-[#4fa83d]'>Try for free</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TryForFreeForm;
