import Link from "next/link";

export default function FooterTop(){
    return(
        <div className="bg-gray-300 h-[400px] w-full">
         <div className="flex flex-col">
         <h1 className="p-5 font-semibold">Help</h1>
         <ul className="flex flex-col p-5">
            <Link href="/">Contact Us</Link>
            <Link href="/">Faq</Link>
         </ul>
         </div>
       </div>
    )
}