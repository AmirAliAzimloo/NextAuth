import SignOut from "@/components/signOut"
export default function Account() {
    return (
      <main className=' flex justify-center items-center my-16 ' >
        <div className='flex flex-row gap-10 justify-center items-center ' >
        <div className='bg-green-600 text-white rounded p-4 ' > account Page </div>
        <SignOut />
        </div>
      </main> 
    )
  }
  