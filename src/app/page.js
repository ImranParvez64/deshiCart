import Category from "@/Components/PagesComponents/HomeComponents/Category";
import Deal from "@/Components/PagesComponents/HomeComponents/Deal";
import Hero from "@/Components/PagesComponents/HomeComponents/Hero";
import HomeBlogs from "@/Components/PagesComponents/HomeComponents/HomeBlogs";
import Latest from "@/Components/PagesComponents/HomeComponents/Latest";
import New from "@/Components/PagesComponents/HomeComponents/New";
import Offer from "@/Components/PagesComponents/HomeComponents/Offer";
import Services from "@/Components/PagesComponents/HomeComponents/Services";
import TotalContain from "@/Components/PagesComponents/HomeComponents/TotalContain";


export default function Home() {
  return (
  <div className="container mx-auto">
    <Hero></Hero>
    <Category></Category>
    <Deal></Deal>
    <Latest></Latest>
    <New></New>
    <Offer></Offer>
    <Services></Services>
    <TotalContain></TotalContain>
    <HomeBlogs></HomeBlogs>
  </div>
  );
}
