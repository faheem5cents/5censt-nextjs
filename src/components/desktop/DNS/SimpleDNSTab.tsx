import React from 'react';
import Image from "next/image";
import SimpleDNSImg from "/public/assets/DNS/SimpleDNSTopImg.png";
import DNSTopBanner from './SimpleDNSTopBanner';
import SimpleDNSFeatures from './SimpleDNSFeatures';
import SimlpeDNSDocs from './SimpleDNSDocs';
import SimpleDNSSamePricing from './SimpleDNSSamePricing';
import CDNSupportYou from "/public/assets/CDN/CDNSupportYou.png"
import DiscoveryCall from '../DiscoveryCall';
import FrequentlyAskedQuestion from '../FAQ/FrequentlyAskedQuestion';
import { SimpleDNSFAQArray } from '@/constants/FrequentlyAskedQuestionArray';
import ClientAndExperience from '../ClientAndExperience/ClientAndExperience';
import SeamlessCoverageForm from '../CDN/SeamlessCoverageForm';
import Brands from '../Brands';

export const SupportYouArray = [
  {
    title: "24/7 Live Support",
    description: "Don’t sweat if you can’t figure something out regarding our features or services. Our dedicated and highly professional support team is ready to help you at all times."
  },
  {
    title: "Social Media Channels",
    description: "Join us on our highly interactive and informative social channels for constant updates where we engage in productive conversations about all aspects of content delivery."
  },
  {
    title: "Slack Channel",
    description: "Communication is the key! Stay in touch with our team through an active slack channel, in case you need help with anything regarding our services or features."
  },
]

const SimpleDENTab = () => {
  return (
    <>
      <DNSTopBanner />
      <div className='w-full'>
        <div className='pt-[50px] p-[10px] flex justify-center items-center'>
          <Image className='md:w-[800px]' src={SimpleDNSImg} alt='Simple DNS' />
        </div>
      </div>
      <SimpleDNSFeatures />
      <SimlpeDNSDocs />
      <SimpleDNSSamePricing />
      <div className='py-[90px] bg-[#121315] px-5 md:px-0'>
        <div className='max-w-[1140px] mx-auto'>
          <div className={`w-full`}>
            <div className="flex items-center flex-col-reverse lg:flex-row">
              <div className="w-full lg:w-1/2 text-left">
                <div className="mb-5">
                  <h2 className="text-white text-[30px] md:text-[40px] font-semibold text-left capitalize">We’re Here To <span className="text-[#4fa83d]"> Support You</span></h2>
                </div>
                <div className="mb-10">
                  <p className="text-[#cfcfcf] text-base leading-[1.5]">Don’t sweat over disrupted services, our skilled and highly dedicated team is at your service 24/7.</p>
                </div> 
                {SupportYouArray.map((item, index) => (
                  <div key={index} className="mb-5">
                    <h3 className="text-[#4fa83d] text-[22px] font-medium text-left capitalize mb-5">{item.title}</h3>
                    <p className="text-[#cfcfcf] text-base leading-[1.5]">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="w-full lg:w-1/2">
                <Image className="w-full" src={CDNSupportYou} alt="CDN Support You" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ClientAndExperience description={'Join The Hundreds Of Thousands Of Happy Subscribers. <span class="text-[#4FA83D]">See What They are Saying</span>'} />
      <DiscoveryCall
        heading={'Need A Reliable, <span class="text-[#4fa83d]"> Cost Effective DNS</span> To Manage Your Domain Names?'}
        subheading={'5centsCDN for intelligent traffic management service'}
        description={'Sales & Client solutions team typically responds within 1 business day.'} />
      <FrequentlyAskedQuestion heading={'<span class="text-[#4FA83D] pr-2">Have Some Questions </span>  Before Getting Started?'} FrequentlyAskedQuestionArray={SimpleDNSFAQArray} />
      <SeamlessCoverageForm
        heading='Get Started With Seamless Encoding' />
      <Brands />
    </>
  )
}

export default SimpleDENTab;