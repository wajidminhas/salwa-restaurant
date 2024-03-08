
// import CountDown from "@/restaurant-component/Countdown";
import { HeroOne } from "@/restaurant-component/HeroOne";
import HeroTwo from "@/restaurant-component/HeroTwo";
import HotOffer from "@/restaurant-component/HotOffer";
import SalwaProducts from "@/restaurant-component/SalwaProducts";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     {/* <HeroOne /> */}
     <HeroTwo />
     <SalwaProducts />
     <HotOffer />
    </div>
  );
}
