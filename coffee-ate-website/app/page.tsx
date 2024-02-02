import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AlignJustify } from 'lucide-react';


export default function Home()   {                                                                                                           
  return (
    <main className="min-h-screen bg-[#C89D7C] ">
     <header className="fixed top-0 bg-white  h-24 w-[100%]  ">
      <div className="flex flex-wrap p-5  justify-between items-center">
        <div className="">
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
         <div className="sm:hidden">
          <AlignJustify  size={40}/>
         </div>
      </div>
       
      
      </header>  
      <section className="min-h-screen mt-[100px] ">
        <Image src="/coffee.jpeg" height={540}   width={800} alt="Cofee" objectFit="contain" className="lg:w-[100%]"/>
        <div className="mt-10">
          <h1 className=" text-3xl md:text-6xl text-center text-red-900">Fueling your day, one cup at a time!</h1>
          <p className="text-center mt-8">Welcome to our virtual haven for coffee aficionados! Immerse yourself in a world of aromatic brews and artisanal blends, where every sip tells a story. From velvety lattes to bold espressos, our carefully curated selection promises to tantalize your taste buds and elevate your coffee experience. Explore our enticing array of freshly roasted beans, expertly crafted beverages, and delectable treats, all designed to awaken your senses and ignite your passion for exceptional coffee. </p>
        </div>
    </section>
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
    </main>
  )
}
