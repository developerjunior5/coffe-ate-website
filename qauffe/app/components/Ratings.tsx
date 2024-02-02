import { Button } from '@/components/ui/button';
import { Star, StarHalfIcon, StarIcon } from 'lucide-react';

export default function Ratings(){
    return(
        <div className="bg-gray-500 h-[400px] justify-center items-center">
            <div className="bg-gray-100 h-[300px] justify-center items-center">
                <h1 className="text-center pt-10">Our Customer Satisfactory Ratings:</h1>
                <h1 className='text-center text-2xl pt-5'>Always Amazing Service</h1>
                <div className="flex flex-wrap gap-3 justify-center">
                 <StarIcon size={30} color="gold" />
                  <StarIcon size={30} color='gold'/>
                  <StarIcon size={30} color='gold'/>
                  <StarIcon size={30} color='gold'/>
                  <StarHalfIcon size={30} color='gold'/>
                </div>
                <div  className='pt-10 pl-[100px]'>
                    <Button variant="outline" >View Testimonials</Button>
                </div>
            </div>Chghcjgc

        </div>
    )
}