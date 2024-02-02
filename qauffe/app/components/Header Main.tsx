
import { AlignJustify, Search , ShoppingCart } from 'lucide-react';
import Image from 'next/image';

export default function HeaderMain() {
      return (
      <div  className=" bg-white w-full h-[80px] border-gray-200 border ">
        <div className="flex flex-wrap items-center p-4 justify-between">

        
        <div className='bg-red-400 h-[40px] w-[40px] rounded-full my-auto'>
        <AlignJustify  size={30} className='justify-center items-center mx-auto mt-1'/>

        </div>
        <div className='mx-auto'>
          <Image
          src="/logo.svg"
          width={150} 
          height={150}
           alt='logo'
           />
        </div>
        <div className='flex flex-wrap gap-1'>
         <Search/>
         <ShoppingCart/>
        </div>
      </div>
      </div>
      )}