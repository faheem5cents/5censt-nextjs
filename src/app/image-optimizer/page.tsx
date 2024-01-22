import React from 'react';
import AdaptativeImageCompression from '@/components/desktop/Optimizer/AdaptativeImageCompression';
import ImageOptimizerTop from '@/components/desktop/Optimizer/ImageOptimizerTop';
import EndlessPossibilities from '@/components/desktop/Optimizer/EndlessPossibilities';
import WordpressPluginVideo from '@/components/desktop/Optimizer/WordpressPluginVideo';
import TryNowForFree from '@/components/desktop/Optimizer/TryNowForFree';
import WhatsappSuport from '@/components/desktop/Optimizer/WhatsappSuport';
import ClientAndExperience from '@/components/desktop/ClientAndExperience/ClientAndExperience';

const ImageOptimizer = () => {
  return (
    <>
      <ImageOptimizerTop /> 
      <AdaptativeImageCompression />
      <EndlessPossibilities heading={'One Product. <span class="text-[#4FA83D]"> Endless Possibilities.</span> '} description={''} />
      <WordpressPluginVideo />
      <TryNowForFree />
      <WhatsappSuport />
      <ClientAndExperience description={'Let us introduce you to our <span class="text-[#4FA83D]"> clients & their experience with us</span> '} />
    </>
  )
}

export default ImageOptimizer; 