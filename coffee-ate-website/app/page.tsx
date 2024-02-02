import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AlignJustify } from 'lucide-react';


export default function Home() {
const productsData = [
    {
        img: "/jacket-1.jpg",
            title: "Jacket",
                desc: "MEN Yarn Fleece Full-Zip Jacket",
                    rating: 4,
                        price: "45.00",
                          },
                            {
                                img: "/skirt-1.jpg",
                                    title: "Skirt",
                                        desc: "Black Floral Wrap Midi Skirt",
                                            rating: 5,
                                                price: "55.00",
                                                  },
                                                    {
                                                        img: "/party-wear-1.jpg",
                                                            title: "Party Wear",
                                                                desc: "Women's Party Wear Shoes",
                                                                    rating: 3,
                                                                        price: "25.00",
                                                                          },
                                                                            {
                                                                                img: "/shirt-1.jpg",
                                                                                    title: "Shirt",
                                                                                        desc: "Pure Garment Dyed Cotton Shirt",
                                                                                            rating: 4,
                                                                                                price: "45.00",
                                                                                                  },
                                                                                                    {
                                                                                                        img: "/sports-1.jpg",
                                                                                                            title: "Sports",
                                                                                                                desc: "Trekking & Running Shoes - Black",
                                                                                                                    rating: 3,
                                                                                                                        price: "58.00",
                                                                                                                          },
                                                                                                                            {
                                                                                                                                img: "/watch-1.jpg",
                                                                                                                                    title: "Watches",
                                                                                                                                        desc: "Smart Watches Vital Plus",
                                                                                                                                            rating: 4,
                                                                                                                                                price: "100.00",
                                                                                                                                                  },
                                                                                                                                                    {
                                                                                                                                                        img: "/watch-2.jpg",
                                                                                                                                                            title: "Watches",
                                                                                                                                                                desc: "Pocket Watch Leather Pouch",
                                                                                                                                                                    rating: 4,
                                                                                                                                                                        price: "120.00",
                                                                                                                                                                          },
                                                                                                                                                                          ];
                                                                                                                                                                            
                                                                                                                                                                                img: "/jacket-1.jpg",
                                                                                                                                                                                    title: "Jacket",
                                                                                                                                                                                        desc: "MEN Yarn Fleece Full-Zip Jacket",
                                                                                                                                                                                            rating: 4,
                                                                                                                                                                                                price: "45.00",
                                                                                                                                                                                                  },
                                                                                                                                                                                                    {
                                                                                                                                                                                                        img: "/skirt-1.jpg",
                                                                                                                                                                                                        
                                                                                                                                                                                                                desc: "Black Floral Wrap Midi Skirt",
                                                                                                                                                                                                                
                                                                                                                                                                                                                ,
                                                                                                                                                                                                                          },
                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                img: "/party-wear-1.jpg",
                                                                                                                                                                                                                                    title: "Party Wear",
                                                                                                                                                                                                                                        desc: "Women's Party Wear Shoes",
                                                                                                                                                                                                                                            rating: 3,
                                                                                                                                                                                                                                                price: "25.00",
                                                                                                                                                                                                                                                  },
                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                        img: "/shirt-1.jpg",
                                                                                                                                                                                                                                                            title: "Shirt",
                                                                                                                                                                                                                                                                desc: "Pure Garment Dyed Cotton Shirt",
                                                                                                                                                                                                                                                                    rating: 4,
                                                                                                                                                                                                                                                                        price: "45.00",
                                                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                                img: "/sports-1.jpg",
                                                                                                                                                                                                                                                                                    title: "Sports",
                                                                                                                                                                                                                                                                                        desc: "Trekking & Running Shoes - Black",
                                                                                                                                                                                                                                                                                            rating: 3,
                                                                                                                                                                                                                                                                                                price: "58.00",
                                                                                                                                                                                                                                                                                                  },
                                                                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                                                                        img: "/watch-1.jpg",
                                                                                                                                                                                                                                                                                                            title: "Watches",
                                                                                                                                                                                                                                                                                                                desc: "Smart Watches Vital Plus",
                                                                                                                                                                                                                                                                                                                    rating: 4,
                                                                                                                                                                                                                                                                                                                        price: "100.00",
                                                                                                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                                                                                img: "/watch-2.jpg",
                                                                                                                                                                                                                                                                                                                                    title: "Watches",
                                                                                                                                                                                                                                                                                                                                        desc: "Pocket Watch Leather Pouch",
                                                                                                                                                                                                                                                                                                                                            rating: 4,
                                                                                                                                                                                                                                                                                                                                                price: "120.00",
                                                                                                                                                                                                                                                                                                                                                  },
                                                                                              

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
