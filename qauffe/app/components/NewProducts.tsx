import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function  NewProducts(){
    return (
        <div className="min-h-screen bg-white w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                <div>
                    <Image
                    src="/coffeemachine.jpeg" height={150}  width={150} alt="Lo" />
                 <h1 className="text-xs pt-3 p-2">Coffee MECHINE</h1>
                 <p className="p-2">Offer freshly roasted coffee beans for customers to purchase and enjoy at home</p>
                 <div  className="pl-2">
                 <Image  src="/R.png" width={80} height={80}  alt="ratings"/>
                 </div>
                 <span className="font-bold pl-3 pt-4">R 5000.00</span>
                 <div className="pl-2">

                 
                 <Button>Add To Cart</Button>
                 </div>
                </div>
            </div>

        </div>
    )
}