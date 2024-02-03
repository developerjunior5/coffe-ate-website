"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from 'lucide-react';

import { Input } from "@/components/ui/input";
import Image from "next/image";


export default function NewsLetter(){

    
const [showOriginal, setShowOriginal] = useState(true) ;

  const handleReplace = () => {
      setShowOriginal(false);
        }
    
      
       return(
      <>
        {showOriginal ? (
        <div className="bg-yellow-500 h-[400px]  sm:h-[300px]">
:       <h1 className="text-center pt-8 text-white text-2xl uppercase ">Subscribe to our Newsletter</h1>
         <p className="text-3xl text-center pt-5" id="myButton">Get our Biggest Deals straight into your Inbox</p>
         <p className="text-center text-gray-800 pt-6">We value your privacy. You can unsubscribe anytime. No details will be shared with external parties.</p>
         <form className="flex justify-center p-5 gap-1">
            <Input name="email" placeholder="email"/>
            <Button type="submit" onClick={handleReplace} id="replaceButton">Submit</Button>

         </form>
        </div>)
         :(<div className="bg-white h-[400px] w-full sm:h-[300px] justify-center pt-[100px] ease-in-500 ">
         <h1 className="text-center text-xl items-center pt-10 justify-center">Thank You </h1> 
         <p className="text-center">Subscribed</p>
         <CheckCircle2 color="green" size={100} className="pl-10"/>
         </div>) } 
         </>
    ) 
}