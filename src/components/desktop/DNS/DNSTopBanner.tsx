import React from 'react';

const DNSTopBanner = ({
    heading,
    subheading,
    description,
}: {
    heading: string;
    subheading: string;
    description: string;
}) => {
    return (
        <>
            <div
                className={`py-5 min-h-[700px] flex items-center justify-center bg-[url('../assets/GlobalImages/TopBanner.png')] bg-cover bg-no-repeat bg-center md:mt-auto mt-[94.5px]`}
            >
                <div className="max-w-[1140px]">
                    <div className="w-full">
                        <h2 className="text-white text-center text-[2.5rem] md:text-[56px] font-semibold lg:font-semibold md:font-bold py-4 leading-[1.2em] mx-0 lg:mx-[2%]" dangerouslySetInnerHTML={{ __html: heading }}></h2>
                        <h3 className='text-white text-center text-[32px] mb-5 leading-[1.4] font-semibold' dangerouslySetInnerHTML={{ __html: subheading }}></h3>
                        <h4 className="text-white text-center text-base md:text-lg mb-10 mx-auto lg:mx-[13%]">
                        {description}
                        </h4>
                        <div className="w-full lg:w-auto flex justify-center mt-[6.5%] mx-auto lg:mx-[20%]">
                            <div className="border border-[#4fa83d] rounded-[10px] p-[5px] w-[90%] lg:w-[658px] flex flex-col md:flex-row justify-between">
                                <input
                                    type="email"
                                    placeholder="Enter your email to sign-in"
                                    className="bg-transparent md:w-[70%] min-h-[59px] px-3 outline-0 text-white"
                                />
                                <button className="bg-[#4fa83d] text-white text text-base font-medium min-h-[59px] md:w-[30%] py-5 px-10 rounded-[10px] transition duration-300 ease-in-out hover:bg-white hover:text-[#4fa83d]">
                                    Get Started
                                </button>
                            </div>
                        </div>
                        <p className="text-[#e8e8e8] text-center text-xs mt-[20px]">
                            Unlock a 15-day Trial with our 24/7 customer support to help you.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DNSTopBanner;