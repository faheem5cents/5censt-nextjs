import React from 'react';
import Encoding from './Encoding';
import Multistreaming from './Multistreaming';
import ContentDeliveryNetwork from './ContentDeliveryNetwork';
import ClousStorage from './ClousStorage';
import Dns from './Dns';
import ImageOptimizer from './ImageOptimizer';
import YouTubeSync from './YouTubeSync';
import Image from 'next/image';
import FeatureProductsRadiusTop from "/public/assets/Homepage/FeatureProductsRadiusTop.svg";
import FeatureProductsRadiusBottom from "/public/assets/Homepage/FeatureProductsRadiusBottom.svg";

const HighlightProducts = () => {
    return (
        <>
            <div className='bg-[#18191B] pt-[30px] pb-[180px] rounded-t-[20px] relative'>
                <Image className='absolute top-[-1px] transform rotate-180 w-full h-[70px] lg:h-[120px]' src={FeatureProductsRadiusTop} alt='' />
                <ContentDeliveryNetwork />
                <Encoding />
                <Multistreaming />
                <ClousStorage />
                <Dns />
                <ImageOptimizer />
                <YouTubeSync />
                <Image className='absolute bottom-[-1px] transform rotate-180 w-full h-[70px] lg:h-[120px]' src={FeatureProductsRadiusBottom} alt='' />
            </div>
        </>
    )
}

export default HighlightProducts;