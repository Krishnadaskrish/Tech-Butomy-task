import React from 'react'

function Card() {
  return (
    <div className='w-[310px] h-[168px] gradient-element bg-gradient-to-r from-indigo-600 via-indigo-800 to-indigo-900 rounded-lg grid grid-col-2  '>
        <div className='w-[260px] h-[136px]'>
      <div className='w-[86px] h-[20px]' >
        <div className='font-sans text-lg font-medium text-white'>bee</div>
      </div>
      <div className='w-[263px] h-[65px]' >
        <span className='text-white'>2320 3000 0000 1</span>
      </div>
      </div>
    </div>
  )
}

export default Card
