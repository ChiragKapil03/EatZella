import React, { useEffect } from 'react'
import { useState } from 'react'
import ReviewsCard from '../../Components/ReviewsCard/ReviewsCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList,faStar} from '@fortawesome/free-solid-svg-icons';
import {doc, getDoc} from "firebase/firestore";
import {auth ,db} from "../../Config/firebase"
import { toast } from 'react-toastify';


const Reviews = () => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const[userDetails,setUserDetails]=useState(null);

  const fetchUserData = async ()=>{
    auth.onAuthStateChanged(async (user)=>{
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()){
        setUserDetails(docSnap.data());
        console.log(docSnap.data());

      }
      else{
        console.log("user is not logged in ");

      }
    })
  }
  useEffect(() => {
    fetchUserData();
  }, [])
  

  const[reviews ,setReviews] = useState([
    {
      name: "Alice",
      date: "2024-04-01",
      rating: 4.5,
      image: "https://img.freepik.com/free-photo/front-view-smiley-woman-with-earbuds_23-2148613052.jpg",
      review: "The delivery was super fast and the food was delicious! I ordered a pizza and it was still hot when it arrived. The toppings were fresh and the crust was perfectly crispy."
    },
    {
      name: "Bob",
      date: "2024-04-03",
      rating: 3,
      image: "https://d22e6o9mp4t2lx.cloudfront.net/cms/Screenshot_2024_04_05_130256_473f8428ec.png",
      review: "The food was okay, but the delivery took longer than expected. I ordered a burger and fries, and while the burger was decent, the fries were a bit soggy."
    },
    {
      name: "Charlie",
      date: "2024-04-05",
      rating: 5,
      image: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
      review: "Amazing service! The food arrived hot and fresh. Will definitely order again. I tried their pasta dish, and it was divine. The sauce was rich and creamy, and the pasta was cooked to perfection."
    },
    {
      name: "Diana",
      date: "2024-04-07",
      rating: 2.5,
      image: "https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186104.jpg?semt=ais_hybrid",
      review: "The food quality was not up to the mark. Disappointed with the taste. I ordered sushi, and it tasted a bit off. The rice was too dry, and the fish didn't seem very fresh."
    },
    {
      name: "Eva",
      date: "2024-04-09",
      rating: 4,
      image: "https://img.freepik.com/free-photo/smiling-girl-with-braids_23-2147666878.jpg",
      review: "Great variety of options on the menu. Prompt delivery too! I tried their salads, and they were so refreshing. The ingredients were crisp and the dressings were flavorful."
    },
    {
      name: "Frank",
      date: "2024-04-10",
      rating: 4.2,
      image: "https://www.cameo.com/cdn-cgi/image/fit=cover,format=auto,width=500,height=500/https://cdn.cameo.com/resizer/EB2otn6YJ_avatar-1687038155759.jpg",
      review: "I was pleasantly surprised by the quality of the food and service. I ordered a steak and it was cooked to perfection, just the way I like it. The delivery was also very prompt."
    },
    {
      name: "Gina",
      date: "2024-04-12",
      rating: 3.8,
      image: "https://r2.erweima.ai/imgcompressed/img/compressed_95f6dc695351dbb5cf511ee473897718.webp",
      review: "Overall, a decent experience. The food arrived on time and was warm. However, the portion sizes were smaller than expected. I ordered a sandwich and it was tasty, but I wish there was more filling."
    },
    {
      name: "Henry",
      date: "2024-04-14",
      rating: 4.7,
      image: "https://www.shutterstock.com/image-photo/handsome-hispanic-millennial-man-sit-260nw-2174725871.jpg",
      review: "I'm impressed by the customer service. There was an issue with my order, but it was quickly resolved by the support team. The food itself was fantastic. I ordered their seafood platter and it was fresh and flavorful."
    },
    {
      name: "Ivy",
      date: "2024-04-16",
      rating: 3.5,
      image: "https://img.freepik.com/free-photo/close-up-smiley-woman-outdoors_23-2149002410.jpg",
      review: "The food was average. I ordered a pizza and it was a bit greasy. The delivery was on time though. Not sure if I'll order again."
    },
    {
      name: "Jack",
      date: "2024-04-18",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1664871475935-39a9b861514f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmljZSUyMGd1eXxlbnwwfHwwfHx8MA%3D%3D",
      review: "Absolutely loved it! The food was exceptional, especially the desserts. I ordered their chocolate cake and it was heavenly. The delivery was also very smooth."
    },
    {
      name: "Apurva",
      date: "2024-04-01",
      rating: 5,
      image: "https://r2.starryai.com/results/1005156662/01ea57ea-66bd-4bed-a467-11bbdedb43ea.webp",
      review: "Excellent service! The food arrived hot and on time. Definitely ordering again."
    },
    {
      name: "Smith",
      date: "2024-03-28",
      rating: 4,
      image: "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=",
      review: "Great variety of restaurants to choose from. The app is user-friendly and makes ordering food a breeze."
    },
    {
      name: "Alia",
      date: "2024-03-20",
      rating: 3,
      image: "https://media.istockphoto.com/id/471302107/photo/japan-girl.jpg?s=612x612&w=0&k=20&c=85n0j6pVyfNcncac3d_0Y-W8kJDf36fON0iQoFW0dSg=",
      review: "Decent service. However, the delivery was a bit late this time."
    },
    {
      name: "Emily",
      date: "2024-03-15",
      rating: 5,
      image: "https://media.istockphoto.com/id/1165702716/photo/everyone-loves-a-innocent-face.jpg?s=170667a&w=0&k=20&c=gsqRLMSofqroblukZ9AFnrVZxi6XHa5HT6LOqLygdsM=",
      review: "Impressed with the customer support. They promptly resolved an issue I had with my order. Will continue using this app."
    }
  ])

  const reviewTextChange =(e)=>{
    setReviewText(e.target.value);
  }

  const submitReview=()=>{
    if (!userDetails) {
      toast.error("user Not Logged In", {
        position: "top-center",
      });;
      return;
    }
    if (rating > 0 && reviewText.trim() !== '') {
      const newReview = {
        name: userDetails.firstName || "Anonymous", 
        date: new Date().toISOString().split('T')[0], 
        rating,
        image: userDetails.profilePicture || "https://via.placeholder.com/150", 
        review: reviewText,
      };
      setRating(0);
      setHoveredRating(0);
      setReviewText('');
      setReviews([newReview, ...reviews]);
    } 
    else {
      alert('Please provide both a rating and a review.');
    }
  }
  console.log('render hehehe');

  return (
    <div className='w-11/12 min-h-2/3 md:w-4/6 mx-auto my-6 p-2'>
      <h1 className='text-center font-bold text-3xl' style={{ fontFamily: 'Lexend, cursive' }}>Reviews</h1>
      <div className='flex flex-col justify-center items-center my-5 p-2'>
        {/* take costumer reviews  */}
        <p className='text-lg font-semibold my-1'>Rate your order!</p>
        <div className='bg-red-500 w-72 flex justify-center items-center gap-2 p-2 rounded'>
            {
              [1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon key={star} icon={faStar} 
                className={`text-white cursor-pointer transition duration-200 ${ star <= (hoveredRating || rating) ? 'text-yellow-400' : '' }`} onMouseEnter={() => setHoveredRating(star)} onMouseLeave={() => setHoveredRating(0)} onClick={() => setRating(star)} />
              ))
            }
            <p className='text-white font-semibold px-2'>
              {
                rating > 0 ? `${rating} Star${rating > 1 ? 's' : ''}` : 'Rate'
              }
            </p>
        </div>
        <textarea name="" id="" className='border border-black my-2 h-32 w-72 p-2 text-sm rounded-lg' placeholder='Write Review' style={{ fontFamily: 'Lexend, cursive' }} onChange={reviewTextChange}></textarea>
        <button className='rounded-md border p-1 w-24 bg-red-600 text-white font-semibold active:scale-50 duration-500' onClick={submitReview}>Submit</button>
      </div>
      <div>
        {/* images from costumers  */}
      </div>

      {/* reviews  */}
      <div className='max-w-4xl min-h-2/3 mx-auto'>
        <div className='h-16 bg-red-600 rounded flex justify-end px-8 items-center'>
          
            <button className='bg-white rounded h-10 w-36 font-bold flex justify-center items-center gap-2 border-2 border-black '>  <FontAwesomeIcon icon={faList} />Top Reviews</button>
        </div>

        <div className='flex flex-col gap-4 max-w-4xl min-h-2/3 '>
          {
            reviews.map((user)=>(
              <ReviewsCard key={user.image} userDetails={user} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Reviews
