import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div className='w-full lg:h-screen'>
        <div className='max-w-[1120px] m-auto px-2 py-16 w-full '>
            <p className='text-[#5651e5] uppercase tracking-widest text-xl'>Contact</p>
            <h2 className='py-4 text-xl text-gray-600'>Get in touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>

                {/* Left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image src="/assets/contact.jpg" width='500' height='500' alt='/'/>
                        </div>
                        <div>
                            <h2 className='py-2 text-2xl text-gray-600'>Mfihlo Dlamini</h2>
                            <p className='text-gray-400'>Front-End Developer</p>
                            <p className='py-4 text-gray-600'>I am available for full-time positions, contact me and let's talk</p>
                        </div>
                        <div>
                            <p className='uppercase pt-8 text-gray-600'>Connect with me</p>
                            <div className='flex items-center justify-between py-4 text-[#5651e5]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
                                    <FaLinkedin />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
                                    <AiOutlineMail />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Right */}

                <div id='contact' className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col '>
                                    <label className='uppercase text-sm py-2 text-gray-600'>Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300 ' type="text" />

                                </div>
                                <div className='flex flex-col '>
                                    <label className='uppercase text-sm py-2 text-gray-600'>Phone Number</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300 ' type="text" />

                                </div>

                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2 text-gray-600'>Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300 ' type="email" />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2 text-gray-600'>Subject</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300 ' type="text" />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2 text-gray-600'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12 '>
                <Link href="/">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <HiOutlineChevronDoubleUp className='m-auto text-[#5651e5]' size={30} />
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact