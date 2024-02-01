import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#C89D7C] ">
     <header className="fixed top-0 bg-white h-[90px] w-[100%]  ">
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
      <section className="min-h-screen mt-[100px] ">
        <Image src="/coffee.jpeg" height={540}   width={800} alt="Cofee" objectFit="contain"/>
        <div className="mt-10">
          <h1 className=" text-3xl md:text-6xl text-center ">Fueling your day, one cup at a time!</h1>
          <p className="text-center mt-8">Welcome to our virtual haven for coffee aficionados! Immerse yourself in a world of aromatic brews and artisanal blends, where every sip tells a story. From velvety lattes to bold espressos, our carefully curated selection promises to tantalize your taste buds and elevate your coffee experience. Explore our enticing array of freshly roasted beans, expertly crafted beverages, and delectable treats, all designed to awaken your senses and ignite your passion for exceptional coffee. </p>
        </div>
        </section>        
    </main>
  )
}
