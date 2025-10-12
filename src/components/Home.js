import CategoryCarousel from "./Category-Carousel";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import List from "./List";
import Navbar from "./Navbar";

export default function Home(){
    return(
        <>
            <Navbar/>
            <HeroSection/>
            <InfoSection/>
            <List/>
            <CategoryCarousel/>
        </>
    )
}