import React from 'react';


const Companies = () => {
    return (
        <div className='lg:max-w-5xl w-full mx-auto mt-16 text-center lg:text-3xl text-sm font-bold'>
           <h1>Join 75,000+ professionals from top companies.</h1> 
           <div className='flex lg:flex-row flex-col lg:p-4 p-2 items-center'>
            <img className='w-32 mx-auto items-center' src='https://i.ibb.co/y4kJhS4/google-removebg-preview.png' alt='company'/>
            <img className='w-32 mx-auto items-center' src='https://i.ibb.co/fnF0TnP/twitch-removebg-preview.png' alt='company'/>
            <img className='w-32 mx-auto items-center' src='https://i.ibb.co/7W9TF9P/Pinterest-Logo-removebg-preview.png' alt='company'/>
            <img className='w-32 mx-auto items-center' src='https://i.ibb.co/jw3D2Kk/facebook-G-removebg-preview.png' alt='company'/>
            <img className='w-32 mx-auto items-center' src='https://i.ibb.co/Lpy8mQY/64d519128a98216aed794da3-microsoft.png' alt='company'/>
            <img className='w-24 mx-auto items-center' src='https://i.ibb.co/M7KpHpk/64d51959df0f41b2116c413b-amazon.png' alt='company'/>
           </div>
        </div>
    );
};

export default Companies;