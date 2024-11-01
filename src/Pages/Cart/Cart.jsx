import React, { useState } from 'react';
import { useCart } from '../../Context/CartContext'; 
import CartCard from '../../Components/CartCard/CartCard';
import Video from '../../assets/Delivery.mp4'

const Cart = () => {
  const { cart, setCart } = useCart(); 
  const [showPaymentForm, setShowPaymentForm] = useState(false); // State to control payment form visibility

  const deleteItem = (id) => {
    const updatedCart = cart.filter(item => item._id !== id); 
    setCart(updatedCart); 
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleProceedToPayment = () => {
    setShowPaymentForm(true);
  };

  const handleClosePaymentForm = () => {
    setShowPaymentForm(false);
  };

  return (
    <div className='w-11/12 min-h-2/3 md:w-2/6 mx-auto my-6 flex flex-col gap-3 items-center justify-center p-4 bg-red-500 rounded'>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <CartCard key={item._id} item={item} onDelete={deleteItem} /> 
        ))
      )}
      
      {cart.length > 0 && (
        <>
          <div className='mt-4'>
            <h2 className='text-white font-bold'>Total: ₹ {totalPrice.toFixed(2)}</h2>
          </div>
          <button 
            onClick={handleProceedToPayment}
            className='mt-4 bg-white font-semibold text-red-500 p-2 rounded max-auto active:scale-95 duration-300'>
            Proceed To Payment
          </button>
        </>
      )}

      {showPaymentForm && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50' >
           
          <div className='bg-white p-6 rounded-lg w-4/5 md:w-1/3 relative'>
          <video 
            src={Video} 
            autoPlay 
            loop 
            muted 
            className=' top-0 left-0 w-96 h-36 full object-cover'
          />
            <button 
              onClick={handleClosePaymentForm}
              className='absolute top-2 right-2 text-gray-500 hover:text-red-500 font-bold'>
              X
            </button>
            <h2 className='text-xl font-bold mb-4'>Payment Details</h2>
            <form className='flex flex-col gap-4'>
              <input type="text" placeholder="Name" className="border p-2 rounded" required />
              <input type="text" placeholder="Address" className="border p-2 rounded" required />
              <input type="tel" placeholder="Phone Number" className="border p-2 rounded" required />
              <div className="font-semibold">Total Amount: ₹ {totalPrice.toFixed(2)}</div>
              <button type="submit" className='bg-red-500 text-white font-bold p-2 rounded mt-2 active:scale-95 duration-300'>
                Pay
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
