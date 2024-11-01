import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, googleAuthProvider, db } from '../../Config/firebase';
import SignPhoto from '../../assets/SignUp.gif';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAdd, setEmailAdd] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!emailAdd || !userPassword) {
      console.log("Email or password is empty");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailAdd, userPassword);
      const user = userCredential.user;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: firstName,
          lastName: lastName
        });
      }
      console.log('User registered');
      toast.success("User Registered Successfully", {
        position: "top-center",
      });
      // Redirect to login page after successful registration
      navigate('/login');
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className='w-full h-full flex items-center justify-center' style={{ background: "linear-gradient(90deg,rgb(255, 77, 0),rgb(241, 171, 137),rgb(255, 77, 0))" }}>
      <form onSubmit={handleRegister} className='w-72 md:w-96 p-10 flex flex-col gap-4 justify-center items-center px-10 border rounded-lg bg-white shadow-gray-300 shadow-lg' style={{
        backgroundImage: `url(${SignPhoto})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <h1 className='text-center text-2xl font-semibold '>Sign Up</h1>
        <div>
          <label htmlFor="firstName">First Name:</label><br />
          <input type="text" name='firstName' placeholder='John' className='border rounded-md p-2 w-60 md:w-80' onChange={(e) => {
            setFirstName(e.target.value);
          }} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label><br />
          <input type="text" name='lastName' placeholder='Doe' className='border rounded-md p-2 w-60 md:w-80' onChange={(e) => {
            setLastName(e.target.value);
          }} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label><br />
          <input type="text" name='email' placeholder='John@123' className='border rounded-md p-2 w-60 md:w-80' onChange={(e) => {
            setEmailAdd(e.target.value);
          }} />
        </div>
        <div>
          <label htmlFor="password">Password:</label><br />
          <input type="text" name='password' placeholder='******' className='border rounded-md p-2 w-60 md:w-80' onChange={(e) => {
            setUserPassword(e.target.value);
          }} />
        </div>

        <button className='w-60 md:w-80 flex justify-center p-2 border rounded-md bg-red-500 text-white font-semibold active:scale-50 duration-500'>Sign Up</button>

        <Link to="/login"><p className='text-blue-500 font-semibold underline hover:text-purple-500'>Already a user? Login</p></Link>
      </form>
    </div>
  );
};

export default SignUp;
