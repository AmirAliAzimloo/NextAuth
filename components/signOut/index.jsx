"use client"

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const SignOut = () => {

   const {data:session,status}=useSession();
   console.log(status)
 
   return (
      <div>
         <button onClick={()=>signOut()} className=" p-4 rounded bg-rose-600 text-white">sign out</button>
      </div>
   );
}

export default SignOut;