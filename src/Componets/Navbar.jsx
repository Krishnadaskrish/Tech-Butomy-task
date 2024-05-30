import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className=" w-full h-[91px] py-[24px] flex justify-center items-center">
      <div className="bg-slate-50 w-full mx-4 sm:mx-32 h-[43px]">
        <div className="flex justify-between">
          <div className="w-[400px] h-[43]  flex space-x-0">
            <span className="w-[139px] h-[32] font-sans  font-bold text-4xl leading-none tracking-tighter text-customTeal">
              banquee
            </span>
          </div>
          <div className="  w-[413px] h-[43px]  flex gap-4">
            <Button w ='100px' name = {"features"} bg='meal' />
            <Button w ='100px' name= {"compare"} bg='meal'/>
            <Button  w ='100px'name={"spot"} bg='meal'/>
            <Button  w ='100px' name={"newone"} bg='meal'/>
          </div>
          <div className="  w-[400px] h-[43px] ">
            <div className="w-[210] h-[39] flex justify-end gap-6 ">
              
                <div className="font-sans mx-4 my-1  font-bold text-2xl   text-customTeal">
                  Login
                
              </div>
              <Button name={'Open Account'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
