import React from 'react'

const CuisineCard = ({imgSrc, name,fun}) => {
  return (
    <div className='md:w-40 w-24 flex flex-col items-center hover:cursor-pointer' onClick={fun}>
      <div className='rounded-full md:w-40 w-24 flex justify-center items-center' >
        <img src={imgSrc} alt="" className='rounded-full md:w-32 w-24 hover:shadow-xl hover:scale-95 duration-300'/>
      </div>
      <p className='font-bold'>{name}</p>
    </div>
  )
}

export default CuisineCard;
