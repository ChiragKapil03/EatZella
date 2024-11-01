import React, { useState , useMemo } from 'react'

const ReviewsCard = ({userDetails}) => {
  console.log('user cards ');
  return (
    <div className='w-full min-h-2/3 mx-auto border-2 flex flex-col gap-3 p-4 rounded shadow-lg hover:shadow-2xl duration-700'>
      <div className='flex'>
        <img src={userDetails.image} alt="" className='w-12 h-12 rounded-full object-cover'/>
        <div className='relative top-7 -left-3 bg-orange-400 h-6 rounded-full text-white p-1 font-bold' style={{ fontFamily: 'Lexend, cursive', fontSize:"10px"}}>
            {userDetails.rating}
        </div>
        <div className='flex flex-col '>
            <p className='font-bold' style={{ fontFamily: 'Lexend, cursive' }}>{userDetails.name}</p>
            <p className='text-xs text-gray-400 font-bold' style={{ fontFamily: 'Lexend, cursive' }}>{userDetails.date}</p>
        </div>
      </div>
        <p style={{ fontFamily: 'Lexend, cursive' }}>{userDetails.review}</p>
        <hr className="border-t-2 w-full border-gray-300 my-4"/>
    </div>
  )
}

export default React.memo(ReviewsCard);
