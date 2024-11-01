import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faImage,faTruckFast } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className='bg-black p-6 w-full min-h-52 text-white '>
        <div id='top' className='flex justify-between flex-wrap mb-4 gap-3'>
            <div className='flex flex-col justify-between'>
                <h1 className='font-bold text-lg'>Company</h1>
                <span className='font-medium text-sm hover:text-gray-400 hover:cursor-pointer'>About us</span>
                <span className='font-medium text-sm hover:text-gray-400 hover:cursor-pointer'>Team</span>
                <span className='font-medium text-sm hover:text-gray-400 hover:cursor-pointer'>Careers</span>
                <span className='font-medium text-sm hover:text-gray-400 hover:cursor-pointer'>Blog</span>
            </div>

            <div className='flex flex-col justify-between'>
                <h1 className='font-bold text-lg'>Legal</h1>
                <span className='font-medium text-sm hover:text-gray-400 hover:cursor-pointer'>Terms & Conditions</span>
                <span className='font-medium text-sm hover:text-gray-400 hover:cursor-pointer'>Refund & Cancellation</span>
                <span className='font-medium text-sm hover:text-gray-400 hover:cursor-pointer'>Privacy Policy</span>
                <span className='font-medium text-sm hover:text-gray-400 hover:cursor-pointer'>Cookie Policy</span>
            </div>
            <div className='flex flex-col justify-between gap-2'>
                <h1 className='font-bold text-lg'>Follow us</h1>
                <div className='flex gap-4'>
                    {/* to be changed  */}
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faImage} />
                    <FontAwesomeIcon icon={faTruckFast} />
                    {/* to be changed  */}
                </div>
                <span className='font-medium text-sm hover:text-gray-400 hover:cursor-pointer'>Recieve exclusive offers in your mailbox</span>
                <input type='text' placeholder='Enter your email' className='p-2 rounded-lg'></input>
                <button className="bg-red-500 font-semibold text-black rounded-lg my-2 py-1 hover:bg-red-200 hover:text-black duration-500">Subscribe</button>
            </div>
        </div>
        <hr />
        <div id='bottom' className='mt-2 text-center'>
            <p>All rights reserved @EatZella</p>
        </div>
    </div>
  )
}

export default Footer
