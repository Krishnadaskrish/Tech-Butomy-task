import React from 'react'
import FeatureCard from './FeatureCard'
import Mobile from './Mobile'

function Features() {
    const features = [
        {
          title: 'Instant transactions',
          description: 'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.',
          icon: '💸', // Replace with an actual icon component if needed
        },
        {
          title: 'Saving accounts',
          description: 'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.',
          icon: '💡', // Replace with an actual icon component if needed
        },
        {
          title: 'Mobile banking',
          description: 'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.',
          icon: '🏦', // Replace with an actual icon component if needed
        },
        {
          title: 'Investment Options',
          description: 'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.',
          icon: '📈', // Replace with an actual icon component if needed
        },
        {
          title: 'Customer Support',
          description: 'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.',
          icon: '📞', // Replace with an actual icon component if needed
        },
        {
          title: 'Secure Transactions',
          description: 'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.',
          icon: '🔒', // Replace with an actual icon component if needed
        },
      ]
  return (
    <div className='w-full h-[1416px] z-[999] flex justify-center items-center'>
        <div className='w-[1200px] h-[1096px] bg-white flex'>
            <div className='w-[600px] h-[1096px] bg-white'>
                <h1 className='w-[600px] h-[176px] dm-sans text-7xl font-bold text-left  '>One app .<br/>One banking</h1>
                <div className='grid grid-cols-2 gap-8 '>
                {features.map((feature, index) => (
                    <FeatureCard 
                    key={index}
                    icon = {feature.icon}
                    title={feature.title}
                    description={feature.description} />
                   
                ))}
                    
                </div>

            </div>
            <div className='w-[600px] h-[1096px] flex justify-center '>
               <Mobile/>
            </div>

        </div>
      
    </div>
  )
}

export default Features
