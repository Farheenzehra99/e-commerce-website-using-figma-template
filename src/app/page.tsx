
import FreshSales from "./components/FreshSales";
import Category from "./components/Category";
import Products from "./components/Products";
import Music from "./components/Music";
import Explore from "./components/Explore";
import Futured from "./components/Featured";
import Freedelvry from "./components/Free";
import Hero from "./components/Hero";


export default function Home() {
    return(
      <div >
        
         <Hero/>
         <FreshSales/>
         <Category/>
         <Products/>
         <Music/>
         <Explore/>
         <Futured/>
         <Freedelvry/>
      </div>
    )
}