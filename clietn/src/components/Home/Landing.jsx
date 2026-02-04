import React from 'react'
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }
  return (
        <>
            <style>{`
                @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
            
                * {
                    font-family: "Poppins", sans-serif;
                }
            `}</style>
            <div className='px-4 py-20'>
                <div
                    className='w-full max-w-5xl bg-linear-to-b from-violet-100 to-[#FFE8E9] rounded-3xl px-6 pt-20 md:p-18 mx-auto flex flex-col md:flex-row justify-between items-center md:items-center relative overflow-hidden'>
            
                    <div className='flex-1 px-2 md:pl-5 mb-8 md:mb-0 md:mt-4 text-center md:text-left'>
                        <h1 className='text-3xl md:text-4xl/12 font-medium text-gray-900 text-balance'>Meet the team Shaping the
                            future.</h1>
                        <p className='text-sm/6 text-gray-700 max-w-full md:max-w-sm mt-3 mx-auto md:mx-0'>Our diverse team of
                            engineers and designers are dedicated to building AI agents that simplify work and empower businesses.
                        </p>
                        <button onClick={handleLogout}
                            className='bg-white
                             hover:bg-gray-50 px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm
                             text-gray-700 mt-6 md:mt-8 cursor-pointer'>LOGOUT</button>
                    </div>
            
                    <div className='shrink-0 md:-mr-18 -mb-6 md:-mb-23 md:mt-4 w-full md:w-auto'>
                        <img className='w-full md:w-122.5 h-auto rounded-tr-3xl md:rounded-tr-none rounded-br-none md:rounded-br-3xl rounded-bl-none' src='https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/team/team-meeting-image.png' alt="meeting image" />
                    </div>
                </div>
            </div>
            <div> Thank You for Visit</div>
        </>
    );
};

export default Landing