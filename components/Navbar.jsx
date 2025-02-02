import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {

    const[nav, setNav] = useState(false);
    const[shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {

        const handleShadow = () => {
            if(window.scrollY > 90){
                setShadow(true);
            }else{
                setShadow(false);
            }
        }
        window.addEventListener('scroll', handleShadow);
    }, [])

  return (
    <div className={shadow ? 'fixed w-full h-16 shadow-xl z-[100] bg-slate-100': 'fixed w-full h-16 z-[100] bg-slate-100'}>
        <div className='flex justify-between items-center w-full h-full px-6 2xl:px-16'>
            <Link href="/">
                <h3 className='p-3 text-gray-700'>MD</h3>
            </Link>
            <div>
                <ul className='hidden md:flex'>
                    <Link href="/">
                        <li className='ml-10 text-[12px] uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link  href="/#about">
                        <li className='ml-10 text-[12px] uppercase hover:border-b'>About</li>
                    </Link>
                    <Link  href="/#skills">
                        <li className='ml-10 text-[12px] uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link  href="/#contact">
                        <li className='ml-10 text-[12px] uppercase hover:border-b'>Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25}/> 
                </div>
            </div>
        </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500': 'fixed left-[-100%] p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <h3 className='text-gray-700'>MD</h3>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4 text-gray-700'>Let's build together</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href="/">
                            <li onClick={()=> setNav(false)} className='py-4 text-sm text-gray-600'>Home</li>
                        </Link>
                        <Link href="/#about">
                            <li onClick={()=> setNav(false)} className='py-4 text-sm text-gray-600'>About</li>
                        </Link>
                        <Link href="/#skills">
                            <li onClick={()=> setNav(false)} className='py-4 text-sm text-gray-600'>Skills</li>
                        </Link>
                        <Link href="/#contact">
                            <li onClick={()=> setNav(false)} className='py-4 text-sm text-gray-600'>Contact</li>
                        </Link>
                    </ul>
                    <div className='py-40'>
                        <p className='uppercase tracking-widest text-[#5651e5] '>Let's connect</p>
                        <div className='flex justify-between items-center my-4 w-full sm:w-[80%] '>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <AiOutlineMail />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <BsFillPersonLinesFill />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar