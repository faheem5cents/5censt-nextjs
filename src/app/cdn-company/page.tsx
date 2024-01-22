import HighlightsCounter from '@/components/desktop/HighlightsCounter';
import AffordablePricing from "/public/assets/CDNCompany/AffordablePricing.png";
import StrategicApproach from "/public/assets/CDNCompany/StrategicApproach.png";
import DedicatedTeam from "/public/assets/CDNCompany/DedicatedTeam.png";
import GlobalNetwork from "/public/assets/CDNCompany/GlobalNetwork.png";
import React from 'react';
import Image from 'next/image';
import ClientAndExperience from '@/components/desktop/ClientAndExperience/ClientAndExperience';
import TryForFreeForm from '@/components/desktop/TryForFreeForm';
import Brands from '@/components/desktop/Brands';

const CDNCompany = () => {
    return (
        <>
            <div className={`pt-[80px]`}>
                <div className="max-w-[1140px] mx-auto">
                    <div className='w-full flex flex-col flex-wrap items-center'>
                        <h2 className="mb-5 primary-text text-center text-[34px] md:text-[48px] font-semibold md:font-bold leading-[1.2em]">All About 5centsCDN</h2>
                        <div className='bg-[#1B1C1F] px-[150px] py-[50px] rounded-[10px]'>
                            <p className='text-white text-center text-base leading-[1.5]'>At 5centsCDN, we are dedicated to delivering premium CDN services at competitive prices, starting from just 5 cents per GB. Our flexible approach means clients can engage with us without the need for long-term commitments or contracts, although we do have nominal setup fees for trial periods. We are proud to have expanded our client base to over 5000 diverse customers, including entities in <span className='primary-text'>OTT, IPTV, advertising, gaming, government and non-profit sectors, as well as major television channels.</span></p>
                            <p className='pt-5 md:pt-24 text-white text-center text-base leading-[1.5]'>Our robust network features over <span className='primary-text'>70 strategically placed Points of Presence (PoPs)</span> around the globe, ensuring that our customers can easily connect to our standalone network. This expansive network setup minimizes latency, often directly within the ISP networks of end-users. By managing and operating our own network infrastructure, 5centsCDN guarantees a fast, secure, and cost-effective content delivery solution, effectively and reliably connecting your content to audiences worldwide.”</p>
                        </div>
                    </div>
                </div>
            </div>
            <HighlightsCounter />
            <div className='max-w-[1140px] mx-auto'>
                <div className='p-[10px] flex flex-wrap justify-center items-center'>
                    <div className='w-full md:w-[35%] p-[10px] flex justify-center items-center'>
                        <div className={`bg-[#1b1c1f] w-full md:h-[310px] px-5 py-[30px] rounded-[10px] bg-[url('/assets/CDNCompany/CDNCompareBg.png')] bg-cover bg-no-repeat bg-center`} style={{ "backgroundSize": "120%" }}>
                            <div className='w-1/3 mx-auto mb-5 flex justify-center'>
                                <Image src={AffordablePricing} alt='Affordable Pricing' />
                            </div>
                            <h2 className='primary-text text-[30px] md:text-3xl text-center font-semibold leading-[1.2] mt-5 mb-4'>Affordable Pricing</h2>
                            <p className="text-center text-base text-[#cfcfcf] leading-[1.5]">Our products and services are available at any pricing structure. Annually, monthly, or daily as per your need, while we strive to provide the best user experience within your budget.</p>
                        </div>
                    </div>
                    <div className={'w-full md:w-[65%] p-[10px] flex justify-center items-center'}>
                        <div className={`bg-[#1b1c1f] w-full md:h-[310px] px-[80px] py-[30px] rounded-[10px] bg-[url('/assets/CDNCompany/CDNCompareBg.png')] bg-cover bg-no-repeat bg-center`} style={{ "backgroundSize": "120%" }}>
                            <div className='w-1/3 mx-auto mb-5 flex justify-center'>
                                <Image src={StrategicApproach} alt='Strategic Approach' />
                            </div>
                            <h2 className='primary-text text-[30px] md:text-3xl text-center font-semibold leading-[1.2] mt-5 mb-4'>Strategic Approach</h2>
                            <p className="text-center text-base text-[#cfcfcf] leading-[1.5]">5centsCDN echoes the same mantra as many companies that have come before us: work with professionals and never accept anything less than the absolute best.</p>
                        </div>
                    </div>
                    <div className='w-full md:w-[65%] p-[10px] flex justify-center items-center'>
                        <div className={`bg-[#1b1c1f] w-full md:h-[310px] px-[80px] py-[30px] rounded-[10px] bg-[url('/assets/CDNCompany/CDNCompareBg.png')] bg-no-repeat bg-center`} style={{ "backgroundSize": "120%" }}>
                            <div className='w-1/3 mx-auto mb-5 flex justify-center'>
                                <Image src={DedicatedTeam} alt='Dedicated Team' />
                            </div>
                            <h2 className='primary-text text-[30px] md:text-3xl text-center font-semibold leading-[1.2] mt-5 mb-4'>Dedicated Team</h2>
                            <p className="text-center text-base text-[#cfcfcf] leading-[1.5]">We are a team of 30+ dedicated and highly skilled professionals who are working around the clock to ensure an interrupted streaming and first-class customer experience.</p>
                        </div>
                    </div>
                    <div className='w-full md:w-[35%] p-[10px] flex justify-center items-center'>
                        <div className={`bg-[#1b1c1f] w-full md:h-[310px] px-5 py-[30px] rounded-[10px] bg-[url('/assets/CDNCompany/CDNCompareBg.png')] bg-cover bg-no-repeat bg-center`} style={{ "backgroundSize": "120%" }}>
                            <div className='w-1/3 mx-auto mb-5 flex justify-center'>
                                <Image src={GlobalNetwork} alt='Global Network' />
                            </div>
                            <h2 className='primary-text text-[30px] md:text-3xl text-center font-semibold leading-[1.2] mt-5 mb-4'>Global Network</h2>
                            <p className="text-center text-base text-[#cfcfcf] leading-[1.5]">Each and every one of our 5000+ clients is special for us. Our team monitors their content 24/7 to ensure quality network capabilities and avoid any conjunctions along the way.</p>
                        </div>
                    </div>
                </div>
            </div>
            <ClientAndExperience 
            description={`Join The Hundreds Of Thousands Of Happy Subscribers. <span class="primary-text"> See What They're Saying</span>`} />
            <TryForFreeForm heading={'Give Your Customers The Best Viewing Experience.'} />
            <Brands />
        </>
    )
}

export default CDNCompany;