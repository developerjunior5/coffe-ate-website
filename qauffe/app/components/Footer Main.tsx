import { ADDRCONFIG } from "dns";
import Image from "next/image";

export default function FooterMain(){
    return(
        <div className="flex flex-col bg-gray-300 h-[300px] ">
            <section className="border-gray-700 border flex-col gap-3 p-5">
               <p className ="text-xs pb-3">©2024 Qauffe. All rights reserved.</p>
               <p className="text-xs pb-3">info@Qauffe.co.za</p>
               <p className="text-xs pb-3">+27 71 345 6789</p>
               <address className="text-xs">Unit 1, 15 Dawn Road, Montague Gardens, Cape Town, 7441</address>
            </section>
            <section className="border-gray-700 border-b">
                <Image
                src="/payment.png"
                width={800} 
                height={533}
                alt="Payment"
                />
            </section>
            <section >
                <p className="p-5 text-xs">*Disclaimer: All brand names, logos, trademarks and copyrights are property of their respective owners, and are not intended to imply any endorsement or direct affiliation with Qauffe2024</p>
            </section>
        </div>
    )
}