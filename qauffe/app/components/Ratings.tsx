import { Star, StarIcon } from 'lucide-react';

export default function Ratings(){
    return(
        <div className="bg-gray-500 h-[400px] justify-center items-center">
            <div className="bg-gray-100 h-[300px] justify-center items-center">
                <h1 className="text-center">Our Customer Satisfactory Ratings</h1>
                <div className="flex flex-wrap gap-3">
                 <StarIcon/>

                </div>
            </div>

        </div>
    )
}