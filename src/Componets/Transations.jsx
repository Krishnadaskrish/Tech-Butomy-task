import React from "react";
import Badege from "./Badege";

function Transations() {
  return (
    <div className="bg-meal w-full h-[880px] flex flex-col-2 px-28 py-36 ">
      <div className=" w-[1200px] h-[380px]  flex flex-col  ">
        <div className="w-[550px] h-[228px]  '>">
          <h1 className="w-[600px] h-[176px] dm-sans text-6xl font-medium ">
            Send & Receive <br />
            Money Instently
          </h1>

          <span className="font-sans w-[800px] h-[24px] text-sm ">
            Senectus et netus et malesuada fames ac turpis.
            <br />
            Sagittis vitae et leo duis ut diam.
          </span>
          
        </div>
      </div>
      <div  className="pr-40">
        <Badege/>
      </div>
    </div>
  );
}

export default Transations;
