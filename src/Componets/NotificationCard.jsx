import React from 'react';

function BadgeCard({ icon, title, description }) {
  return (
    <div className='w-[400px] h-[81px] bg-new rounded-md flex items-center gap-4 p-4'>
      <div className='w-[50px] h-[50px] rounded-md bg-customTeal flex items-center justify-center'>
        {icon}
      </div>
      <div className='flex flex-col'>
        <h5 className='text-lg font-semibold'>{title}</h5>
        <p className='text-sm text-gray-600'>{description}</p>
      </div>
    </div>
  );
}

export default BadgeCard;