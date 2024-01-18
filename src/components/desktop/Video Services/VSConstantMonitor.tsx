import React from 'react';

const VSConstantMonitor = () => {
    return (
        <>
            <div className='px-[10px] md:px-0 py-[50px]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className={`bg-[url('../assets/VideoService/VSconstantMonitorBg.png')] bg-cover bg-no-repeat bg-center`}>
                        <div className='py-[120px]'>
                            <div className='mb-5 md:mx-[10%]'>
                                <h2 className='text-white text-[30px] md:text-[40px] text-center font-bold leading-[1.4em]'>Constantly monitor your CDN infra</h2>
                            </div>
                            <div className='md:mx-[15%]'>
                                <p className='text-white text-center text-2xl font-bold leading-[1.5]'>Get instant notifications, manage monitors and check your uptime statistics on the go.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VSConstantMonitor;