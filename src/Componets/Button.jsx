import React from 'react'

function Button({ w, name, bg }) {
  const widthClass = w ? `w-[${w}]` : 'w-[210px]';
  const bgClass = bg ? `bg-[${bg}]` : 'bg-customTeal';

  return (
    <button className={`${widthClass} ${bgClass} h-[39px] rounded-lg`}>
      {name}
    </button>
  )
}

export default Button;
