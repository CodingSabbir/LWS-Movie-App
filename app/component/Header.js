'use client'
import Image from 'next/image';
import React, { useState,useContext } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import CardModal from './CardModal';
import { MovieContext } from './Moviecontext';
const Header = () => {
    const [showCardModal, setShowCardModal]=useState(false)
    const {cardData}=useContext(MovieContext)
    
    function handleShowCard(){
        setShowCardModal(true)
    }

    return (
        <>
      { 
        showCardModal && <CardModal
        onClose={()=> setShowCardModal(false)}
        />
      }
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <Image 
                className="h-16 w-16" 
                src="/img/video-editing-app.png" 
                alt="movie-logo" 
                width={400} 
                height={400} 
            />
            <div className="flex items-center">
                <div className="relative inline-block text-left">
                    <div className='flex gap-6'>
                      <div className='relative'>
                      
                      <FaShoppingCart onClick={handleShowCard} className='text-5xl bg-[#ecfeff] p-2 rounded-sm text-[#f43f5e] cursor-pointer' /> 
                      {cardData.length > 0 && (
                            <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full px-2 text-xs">
                                {cardData.length}
                            </span>
                        )}
                      </div>
                        <MdOutlineDarkMode className='text-5xl bg-[#ecfeff] p-2 rounded-sm text-[#f43f5e] cursor-pointer' />
                        <IoIosNotifications className='text-5xl bg-[#ecfeff] p-2 rounded-sm text-[#f43f5e] cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Header;
