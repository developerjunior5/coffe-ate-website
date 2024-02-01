import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#C89D7C] ">
     <header className="bg-white h-[90px] w-[100%]  ">
      <div className="flex flex-wrap p-5  justify-between items-center">
        <div>
          <h1 className="font-bold text-3xl uppercase">Coffee-ATE</h1>
        </div>
        <div className="hidden md:flex flex-wrap gap-x-8 items-center">
         <ul className="flex flex-wrap gap-x-8  ">
           <li>Home</li>
           <li>About</li>
           <li>Menu</li>
           
         </ul>
         <Button variant="destructive">Place An Order</Button>
        </div>

      </div>

      
      </header>  
      <section className="min-h-screen">
        <Image src="/coffee.jpeg" height={540}   width={800} alt="Cofee" objectFit="contain"/>
        </section>        
    </main>
  )
}
