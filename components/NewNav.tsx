"use client"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/aQroxDl0UQa
 */
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { useToaster } from 'react-hot-toast';
import toast, { Toaster } from 'react-hot-toast';
import { SheetDemo } from "./SheetDemo";
import { DialogCloseButton } from "./DialogCloseButton";

export default function NewNavbar() {

  
    const notify = () =>toast('Hello I am Adel!',
    {
      icon: '👏',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    }
  );
  return (
    <header className="fixed top-0 left-0 right-0 mt-7 flex items-center justify-evenly px-6 py-4  bg-transparent z-50">
        {/* 1er dive */}
        <Toaster />
        {/* Avatar (adjust styling as needed) */}
        <div onClick={notify}  className="mx-4  relative overflow-hidden hover:scale-150 transition-transform duration-300">
          {/* Add your avatar component here */}
          <img
            src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/6215bcd5-cc8b-41a6-8747-ec49a76d64a2._CR0,0,368,368_UX460_.jpg"
            alt="Avatar"
            className="w-10 h-10 rounded-full shadow-xl"
          />
          
        </div>

        {/* Navigation Links */}
        <div className="flex  space-x-4 p-4 rounded-full blur-xs w-[205px] items-center justify-center bg-white    shadow-xl">
          {/* Work Link */}
          <div className="nav-link-wrapper">
            <Link href="#" passHref>
              <h1 className="text-lg font-semibold text-[#323235] hover:text-gray-700 dark:hover:text-gray-300">
                Work
              </h1>
            </Link>
          </div>

          {/* About Link */}
          <div className="nav-link-wrapper">
            <Link href="/About" passHref>
              <h1 className="text-sm font-semibold text-[#323235] hover:text-gray-700 dark:hover:text-gray-300">
                About
              </h1>
            </Link>
          </div>
        </div>
      

      {/* Menu Icon (adjust styling as needed) */}
      <div>
        {/* Add your MenuIcon component here */}
        <DialogCloseButton  />
      </div>
    </header>
  )
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
