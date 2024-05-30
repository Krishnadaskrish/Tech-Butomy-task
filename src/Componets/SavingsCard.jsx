import React from 'react';

function SavingsCard({ item, title, price, icon, backgroundColor }) {
  return (
    <div className={`w-[214px] h-[214px] rounded-lg ${backgroundColor} flex flex-row items-center justify-center p-4`}>
      <div className='w-[50px] h-[50px] rounded-md  flex items-center justify-center mb-2'>
        {icon}
      </div>
      <h5 className='text-lg font-semibold'>{title}</h5>
      <p className='text-sm text-gray-600'>{price}</p>
    </div>
  );
}

export default SavingsCard;
