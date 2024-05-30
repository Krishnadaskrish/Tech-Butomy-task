import React from "react";
import SavingsCard from "./SavingsCard";

function Savings() {
    const dummyData = [
        { icon: '🎓', title: 'Graduate', price: '$99', backgroundColor: 'bg-blue-100' },
        { icon: '🏆', title: 'Champion', price: '$150', backgroundColor: 'bg-green-100' },
        { icon: '📚', title: 'Scholar', price: '$75', backgroundColor: 'bg-yellow-100' },
        { icon: '💼', title: 'Professional', price: '$200', backgroundColor: 'bg-red-100' },
        { icon: '🔬', title: 'Scientist', price: '$120', backgroundColor: 'bg-purple-100' },
      ];

  
      
  return (
    <div className="bg-meal w-full h-[880px]  px-28 py-36 ">
      <div className=" w-[1200px] h-[380px]  flex   ">
        <div className="w-[550px] h-[228px]  '>">
          <h1 className="w-[600px] h-[176px] dm-sans text-6xl font-medium ">
            Organize your <br />
            
            Money the right way
          </h1>

          <span className="font-sans w-[800px] h-[24px] text-sm ">
            Senectus et netus et malesuada fames ac turpis.
            <br />
            Sagittis vitae et leo duis ut diam.
          </span>
          
        </div>
      </div>
      <div  className="w-full flex gap-12">
    {dummyData.map((item,index)=>
        <SavingsCard 
        key={index}
        icon={item.icon}
        title={item.title}
        price ={item.price}
        backgroundColor = {item.backgroundColor}/>
    )}
      </div>
    </div>
  );
}

export default Savings;
