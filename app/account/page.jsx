import SignOut from "@/components/signOut";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Account = async () => {
  const session =  await getServerSession(authOptions);
  if (!session) {
    redirect("/sign-in");
  }

  return (
    <main className=" flex justify-center items-center my-16 ">
      <div className="flex flex-row gap-10 justify-center items-center ">
        <div className="bg-green-600 text-white rounded p-4 ">
          {" "}
          account Page{" "}
        </div>
        <div className=" w-80 flex flex-col gap-4 bg-indigo-200 rounded-md p-8">
          <div>Name = {session.user?.name}</div>
          <div>Email = {session.user?.email}</div>
          {/* <Image alt="image of User" width={60} height={60} src={session.user?.image}/> */}
        </div>
        <SignOut />
      </div>
    </main>
  );
};

export default Account;
