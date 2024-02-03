import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsLetter(){
    return(
        <div className="bg-yellow-500 h-[400px]  sm:h-[300px]">
:       <h1 className="text-center pt-8 text-white text-2xl uppercase ">Subscribe to our Newsletter</h1>
         <p className="text-3xl text-center pt-5">Get our Biggest Deals straight into your Inbox</p>
         <p className="text-center text-gray-800 pt-6">We value your privacy. You can unsubscribe anytime. No details will be shared with external parties.</p>
         <div className="flex justify-center p-5 gap-1">
            <Input name="email" placeholder="email"/>
            <Button>Submit</Button>
         </div>
        </div>
    )
}