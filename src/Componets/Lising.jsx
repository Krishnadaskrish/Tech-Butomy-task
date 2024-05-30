import React from 'react';
import containerImage from '../images/logo(1).png';

const Listing = () => {
  return (
    <div className="flex w-full h-[660px] items-center px-4 py-16 md:flex-row md:justify-between md:px-8 lg:px-16 mb-64">
       
      <div className="flex flex-col items-center md:items-start md:w-1/2">
      <div className="flex flex-col-6 pl-64  justify-center gap-5 mt-10 md:mt-0 md:w-1/2">
        {[...Array(8)].map((_, index) => (
          <img key={index} src={containerImage} alt="Logo" className="h-10 " />
        ))}
      </div>
      <br/>
        <h2 className="text-4xl font-bold my-7">Seamless Integration</h2>
        <span className="text-gray-500 mb-6 text-center md:text-left ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.<br/> Velit officia consequat duis enim velit mollit.
        </span>
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Secure and encrypted integration
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Fully API interface
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Payments worldwide
          </li>
        </ul>
       
      </div>
      
    </div>
  );
};

export default Listing;
