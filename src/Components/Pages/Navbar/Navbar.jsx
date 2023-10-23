import React from 'react';
import logo from '../../../images/64d517d4cceeb3e71f7da9f7_HW-Wing.png';

const Navbar = () => {
    return (
        <div>
         <header className="p-4 lg:max-w-7xl w-full mx-auto">
	<div className="container flex justify-between h-16 mx-auto">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
            <img className='w-16' src={logo}/>
            <p className='text-2xl font-bold'>HustleWing</p>
		</a>
		<ul className="items-stretch hidden space-x-3 md:flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="/" className="flex items-center px-4 -mb-1 text-[#7868e6] hover:text-blue-700 hover:text-xl">For Business</a>
			</li>
			<li className="flex">
            <a rel="noopener noreferrer" href="/" className="flex items-center px-4 -mb-1 text-[#7868e6] hover:bg-[#7868e6] hover:text-yellow-100 rounded-md">Login</a>
			</li>
			<li className="flex">
            <a rel="noopener noreferrer" href="/" className="flex items-center px-4 -mb-1 bg-[#7868e6] hover:bg-yellow-50 hover:text-black text-yellow-100 font-bold rounded-md">Get Started</a>
			</li>
		</ul>
		<button className="flex justify-end p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>   
        </div>
    );
};

export default Navbar;