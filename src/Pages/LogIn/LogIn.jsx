import React, { useState } from 'react';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, googleAuthProvider, db } from '../../Config/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import SignPhoto from '../../assets/SignUp.gif';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;
      const userDocRef = doc(db, "Users", user.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          uid: user.uid,
          email: user.email,
          firstName: user.displayName,
          profilePicture: user.photoURL
        });
      }
      
      toast.success("User logged in with Google", {
        position: "top-center",
      });
      navigate("/");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User logged in successfully", {
        position: "top-center",
      });
      navigate('/');
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className='w-full h-full flex items-center justify-center' style={{ background: "linear-gradient(90deg,rgb(255, 77, 0),rgb(241, 171, 137),rgb(255, 77, 0))" }}>
      <form onSubmit={handleSubmit} className='w-72 md:w-96 p-10 flex flex-col gap-4 justify-center items-center px-10 border rounded-lg bg-white shadow-gray-300 shadow-lg' 
          style={{
            backgroundImage: `url(${SignPhoto})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
        <h1 className='text-center text-2xl font-semibold '>Log In</h1>
        <div>
          <label htmlFor="email">Email address:</label><br />
          <input type="text" name='email' placeholder='John@123' className='border rounded-md p-2 w-60 md:w-80' onChange={(e) => {
            setEmail(e.target.value);
          }} />
        </div>
        <div>
          <label htmlFor="password">Password::</label><br />
          <input type="text" name='password' placeholder='******' className='border rounded-md p-2 w-60 md:w-80' onChange={(e) => {
            setPassword(e.target.value);
          }} />
        </div>

        <button className='w-60 md:w-80 flex justify-center p-2 border rounded-md bg-red-500 text-white font-semibold active:scale-50 duration-500'>Log In</button>

        <button onClick={onLogin} className='w-60 md:w-80 flex justify-center p-2 border rounded-md bg-red-500 text-white font-semibold active:scale-50 duration-500'>Login with Google</button>
      </form>
    </div>
  );
};

export default LogIn;
