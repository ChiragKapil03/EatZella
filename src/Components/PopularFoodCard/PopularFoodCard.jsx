import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus ,faClock} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const PopularFoodCard = ({image,name,price,addCartFun}) => {
  return (
    <div className='h-96 w-72 border rounded-md flex flex-col gap-8 shadow hover:shadow-lg duration-500'>
      <div>
        <img src={image} alt=""  className='rounded-md h-48 w-72 bg-cover bg-center'/>
      </div>
      <div className='flex flex-col gap-1 px-4'>
        <h1 className='font-bold text-lg'>{name}</h1>
        <p className='font-semibold text-gray-500'>Price: ₹ {price} /serving</p>
        <div className='flex items-center gap-3'>
          <div className='flex items-center'>
              <FontAwesomeIcon icon={faBus} className='h-3 mr-1 text-orange-500'/>
              <span className='text-sm text-gray-500 font-semibold'>Free Delivery</span>
          </div>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faClock} className='h-3 mr-1 text-orange-500' />
            <span className='text-sm text-gray-500 font-semibold'>15-30 min</span>
          </div>
        </div>
      </div>
      <div className='flex justify-between px-2 '>
        <button className='text-left bg-red-500 w-24 text-xs text-white p-1 flex justify-center font-semibold mt-2 duration-200 active:scale-95 rounded' onClick={addCartFun}>Add To Cart</button>
        <Link to={'/cart'}><button className='text-left bg-red-500 w-24 text-xs text-white p-1 flex justify-center font-semibold mt-2 duration-200 active:scale-95 rounded'>Go To Cart</button></Link>

      </div>
    </div>
  )
}

export default PopularFoodCard
