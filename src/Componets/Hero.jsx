import React from 'react';
import Button from './Button';
import HomePageCard from './HomePageCard';

function Hero() {
  return (
    <div className='bg-meal w-full h-[680px] z-10 flex flex-col p-5 gap-24 relative justify-end items-center overflow-hidden'>
      <div className='w-[800px] h-[290px] z-[999] text-black'>
        <div className='flex flex-col z-[990]'>
          <span className='font-sans w-[800px] h-[24px] text-sm'>Features</span>
          <span className='w-[800px] h-[88px] font-sans text-7xl font-medium'>
            All in one card
          </span>
          <span className='font-sans w-[800px] h-[24px] text-sm'>
            Senectus et netus et malesuada fames ac turpis.<br />
            Sagittis vitae et leo duis ut diam.
          </span>

          <div className='flex flex-row space-x-6 mt-14  mx-44'>
            <Button name={'Open Account'} />
            <Button name = {'Compare Cards'} bg='meal'/>
          </div>
        </div>
      </div>
      <div className='w-full   p-3 flex justify-between  overflow-hidden'>
        <HomePageCard padding="14" bg='  bg-yellow-200 '/>
        <HomePageCard padding="2" bg=' bg-slate-600' />
        <HomePageCard padding="0" bg='customTeal'/>
        <HomePageCard padding="2" bg=' bg-slate-600'/>
        <HomePageCard padding="14" bg='  bg-yellow-200 ' /> 
      </div>
    </div>
  );
}

export default Hero;
