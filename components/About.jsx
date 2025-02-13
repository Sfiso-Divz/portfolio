import Image from 'next/image'
import React from 'react'


const About = () => {
  return (

    <>
    
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1120px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2 text-center sm:text-left'>
                <p className=' text-[#5651e5] uppercase tracking-widest text-xl'>About</p>
                <p className='py-4 text-gray-600 font-bold text-xl'>Who I Am</p>
                <p className='py-2 text-gray-600 '>I am an aspiring Full Stack and Software developer currently residing in Gauteng, Pretoria. I have been learning differently technologies for about 1 year now trying to pave a way for myself in the tech industry. I believe in myself and my potential for growth in the industry. My motivation and passion allow me to continue persuing my dream.</p>
            </div>
            <div className='shadow-lg shadow-gray-700 rounded-lg py-6 md:py-2 md:hover:scale-105 ease-in-out duration-200' >
                <Image className='rounded-full' src="/./assets/me-removebg-preview.png" alt="Pic" width={350} height={350} />
            </div>
        </div>
    </div>
    </>
  )
}

export default About