"use client";
/*


*
 * v0 by Vercel.
 * @see https://v0.dev/t/97KiMTYYOyl
 */
import { Button } from "@/components/ui/button"
import { SlLocationPin } from "react-icons/sl";
import { TypeAnimation } from 'react-type-animation';
import { HoverCardDemo } from "./HoverCardDemo";

export default function NewFeed() {
  return (
    <main className="w-full h-screen mt-[-20px] flex flex-col justify-center items-center  bg-gray-100">
      <h1 className="text-[50px] font-bold mb-4 orange">
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Hi,I'm Adel",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Hi,I'm Develepeur",
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
      </h1>
      <h2 className="text-sm flex flex-row items-center font-semibold text-gray-600 mb-4"><SlLocationPin size={20} className="text-lg mr-2 flex flex-row items-center text-red-400" />Algeria,Alger</h2>
      <p className="text-lg w-[900px] text-gray-700/80 px-4 text-center max-w-lg">
      I&aposm a naturally curious designer with an appetite for No-Code tools, motion design, and tasty food <span className="underline flex items-center"></span>. 
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        
        
      </div>
    </main>
  )
}

