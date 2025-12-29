import Banner from "../componets/BannerFolder/Banner";
import Client from "../componets/Clientfolder/Client";
import About from "../componets/Aboutfoldersection3/About";
import Access from "../componets/AccessFolder/Access";
import Features from "../componets/FeaturesFolder/Feature";
import Cta from "../componets/CtaImageSection/Cta";
import Blog from "../componets/BlogImageScevtion/Blog";





const Home = () =>{
    return(
        <>
        {/* This is home where components will go */}
        <Banner/>
        <Client/>
        <About/>
        <Access/>
        <Features/>
       <Cta/>
       <Blog/>
        <h1>Hello</h1>
        </>
    )
}
export default Home;