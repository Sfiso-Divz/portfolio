import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1120px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest  text-gray-600'>Let's Build something together</p>
                <h1 className='py-2 text-gray-700 '>Hi I'm <span className='text-[#5651e5]'>Mfihlo</span></h1>
                <h1 className='py-2 text-gray-700 '>A Front-End Developer</h1>
                <p className='text-gray-700 py-4'>I am aspiring to become a Full-Stack and Software Developer, I am currently learning different technologies to help me reach that goal.</p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-6 text-[#5651e5]'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <a href="https://www.linkedin.com/in/mfihlo-dlamini-7193092a3/"><FaLinkedin /></a> 
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <a href="https://github.com/Sfiso-Divz"><FaGithub /></a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <a href="/#contact"><AiOutlineMail /></a>
                        
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <a href="https://x.com/Sfiso_Divz"><FaTwitter /></a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main