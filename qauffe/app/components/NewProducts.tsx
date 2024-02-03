import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function  NewProducts(){
    return (
        <div className="min-h-screen bg-white w-full pt-10">
            <h1 className="text-center font-bold">Best sellers</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-4">
                <div>
                    <Image
                    src="/choco.jpeg" height={65}  width={65} alt="Lo" />
                 <h1 className="text-xs pt-3 p-2">Volcanica</h1>
                 <p className="p-2">Offer freshly roasted coffee beans for customers to purchase and enjoy at home</p>
                 <div  className="pl-2">
                 <Image  src="/R.png" width={80} height={80}  alt="ratings"/>
                 </div>
                 <span className="font-bold pl-3 pt-4">R 5000.00</span>
                 <div className="pl-2">

                 
                 <Button>Add To Cart</Button>
                 </div>
                </div>
                <div>
                    <Image
                    src="/ricoffe.jpeg" height={150}  width={150} alt="Lo" />
                 <h1 className="text-xs pt-3 p-2">Rocoffe</h1>
                 <p className="p-2">Offer freshly roasted coffee beans for customers to purchase and enjoy at home</p>
                 <div  className="pl-2">
                 <Image  src="/R.png" width={80} height={80}  alt="ratings"/>
                 </div>
                 <span className="font-bold pl-3 pt-4">R 5000.00</span>
                 <div className="pl-2">

                 
                 <Button>Add To Cart</Button>
                 </div>
                </div>
                <div>
                    <Image
                    src="/kenco.jpeg" height={150}  width={150} alt="Lo" />
                 <h1 className="text-xs pt-3 p-2">Kenco</h1>
                 <p className="p-2">Offer freshly roasted coffee beans for customers to purchase and enjoy at home</p>
                 <div  className="pl-2">
                 <Image  src="/R.png" width={80} height={80}  alt="ratings"/>
                 </div>
                 <span className="font-bold pl-3 pt-4">R 5000.00</span>
                 <div className="pl-2">

                 
                 <Button>Add To Cart</Button>
                 </div>
                </div>
                <div>
                    <Image
                    src="/chicorey.jpeg" height={150}  width={150} alt="Lo" />
                 <h1 className="text-xs pt-3 p-2">Chicory</h1>
                 <p className="p-2">Offer freshly roasted coffee beans for customers to purchase and enjoy at home</p>
                 <div  className="pl-2">
                 <Image  src="/R.png" width={80} height={80}  alt="ratings"/>
                 </div>
                 <span className="font-bold pl-3 pt-4">R 5000.00</span>
                 <div className="pl-2">

                 
                 <Button>Add To Cart</Button>
                 </div>
                </div>
                      <div className="flex justify-center ">
                        <Button variant="outline" className="">View More</Button>
                        </div>              
                </div>
            

        </div>
    )
}
