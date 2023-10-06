import User from "@/models/User";
import dbConnect from "@/util/dbConnect";
import { NextResponse } from "next/server";


export async function GET(req){
   try{
      dbConnect();
      const allUsers=(await User.find()).reverse();
      return NextResponse.json({data:allUsers},{status:200});
   }
   catch(err){
      console.log(err)
      return NextResponse.json({data:null},{status:400});
   }
}