import Link from "next/link";

export default function FooterTop(){
    return(
        <div className="bg-gray-300 h-[800px] w-full">
         <div className="flex flex-col sm:flex-row">
         
         <ul className="flex flex-col p-5">
            <h1 className="font-semibold pb-4">Help</h1>
            <Link href="/">Contact Us</Link>
            <Link href="/">Faq</Link>
             <Link href="/">Delivery times and costs</Link>
             <Link href="/">Track Order</Link>
         </ul>
             
         <ul className="flex flex-col p-5">
            <h1 className="font-semibold pb-4">Company</h1>
            <Link href="/">Contact Us</Link>
            <Link href="/">Faq</Link>
             <Link href="/">Delivery times and costs</Link>
             <Link href="/">Track Order</Link>
         </ul>
            
         <ul className="flex flex-col p-5">
            <h1 className="font-semibold pb-4">Account</h1>
            <Link href="/">Contact Us</Link>
            <Link href="/">Faq</Link>
             <Link href="/">Delivery times and costs</Link>
             <Link href="/">Track Order</Link>
         </ul>
             
         <ul className="flex flex-col p-5">
            <h1 className="font-bold pb-4">Socials</h1>
            <Link href="/">Contact Us</Link>
            <Link href="/">Faq</Link>
             <Link href="/">Delivery times and costs</Link>
             <Link href="/">Track Order</Link>
         </ul>
         </div>
       </div>
    )
}
