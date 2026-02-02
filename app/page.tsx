  
  import TopBar from "./Components/Header/TopHeader";
  import MainHeader from "./Components/Header/Header";
  import Homepage from "./Components/Homepage";
import AboutSection from "./Components/AboutSection";
import ServicesSection from "./Components/ServicesSection";
import WhyChooseUs from "./Components/WhyChooseUs";
import Footer from "./Components/Footer"
  export default function Home() {
  return (
   <>
   <TopBar />
   <MainHeader  />
   <Homepage />
   <AboutSection/>
   <ServicesSection />
   <WhyChooseUs/>
   <Footer/>
   </>
  );
}
