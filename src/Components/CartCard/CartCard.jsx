import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus ,faClock,faTrash} from '@fortawesome/free-solid-svg-icons';

const CartCard = ({ item, onDelete }) => {
  return (
    <div className='flex gap-2 border bg-white rounded-md p-10'>
      <div className='rounded-full md:w-40 w-24 flex justify-center items-center'>
        <img src={item.image} alt={item.name}  className='rounded-full md:w-32 w-24 hover:shadow-xl hover:scale-95 duration-300'/>
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-lg font-bold '>{item.name}</h1>
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
        <p className='text-md font-bold'>₹{item.price}</p>
      </div>
      <div>
        <button onClick={() => onDelete(item._id)}>
        <FontAwesomeIcon icon={faTrash} />
        </button> 
      </div>
    </div>
  );
}

export default CartCard;
