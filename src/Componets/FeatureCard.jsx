import React from 'react'

function FeatureCard({icon,title,description}) {
  return (
    <div className='w-[284px] h-[264px] z-40 rounded-lg outline outline-2 outline-offset-4  outline-gray-300 '>
        <div className='flex flex-col gap-4 ml-5'>
        <div className='w-[50px] h-[50px] pt-5 rounded-full bg-meal mt-4 '>{icon}</div>
      <h2 className='text-xl font-sans font-medium text-left'>{title}</h2>
      <p className='text-gray-500 text-left'>{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard
