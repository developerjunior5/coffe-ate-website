"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AlignJustify, Glasses, Search , ShoppingCart, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState} from 'react';


export default function HeaderMain() {
  
      const [isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => {
            setIsOpen(!isOpen);
              };
      
      const [isCartOpen, setIsCartOpen] = useState(false);
       const toggleCart = () => {
        setIsCartOpen(!isCartOpen); 
       }

       const [isSearchOpen,setIsSearchOpen ] = useState(false);
       const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen)
       }
  
      return (
      <div  className=" bg-white w-full h-[80px] border-gray-200 border ">
        <div className="flex flex-wrap items-center p-4 justify-between">

        
        <div className='bg-gray-800 h-[40px] w-[40px] rounded-full my-auto'>
          {isOpen ? (<X onClick={toggleMenu} size={30} className='justify-center items-center mx-auto mt-1' color='white'/>) :
        (<AlignJustify  onClick={toggleMenu} size={30} className='justify-center items-center mx-auto mt-1' color='white'/>) 
          }
        </div>
        
        {isOpen && (
        <nav className='top-[100px] left-0 w-[100%] h-screen absolute bg-white'>
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </nav>
      )}
        <div className='mx-auto'>
          <Link href="/">
          <Image
          src="/logo.svg"
          width={150} 
          height={150}
           alt='logo'
           />
           </Link>
        </div>
        <div className='flex flex-wrap gap-1'>
         <Search onClick={toggleSearch} />
           {isSearchOpen && (
            <div className='bg-white rounded-md w-full h-[40px] absolute top-[100px]  left-0 items-center flex flex-wrap '>
              <Input name="search for any product" placeholder='search for any product' className='' />
              <Search color='white' className='bg-gray-800 py-1 px-2 rounded-md absolute left-[330px] sm:left-[750px] '/>
            </div>
           )}



         <ShoppingCart onClick={toggleCart} />
         {isCartOpen && (
          <div className='bg-white absolute shadow-md rounded-md w-[220px] h-[140px] right-0 top-[100px] justify-center '>
            <h1 className='text-xs pl-[170px] ' onClick={toggleCart}>Close</h1>
            <p className='text-xs text-center items-center justify-center pt-10'>There are No items In The Cart</p>
            <div className='pl-8 pt-5'>
              <Button variant="destructive">Continue Shopping</Button>
            </div>
            </div>
         )}
        </div>
      </div>
      </div>
      )}