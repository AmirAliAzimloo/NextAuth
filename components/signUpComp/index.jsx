"use client"
import Image from "next/image";
import { useState, useRef } from "react";
import { FiAtSign } from "react-icons/fi";
import { IoFingerPrintSharp } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
// bg-[#29C28D] 
import axios from "axios";
import { signIn } from "next-auth/react";

const SignUpComponent = () => {

   const [emailFocus, setemailFocus] = useState(-1);
   const [passwordFocus, setpasswordFocus] = useState(-1);
   const [usernameFocus, setusernameFocus] = useState(-1);
   const [passDisplay, setpassDisplay] = useState(-1);


   const emailRef=useRef();
   const usernameRef=useRef();
   const passwordRef=useRef();

   const signIner= async ()=>{
      await signIn("credentials",{
         email:emailRef.current.value,
         password:passwordRef.current.value,
         callbackUrl:"/account",
      })
   }


   const userCreator=(e)=>{
      e.preventDefault();

      const formData={
         email:emailRef.current.value,
         username:usernameRef.current.value,
         password:passwordRef.current.value,
      }

      const theUrl="http://localhost:3000/api/user/create-user";
      axios.post(theUrl,formData)
      .then(d=>{
         console.log(d.data);
         signIner();
      })
      .catch(e=>{
         console.log(e.response.data);
      })

   }




   return (
      <div className=" flex justify-center items-center">
         <div className="  flex justify-between items-center w-2/3  shadow-md shadow-green-900 rounded-md p-8">
            <div className=" ">
               <Image
                  width={400}
                  height={400}
                  src={"/auth-images/bg.svg"}
                  alt="auth image"
               />
            </div>
            <div className=" w-80 flex flex-col gap-6">
               <h1 className=" font-bold text-lg text-center text-blue-500">SIGN UP</h1>
               <form onSubmit={userCreator} className=" flex flex-col gap-4">
                  <div className={
                     emailFocus == -1
                        ? " bg-white border-zinc-200 rounded flex items-center p-2 w-full text-zinc-600 border-2"
                        : " bg-white border-zinc-200 rounded flex items-center p-2 w-full text-indigo-500 border-2"
                  }>
                     <input ref={emailRef} placeholder="Email" onFocus={() => setemailFocus(1)} onBlur={() => setemailFocus(-1)} type="text" className=" w-full bg-transparent outline-none" />
                     <span className=""><FiAtSign className=" w-6 h-6" /></span>
                  </div>
                  <div className={
                     usernameFocus == -1
                        ? " bg-white border-zinc-200 rounded flex items-center p-2 w-full text-zinc-600 border-2"
                        : " bg-white border-zinc-200 rounded flex items-center p-2 w-full text-indigo-500 border-2"
                  }>
                     <input ref={usernameRef} placeholder="username" onFocus={() => setusernameFocus(1)} onBlur={() => setusernameFocus(-1)} type="text" className=" w-full cursor-pointer bg-transparent outline-none" />
                     <span className=""><FiUser className=" w-6 h-6" /></span>
                  </div>
                  <div className={
                     passwordFocus == -1
                        ? " bg-white border-zinc-200 rounded flex items-center p-2 w-full text-zinc-600 border-2"
                        : " bg-white border-zinc-200 rounded flex items-center p-2 w-full text-indigo-500 border-2"
                  }>
                     <input ref={passwordRef} placeholder="Password" onFocus={() => setpasswordFocus(1)} onBlur={() => setpasswordFocus(-1)} type={passDisplay == -1 ? "password" : "text"} className=" w-full cursor-pointer bg-transparent outline-none" />
                     <span className=""><IoFingerPrintSharp onClick={() => setpassDisplay(passDisplay * -1)} className=" w-6 h-6" /></span>
                  </div>
                  <button className=" bg-[#38D39F] transition-all duration-500 hover:bg-[#32BD8F] rounded p-2 w-full text-white" type="submit">SIGN UP</button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default SignInComponent;