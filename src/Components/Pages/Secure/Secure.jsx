import React from 'react';
import './Secure.css'

const Secure = () => {
    return (
         <div className='lg:max-w-5xl w-full mx-auto mt-24 text-center mt-16 justify-center lg:p-4 p-3'>
       <div>
          <h1 className='lg:text-3xl text-sm font-bold'>Secure your future in <span className='text-[#7868e6]'>stealth mode</span>.</h1>  
          <p className='text-xl font-thin mt-6'>Create an anonymous profile signaling your interest in finding a side hustle opportunity.  Businesses can reach out to you directly and if you're interested you can engage.  You keep 100% of your earnings and the business you work with can make you a full time offer without paying any recruiting fee.   This allows you to build a new income stream and try out new opportunities without risking your full time job.</p>
          <button className='text-center bg-[#7868e6] px-6 py-4 mt-4 rounded-md'>Get Started</button>
        </div>


        <div>
        <h1 className='lg:text-4xl text-sm font-bold mt-24'>The future of hiring is here.</h1>
        <button className='text-center button text-[#7868e6] px-12 py-4 mt-8 rounded-md lg:text-xl text-sm'>HustleWing For Business</button>
        </div>
       </div>
    );
};

export default Secure;