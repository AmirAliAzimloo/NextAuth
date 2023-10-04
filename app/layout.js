import Header from '@/components/header'
import '../styles/globals.css';
import { Inter } from 'next/font/google'
import NextAuthProvider from './providers/NextAuthProvider';

export const metadata = {
  title: 'next-auth',
  description: 'mini project with next-auth',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" container mx-auto my-8 flex flex-col gap-6 " >
        <NextAuthProvider>
        <Header />
        {children}
        </NextAuthProvider>
       
        </body>
    </html>
  )
}
