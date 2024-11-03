import React, { useContext, useState, useRef } from 'react';
import video from '../../assets/Preparing.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CuisineCard from "../../Components/Cuisine/CuisineCard.jsx";
import PopularFoodCard from '../../Components/PopularFoodCard/PopularFoodCard.jsx';
import { menu_list, food_list } from '../../assets/frontend_assets/assets.js';
import { CartContext } from '../../Context/CartContext.jsx'; 
import Cart from '../Cart/Cart.jsx';

const Home = () => {
  const scrollContainerRef = useRef(null);
  const [itemsToShow, setItemsToShow] = useState(12);
  const [foodCategory, setFoodCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); 

  const { cart, setCart } = useContext(CartContext); 

  const AddToCart = (foodItem) => {
    setCart((prevCart) => {
      const itemExists = prevCart.some(item => item._id === foodItem._id);
      if (!itemExists) {
        return [...prevCart, foodItem]; 
      }
      return prevCart; 
    });
  };

  const showMoreItems = () => {
    setItemsToShow(food_list.length);
  };

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  };

  const targetDivRef = useRef(null);

  const scrollToDiv = () => {
    if (targetDivRef.current) {
      targetDivRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const filteredFoodList = food_list
    .filter(item => 
      (foodCategory ? item.category === foodCategory : true) && 
      (searchTerm ? item.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
    );

  return (
    <>
      {/* Are You Starving Section */}
      <div className='w-11/12 min-h-2/3 md:w-4/6 bg-red-600 mx-auto my-6'>
        <div className='flex flex-wrap gap-2 md:gap-6 xl:gap-8 2xl:gap-12 p-14 pt-24'>
          <div id='left' className='flex flex-col gap-5 h-96 text-left justify-center w-full lg:w-2/3'>
            <h1 className='font-extrabold text-5xl md:text-6xl 2xl:text-7xl text-white' style={{ fontFamily: 'Courgette, cursive' }}>Are You Starving?</h1>
            <p className='text-white mt-3 text-lg' style={{ fontFamily: 'Lexend, cursive' }}>Within a few clicks, find meals that are accessible near you</p>
            <button className='text-left bg-white w-28 p-2 flex justify-center font-semibold mt-2 active:scale-95 rounded hover:bg-orange-500 duration-500 hover:border-white hover:text-white border-2' onClick={scrollToDiv}>View Menu</button>
          </div>
          <div id='right' className='flex'>
            {/* Video as gif */}
            <video src={video} alt="Preview of menu" loop muted autoPlay className='w-60 3xl:w-80' />
          </div>
        </div>
      </div>

      {/* Orders Divs */}
      <div className='w-11/12 min-h-2/3 md:w-4/6 mx-auto my-6'>
        <h1 className='font-bold text-2xl' style={{ fontFamily: 'Lexend, cursive' }}>What would you like to order?</h1>
        <div className='mt-4'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='w-5 mx-3 h-5' />
          <input  type="text"  placeholder='Find Food'  className='border w-11/12 rounded p-1 mx-4 focus:border-orange-500 outline-none h-12'  value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)} />
        </div>

        {/* Food Type */}
        <div className='w-full sm:w-10/12 md:w-8/12 min-h-2/3 mx-auto relative'>
          <FontAwesomeIcon icon={faArrowLeft} className='bg-gray-300 p-2 rounded-full hover:cursor-pointer absolute -left-5 top-8 md:top-14 z-10 opacity-80' onClick={scrollLeft} />
          
          <div id='scroll' className='relative w-auto min-h-2/3 mx-auto my-6 flex gap-4 sm:gap-6 md:gap-5 overflow-scroll no-scrollbar' ref={scrollContainerRef}>
            {
              menu_list.map((e) => (
                <CuisineCard key={e.menu_image} imgSrc={e.menu_image} name={e.menu_name} fun={() => {
                  setFoodCategory(e.menu_name);
                }} />
              ))
            }
          </div>

          <FontAwesomeIcon icon={faArrowRight} className='bg-gray-300 p-2 rounded-full hover:cursor-pointer absolute -right-4 top-8 md:top-14 z-10 opacity-80' onClick={scrollRight} />
        </div>
        <hr className="border-t-2 w-full border-gray-300 my-4" />
      </div>

      {/* Popular Food List */}
      <div className='w-11/12 min-h-2/3 md:w-4/6 mx-auto my-6'>
        <div className='flex justify-between px-2 flex-wrap'>
          <h1 className='text-2xl font-semibold' style={{ fontFamily: 'Lexend, cursive' }} ref={targetDivRef}>Popular Foods</h1>
          <p>Most Relevant</p>
        </div>
        <br />
        <div id='FoodList' className='flex flex-wrap gap-8 px-1 justify-center'>
          {
            filteredFoodList.slice(0, itemsToShow).map((e) => (
              <PopularFoodCard
                key={e._id}
                image={e.image}
                name={e.name}
                price={e.price}
                addCartFun={() => AddToCart(e)} 
              />
            ))
          }
          {
            itemsToShow < filteredFoodList.length && (
              <button onClick={showMoreItems} className="mt-4 bg-orange-600 font-semibold text-white p-2 rounded max-auto">See More</button>
            )
          }
        </div>
      </div>
    </>
  );
}

export default Home;
