import React from 'react'
import BadgeCard from './BadgeCard'

function Badege() {
    const Badge = [
        {
            title: 'Instant transactions',
            description: 'Odio euismod lacinia .',
            icon: '💸', // Replace with an actual icon component if needed
          },
          {
            title: 'Saving accounts',
            description: 'Odio euismod lacinia at .',
            icon: '💡', // Replace with an actual icon component if needed
          },
          {
            title: 'Mobile banking',
            description: 'Odio euismod lacinia.',
            icon: '🏦', // Replace with an actual icon component if needed
          },
          {
            title: 'Investment Options',
            description: 'Odio euismod lacinia.',
            icon: '📈', // Replace with an actual icon component if needed
          },
          {
            title: 'Customer Support',
            description: 'Odio euismod lacinia at .',
            icon: '📞', // Replace with an actual icon component if needed
          },
          {
            title: 'Secure Transactions',
            description: 'Odio euismod lacinia at .',
            icon: '🔒', // Replace with an actual icon component if needed
          },

    ]
  return (
    <div className='w-[400px] h-[558px] flex flex-wrap gap-4  '>
        {Badge.map((item,index)=>
      <BadgeCard

      key={index}
      icon = {item.icon}
      title = {item.title}
      description = {item.description}

      />
    )}
    </div>
  )
}

export default Badege
