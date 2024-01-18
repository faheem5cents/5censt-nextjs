import React from 'react';
import Image from 'next/image';
import cdnVideoEnInstant from "@/assets/ProductFeatures/cdnVideoEnInstant.png";
import cdnVideoEnPassEncoding from "@/assets/ProductFeatures/cdnVideoEnPassEncoding.png";

const ProductFeatures = () => {
    return (
        <>
            <div className='md:py-[90px]'>
                <div className='max-w-[1140px] flex justify-center mx-auto'>
                    <div className='w-full'>
                        <div className='p-[10px] flex flex-col'>
                            <div className='mb-5 mx-[10px]'>
                                <h2 className='text-white text-[40px] leading-[1.4em] font-semibold text-center'>
                                    Reach larger audience with <span className='text-[#4fa83d]'> efficient workflow</span>
                                </h2>
                            </div>
                            <div className='my-10 w-full flex flex-wrap gap-y-10'>
                                <div className={`ProductFeatures md:w-1/3 pr-[30px] p-[10px]`}>
                                    <div className='m-0'>
                                        <div className='text-left'>
                                            <Image  className='w-full  rounded-[10px] mb-[15px]' src={cdnVideoEnPassEncoding} alt='Instant Conversion' />
                                            <h3 className='text-[22px] text-[#4fa83d] font-semibold mt-[20px] mb-[15px]'>Instant Conversion</h3>
                                            <p className='text-base text-[#cfcfcf]'>Professional solution for transcoding multimedia files without compromising on
                                                the quality of the content. 5centsCDN lets you Upload and instantly convert
                                                your files to MP4 and WEBM formats.</p>
                                        </div>
                                    </div>
                                </div>
                                 <div className={`ProductFeatures md:w-1/3 pr-[30px] p-[10px]`}>
                                    <div className='m-0'>
                                        <div className='text-left'>
                                            <Image  className='w-full  rounded-[10px] mb-[15px]' src={cdnVideoEnInstant} alt='Custom Encoding Profiles' />
                                            <h3 className='text-[22px] text-[#4fa83d] font-semibold mt-[20px] mb-[15px]'>Custom Encoding Profiles</h3>
                                            <p className='text-base text-[#cfcfcf]'>We have created a number of preset profiles which you can utilize to encode your video file. Let’s begin distributing content directly with different bitrates to match the connection speed of every user.</p>
                                        </div>
                                    </div>
                                </div>
                                 <div className={`ProductFeatures md:w-1/3 pr-[30px] p-[10px]`}>
                                    <div className='m-0'>
                                        <div className='text-left'>
                                            <Image  className='w-full  rounded-[10px] mb-[15px]' src={cdnVideoEnInstant} alt='1 & 2 Pass Encoding' />
                                            <h3 className='text-[22px] text-[#4fa83d] font-semibold mt-[20px] mb-[15px]'>1 & 2 Pass Encoding</h3>
                                            <p className='text-base text-[#cfcfcf]'>Analyze your files thoroughly in the first pass followed by the creation of an intermediate file. In the second pass, the encoder looks up the intermediate file and appropriately allocates bits, this is where the actual encoding takes place.</p>
                                        </div>
                                    </div>
                                </div>
                                 <div className={`ProductFeatures md:w-1/3 pr-[30px] p-[10px]`}>
                                    <div className='m-0'>
                                        <div className='text-left'>
                                            <Image  className='w-full  rounded-[10px] mb-[15px]' src={cdnVideoEnInstant} alt='Adaptive Bitrate Streaming' />
                                            <h3 className='text-[22px] text-[#4fa83d] font-semibold mt-[20px] mb-[15px]'>Adaptive Bitrate Streaming</h3>
                                            <p className='text-base text-[#cfcfcf]'>Deliver your live streams using adaptive bitrate streaming that aims to suit the viewer’s connection speed. It helps you maintain the quality of the content and improve your viewer’s experience.</p>
                                        </div>
                                    </div>
                                </div>
                                 <div className={`ProductFeatures md:w-1/3 pr-[30px] p-[10px]`}>
                                    <div className='m-0'>
                                        <div className='text-left'>
                                            <Image  className='w-full  rounded-[10px] mb-[15px]' src={cdnVideoEnInstant} alt='Minute Price' />
                                            <h3 className='text-[22px] text-[#4fa83d] font-semibold mt-[20px] mb-[15px]'>Minute Price</h3>
                                            <p className='text-base text-[#cfcfcf]'>Video Encoding pricing is extremely simple. Once you buy the transcoding minutes, we bill you only for the length of the video. Billing is not based on file size or the bandwidth, but only on the length of a per-minute factor.</p>
                                        </div>
                                    </div>
                                </div>
                                 <div className={`ProductFeatures md:w-1/3 pr-[30px] p-[10px]`}>
                                    <div className='m-0'>
                                        <div className='text-left'>
                                            <Image  className='w-full  rounded-[10px] mb-[15px]' src={cdnVideoEnInstant} alt='No Limit' />
                                            <h3 className='text-[22px] text-[#4fa83d] font-semibold mt-[20px] mb-[15px]'>No Limit</h3>
                                            <p className='text-base text-[#cfcfcf]'>There is no limit to transcoding or file size that you can upload. Transcode any file size but we do recommend not to exceed more than 5 GB. Also, you can deliver to any number of viewers using our CDN via HLS.</p>
                                        </div>
                                    </div>
                                </div>
                                 <div className={`ProductFeatures md:w-1/3 pr-[30px] p-[10px]`}>
                                    <div className='m-0'>
                                        <div className='text-left'>
                                            <Image  className='w-full  rounded-[10px] mb-[15px]' src={cdnVideoEnInstant} alt='Encoding Status' />
                                            <h3 className='text-[22px] text-[#4fa83d] font-semibold mt-[20px] mb-[15px]'>Encoding Status</h3>
                                            <p className='text-base text-[#cfcfcf]'>Have complete insight into your streaming activities to maintain the quality of services. 5centsCDN offers a complete status of your encoding as to where the process stands at a certain given time.</p>
                                        </div>
                                    </div>
                                </div>
                                 <div className={`ProductFeatures md:w-1/3 pr-[30px] p-[10px]`}>
                                    <div className='m-0'>
                                        <div className='text-left'>
                                            <Image  className='w-full  rounded-[10px] mb-[15px]' src={cdnVideoEnInstant} alt='Direct Cloud Storage Access' />
                                            <h3 className='text-[22px] text-[#4fa83d] font-semibold mt-[20px] mb-[15px]'>Direct Cloud Storage Access</h3>
                                            <p className='text-base text-[#cfcfcf]'>5centsCDN offers you the freedom to select files directly from your cloud storage. The files available in the cloud storage can also be processed right there without having to export them.</p>
                                        </div>
                                    </div>
                                </div>
                                 <div className={`ProductFeatures md:w-1/3 pr-[30px] p-[10px]`}>
                                    <div className='m-0'>
                                        <div className='text-left'>
                                            <Image  className='w-full  rounded-[10px] mb-[15px]' src={cdnVideoEnInstant} alt='Combined File Transcoding' />
                                            <h3 className='text-[22px] text-[#4fa83d] font-semibold mt-[20px] mb-[15px]'>Combined File Transcoding</h3>
                                            <p className='text-base text-[#cfcfcf]'>This advanced feature allows conversion of videos to as many formats as you need. Allowing the end-user or player to select the best quality based on the network settings or on user preference to save bandwidth or have rich content experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductFeatures;