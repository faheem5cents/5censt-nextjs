import React from 'react';
import Image from 'next/image';
import PopsGif from "@/assets/GlobalImages/homePopsGif.gif";
import Link from 'next/link';
import ArgentinaPop from "@/assets/Homepage/ArgentinaPop.svg";
import AustraliaPop from "@/assets/Homepage/AustraliaPop.svg";
import BahrainPop from "@/assets/Homepage/BahrainPop.svg";
import BrazilPop from "@/assets/Homepage/BrazilPop.svg";
import CanadaPop from "@/assets/Homepage/CanadaPop.svg";
import GermanyPop from "@/assets/Homepage/GermanyPop.svg";
import IndiaPop from "@/assets/Homepage/IndiaPop.svg";
import JapanPop from "@/assets/Homepage/JapanPop.svg";
import McMurdoStationPop from "@/assets/Homepage/McMurdoStationPop.svg";
import NewZealandPop from "@/assets/Homepage/NewZealandPop.svg";
import NigeriaPop from "@/assets/Homepage/NigeriaPop.svg";
import PakistanPop from "@/assets/Homepage/PakistanPop.svg";
import PhilippinesPop from "@/assets/Homepage/PhilippinesPop.svg";
import RomaniaPop from "@/assets/Homepage/RomaniaPop.svg";
import RussiaPop from "@/assets/Homepage/RussiaPop.svg";
import SaudiArabia from "@/assets/Homepage/SaudiArabia.svg";
import SingaporePop from "@/assets/Homepage/SingaporePop.svg";
import SouthAfricaPop from "@/assets/Homepage/SouthAfricaPop.svg";
import SouthKoreaPop from "@/assets/Homepage/SouthKoreaPop.svg";
import SpainPop from "@/assets/Homepage/SpainPop.svg";
import TanzaniaPop from "@/assets/Homepage/TanzaniaPop.svg";
import ThailandPop from "@/assets/Homepage/ThailandPop.svg";
import UAEPop from "@/assets/Homepage/UAEPop.svg";
import UKPop from "@/assets/Homepage/UKPop.svg";
import UnitedStatesPop from "@/assets/Homepage/UnitedStatesPop.svg";

const tooltipData = [
    { image: ArgentinaPop, CountryName: 'Tooltip content for Argentina' },
    { image: AustraliaPop, CountryName: 'Tooltip content for AustraliaPop' },
    { image: BahrainPop, CountryName: 'Tooltip content for BahrainPop' },
    { image: BrazilPop, CountryName: 'Tooltip content for BrazilPop' },
    { image: CanadaPop, CountryName: 'Tooltip content for CanadaPop' },
    { image: GermanyPop, CountryName: 'Tooltip content for GermanyPop' },
    { image: IndiaPop, CountryName: 'Tooltip content for IndiaPop' },
    { image: JapanPop, CountryName: 'Tooltip content for JapanPop' },
    { image: McMurdoStationPop, CountryName: 'Tooltip content for McMurdoStationPop' },
    { image: NewZealandPop, CountryName: 'Tooltip content for NewZealandPop' },
    { image: NigeriaPop, CountryName: 'Tooltip content for NigeriaPop' },
    { image: PakistanPop, CountryName: 'Tooltip content for PakistanPop' },
    { image: PhilippinesPop, CountryName: 'Tooltip content for PhilippinesPop' },
    { image: RomaniaPop, CountryName: 'Tooltip content for RomaniaPop' },
    { image: RussiaPop, CountryName: 'Tooltip content for RussiaPop' },
    { image: SaudiArabia, CountryName: 'Tooltip content for SaudiArabia' },
    { image: SingaporePop, CountryName: 'Tooltip content for SingaporePop' },
    { image: SouthAfricaPop, CountryName: 'Tooltip content for SouthAfricaPop' },
    { image: SouthKoreaPop, CountryName: 'Tooltip content for SouthKoreaPop' },
    { image: SpainPop, CountryName: 'Tooltip content for SpainPop' },
    { image: TanzaniaPop, CountryName: 'Tooltip content for TanzaniaPop' },
    { image: ThailandPop, CountryName: 'Tooltip content for ThailandPop' },
    { image: UAEPop, CountryName: 'Tooltip content for UAEPop' },
    { image: UKPop, CountryName: 'Tooltip content for UKPop' },
    { image: UnitedStatesPop, CountryName: 'Tooltip content for UnitedStatesPop' },
];

const MultiPopsAnimation = () => {
    return (
        <>
            <div className='pb-[90px]'>
                <div className='max-w-[1140px] m-auto'>
                    <div className='w-full'>
                        <div className='p-[10px] flex flex-col flex-wrap'>
                            <div className='text-center mb-5 mx-[5%]'>
                                <h2 className='text-white text-[40px] font-semibold uppercase leading-[1.4em]'>
                                    WE ARE <span className='text-[#4fa83d]'>EVERYWHERE.</span>
                                </h2>
                            </div>
                            <div className='mb-5 text-center  md:mx-[25%]'>
                                <p className='text-[#cfcfcf] text-base leading-[1.5]'>5centsCDN’s Multi-CDN PoP’s (Point Of Presence) are comprised of large Data Centres around the globe.</p>
                            </div>
                            <div className='mb-5 flex justify-center items-center'>
                                <Link href='#' className='text-white text-base font-semibold leading-none capitalize bg-[#4fa83d] border border-[#4fa83d] rounded-[10px] px-[40px] py-5 transition duration-300 hover:bg-transparent'>Explore Networks</Link>
                            </div>
                            <div className='w-full'>
                                <div className='w-full pt-[100px] pb-[50px]'>
                                    <div className='relative'>
                                        <div className='absolute cursor-pointer left-[18.9%] top-[23.3%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={CanadaPop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[19.8%] top-[33.9%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={UnitedStatesPop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[28.5%] top-[56.3%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={BrazilPop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[28.5%] top-[67.1%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={ArgentinaPop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[43.9%] top-[15.1%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={UKPop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[44.6%] top-[24.6%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={SpainPop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[48%] top-[17.5%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={GermanyPop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[51.7%] top-[22.7%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={RomaniaPop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[48.5%] top-[43.6%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={NigeriaPop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[57%] top-[38.8%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={SaudiArabia} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[58%] top-[34.5%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={BahrainPop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[59.7%] top-[37.7%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={UAEPop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[57.8%] top-[47.9%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={TanzaniaPop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[53%] top-[66.9%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={SouthAfricaPop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[52.9%] top-[90.6%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={McMurdoStationPop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[63.1%] top-[28.1%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={PakistanPop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[66.5%] top-[36.4%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={IndiaPop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[73.3%] top-[43%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={ThailandPop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[68%] top-[16.3%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={RussiaPop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[74.1%] top-[51.7%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={SingaporePop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[80.1%] top-[34.8%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={JapanPop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[77.7%] top-[32.9%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={SouthKoreaPop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[79%] top-[48%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={PhilippinesPop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[85.9%] top-[70.4%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={AustraliaPop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='absolute cursor-pointer left-[94.2%] top-[85.5%]'>
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fa83d] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3">
                                                    <Image className='border border-[#59a52c] rounded-3xl' src={NewZealandPop} alt='' />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='w-full'>
                                            <Image src={PopsGif} alt='' />
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

export default MultiPopsAnimation;