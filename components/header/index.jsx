import Link from "next/link"

const Header = ()=>{
    return(
        <div className=" p-4 flex justify-around items-center gap-8 " >
            <Link href={"/"} className="bg-green-600 rounded p-2 text-white" >Home</Link>
            <div>
                <Link href={"/sign-in"} className="bg-green-600 cursor-pointer rounded p-2 text-white" >Sign in</Link>
                <Link href={"/sign-up"} className="bg-green-600 mx-4 cursor-pointer rounded p-2 text-white" >Sign up</Link>
                <Link href={"/account"} className="bg-green-600 cursor-pointer rounded p-2 text-white" >Account</Link>
            </div>
        </div>
    )
}

export default Header