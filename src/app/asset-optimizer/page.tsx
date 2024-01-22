import React from 'react';
import AssetOptimizerTop from '@/components/desktop/Optimizer/AssetOptimizerTop';
import EndlessPossibilities from '@/components/desktop/Optimizer/EndlessPossibilities';
import WordpressPluginVideo from '@/components/desktop/Optimizer/WordpressPluginVideo';
import WhatsappSuport from '@/components/desktop/Optimizer/WhatsappSuport';
import ClientAndExperience from '@/components/desktop/ClientAndExperience/ClientAndExperience';
import FeatherAsLight from '@/components/desktop/Optimizer/FeatherAsLight';

const AssetOptimizer = () => {
    return (
        <>
            <AssetOptimizerTop />
            <FeatherAsLight />
            <EndlessPossibilities heading={'Get More Done <span class="text-[#4FA83D]"> In Less Time.</span>'} description={'Catering solutions to many problems that a business might face due to slow sites and a bad user experience.'} />
            <WordpressPluginVideo />
            <WhatsappSuport />
            <ClientAndExperience description={'Let us introduce you to our <span class="text-[#4FA83D]"> clients & their experience with us</span> '} />
        </>
    )
}

export default AssetOptimizer;