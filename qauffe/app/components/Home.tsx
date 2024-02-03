import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [showOriginal, setShowOriginal] = useState(true);
   const Replace = () =>{
    setShowOriginal(false);
   }
      return (
            <div className="">
        <div className="w-full ">
          {showOriginal ? 
          (<div className="flex-col sm:flex-row">
          <div>
            <Image 
            src="/coffee.jpg" 
            width={300}
            height={300}
            alt="Coffee"
            priority
            className="w-full sm:w-[400px] "/>
          </div>
          <div className="bg-gray-600 h-[300px] w-full sm:w-[400px] ">
           <h1 className="text-3xl text-center text-white">Fueling your day, one cup at a time!</h1>
           <p className="text-white text-[13px] text-center mt-6">Immerse yourself in a world of aromatic brews and artisanal blends, where every sip tells a story. From velvety lattes to bold espressos, our carefully curated selection promises to tantalize your taste buds and elevate your coffee experience</p>
           <div className="p-4">
            <Link href="/menu">
           <Button className="uppercase" >Shop Now</Button>
           </Link>
           </div>
          </div>
          
        </div>) :<div>
          
          </div>} 
        </div>

      </div>
      
      )}
