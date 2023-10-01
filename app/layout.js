import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'


export const metadata = {
  title: 'next-auth',
  description: 'mini project with next-auth',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" container mx-auto my-8 flex flex-col gap-6 " >
        <Header />
        {children}</body>
    </html>
  )
}
