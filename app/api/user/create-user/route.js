import User from "@/models/User";
import dbConnect from "@/util/dbConnect";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req){
   try{
      dbConnect();

      const userData=await req.json();
      const emailExist=await User.findOne({email:userData.email});
      if(!emailExist){
         const hashedPassword=await bcrypt.hash(userData.password,10);
         userData.password=hashedPassword;
         await User.create(userData);
         return NextResponse.json({message:"user created"},{status:201});
      }else{
         return NextResponse.json({message:"please enter another email..."},{status:401});
      }
   }catch(err){
      console.log(err);
      return NextResponse.json({message:"error happened..."},{status:400});
   }
}