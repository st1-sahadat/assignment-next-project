import Image from "next/image";
import Banner from "./components/Shared/Banner";
import HomePageCard from "./components/HomePageCard";

export default function Home() {
  return (
    <div className="p-4 md:p-8 mx-auto max-w-full">
    <Banner />
    <HomePageCard />
    </div>
  );
}
