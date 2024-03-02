
import { HeroOne } from "@/restaurant-component/HeroOne";
import HeroTwo from "@/restaurant-component/HeroTwo";
import SalwaProducts from "@/restaurant-component/SalwaProducts";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     {/* <HeroOne /> */}
     <HeroTwo />
     <SalwaProducts />
    </div>
  );
}
