import React from "react";

const DNSTopBanner = () => { 
    return (
        <>
            <div
                className={`py-5 min-h-[700px] flex items-center justify-center bg-[url('../assets/GlobalImages/TopBanner.png')] bg-cover bg-no-repeat bg-center md:mt-auto mt-[94.5px]`}
            >
                <div className="max-w-[1140px]">
                    <div className="w-full">
                        <h2 className="text-white text-center text-[2.5rem] md:text-[56px] font-semibold lg:font-semibold md:font-bold py-4 leading-[1.2em] mx-0 lg:mx-[5%]">
                            <span className="text-[#4fa83d]">SimpleDNS</span>
                        </h2>
                        <h4 className="text-white text-center text-base md:text-lg mb-10 mx-auto lg:mx-[13%]">
                            5centsCDN DNS is the most cost-effective way to manage your domain names along with CDN. Enabling CDN is just one button away. Our SimpleDNS service provides a 100% uptime Service Level Agreement (SLA).
                        </h4>
                        <h4 className="text-white text-center text-base md:text-lg mb-4 mx-auto lg:mx-[13%]">
                            Manage multiple websites with high traffic load and high-redundancy needs. 5centsCDN offers advanced features such as DNS Failover, Anycast DNS Network, Secondary DNS, Reverse DNS, DNSSEC, and so much more.
                        </h4>
                        <div className="mt-10 md:mx-[20%]">
                            <div className="w-full flex items-center text-center flex-col md:flex-row">
                                <div className="w-[70%] md:w-1/3 flex flex-col justify-center md:border-r-1 border-[#4fa83d]">
                                    <h4 className="mb-5 text-[32px] md:text-[40px] font-bold text-[#4fa83d] leading-none mt-5 md:mb-0">34</h4>
                                    <p className="text-[#cfcfcf] text-base leading-[1.5] mb-5 md:mb-0">Anycast DNS</p>
                                </div>
                                <div className="w-[70%] md:w-1/3 flex flex-col justify-center border-t-1 md:border-t-0 md:border-r-1 border-[#4fa83d]">
                                    <h4 className="mb-5 text-[32px] md:text-[40px] font-bold text-[#4fa83d] leading-none mt-5 md:mb-0">100%</h4>
                                    <p className="text-[#cfcfcf] text-base leading-[1.5] mb-5 md:mb-0">SLA</p>
                                </div>
                                <div className="w-[70%] md:w-1/3 flex flex-col justify-center border-t-1 md:border-t-0 md:border-r-1 border-[#4fa83d]">
                                    <h4 className="mb-5 text-[32px] md:text-[40px] font-bold text-[#4fa83d] leading-none mt-5 md:mb-0">Unlimited</h4>
                                    <p className="text-[#cfcfcf] text-base leading-[1.5] mb-5 md:mb-0">DNS queries</p>
                                </div>
                            </div>
                        </div>
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