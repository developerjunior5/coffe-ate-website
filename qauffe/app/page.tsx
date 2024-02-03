import Image from "next/image";
import HomePage from "./components/Home";
import Ratings from "./components/Ratings";
import NewProducts from "./components/NewProducts";
import NewsLetter from "./components/Newsletter";

export default function Home() {
  return (
    <>
    <HomePage/>
    <Ratings/>
    <NewProducts/>
    <NewsLetter/>
    </>
   )} 
