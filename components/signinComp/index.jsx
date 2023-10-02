import Image from "next/image";
import { FiAtSign } from "react-icons/fi";
import { GrGoogle } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { IoFingerPrintSharp } from "react-icons/io5";


const SignInComponent = () => {

   return (
      <div className=" flex justify-center items-center">
         <div className="  flex justify-between items-center w-full  shadow-lg shadow-green-900 rounded-md p-8">
            <div className=" ">
               <Image
                  width={400} 
                  height={400}
                  src={"/auth-images/bg.svg"}
                  alt="auth image"
               />
            </div>
            <div className=" w-80 flex flex-col gap-6">
               <h1 className=" font-bold text-lg text-center text-blue-500">SIGN IN</h1>
               <form  className=" flex flex-col gap-4">
                  <div className={
                       " bg-white border-zinc-200 rounded flex items-center p-2 w-full text-zinc-600 border-2"

                  }>
                     <input  placeholder="Email"   type="text" className=" w-full bg-transparent outline-none" />
                     <span className=""><FiAtSign className=" w-6 h-6" /></span>
                  </div>
                  <div className={
                     
                       " bg-white border-zinc-200 rounded flex items-center p-2 w-full text-zinc-600 border-2"

                  }>
                     <input  placeholder="Password"  type="password" className=" w-full  bg-transparent outline-none" />
                     <span className=""><IoFingerPrintSharp  className=" w-6 h-6" /></span>
                  </div>
                  <button className=" bg-[#38D39F] transition-all duration-500 hover:bg-[#32BD8F] rounded p-2 w-full text-white" type="submit">SIGN IN</button>
               </form>
               <div className=" flex flex-col gap-4">
                  <button
                  className=" bg-white border-2 border-blue-500 transition-all duration-500 hover:bg-blue-500 rounded p-2 w-full text-blue-600 hover:text-white flex justify-center items-center gap-4" type="submit"><GrGoogle /><span>GOOGLE SIGN IN</span></button>
                  <button
                  className=" bg-white border-2 border-slate-800  transition-all duration-500 hover:bg-slate-800 rounded p-2 w-full text-slate-800 hover:text-white flex justify-center items-center gap-4" type="submit"><GrGithub /><span>GITHUB SIGN IN</span></button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default SignInComponent;