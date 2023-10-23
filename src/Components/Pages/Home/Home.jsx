import React from 'react';


const Home = () => {
    return (
        <div  className='flex lg:flex-row flex-col lg:max-w-5xl w-full mx-auto lg:p-12 p-2 mt-6'>
        <div  className='flex-1 w-64 mt-4 p-2 font-sans'>
         <h1  className='text-4xl font-bold'>Launch a new income<br/> stream in <span  className='text-[#7868e6]'>
         stealth <br/> mode</span></h1>
         <p  className='mt-6 mb-6'>Create an anonymous profile,collect offers, and access side <br/> hustle opportunities without risking your current job.</p>
        <div  className='flex lg:flex-row flex-col items-center'>
        <button  className='text-white bg-[#7868e6] hover:bg-transparent text-yellow-100 font-bold rounded-md px-4 py-3'>Get Started</button>   
        <p  className='text-[#7868e6] hover:text-[#7868e6] ml-8'>Join 100,000+ professionals
</p>
        </div>
       </div>    


        <div className='rounded-full border border-gray-800 m-4 p-[5px] w-[26rem] mx-auto h-[25rem] overflow-hidden'>
<div className='rounded-full border border-gray-800 m-8 w-[20rem] mx-auto h-[20rem] overflow-hidden'>
               
<div className='relative flex justify-center items-center py-6 sm:py-12'>
                <img className='relative w-60 h-50 mx-auto animate-[spin_45s_linear_infinite]' src="https://i.ibb.co/pPxfbzK/649ee3bac6c9332f4b4c035e-Group-48098251.png" alt="pic" />
              
                
            {/* absolute part */}
            <div class='absolute p-1 flex justify-center items-center bg-black shadow-lg overflow-hidden left-12 -translate-x-1/2 w-16 h-24 rounded-full'>
                <img class='w-full animate-[spin_45s_linear_infinite]' src="https://i.ibb.co/fGgNyXv/649ee1b22fe4740733def574-Group-48098250.png" alt="" srcset="" />
            </div>
            <div class='absolute border border-black flex justify-center items-center bg-black shadow-xl drop-shadow-2xl overflow-hidden -top-4 right-20 -translate-x-1/2 w-16 h-28 rounded-full'>
                <img class='w-full animate-[spin_45s_linear_infinite]' src="https://i.ibb.co/JrHntr3/649ee1b28a9b37019810ab7a-Group-48098248.png" alt="" srcset="" />
            </div>
            <div class='absolute border border-black flex justify-center items-center bg-black drop-shadow-2xl overflow-hidden -right-4 -translate-x-1/2 w-16 h-20 rounded-full'>
                <img class='w-full animate-[spin_45s_linear_infinite]' src='https://i.ibb.co/F8RJgT5/649ee1b2402320b677d6d88f-Group-48098247.png' alt="" srcset="" />
            </div>

            <div class='absolute border border-black flex justify-center items-center bg-black shadow-lg overflow-hidden bottom-0 right-28 -translate-y-1/4 w-16 h-20 rounded-full'>
                <img class='w-full animate-[spin_45s_linear_infinite]' src='https://i.ibb.co/dfnvFQq/649ee1b4ce83d9ed8b828fc5-Group-48098249.png' alt="" srcset="" />
            </div>
            

            </div>
            </div>
            </div>


  </div>

    );
};

export default Home;