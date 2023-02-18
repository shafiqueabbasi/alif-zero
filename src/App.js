import './App.css';
import Header from '../src/components/headerSection';
import Hero from '../src/components/heroSection';
import Client from '../src/components/clientsSection';
import AboutUs from '../src/components/aboutUsSection';
import WhyUs from '../src/components/whyUsSection';
import Skill from '../src/components/skillSection'; 
import Services from '../src/components/servicesSection';
import CTA from '../src/components/ctaSection';
import Portfolio from '../src/components/portfolioSection';
import Team from '../src/components/teamSection';
import Pricing from '../src/components/pricingSection';
import Frequently from '../src/components/frequentlySection';
import Contact from '../src/components/contactSection';
import Footer from '../src/components/footer';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Client/>
      <AboutUs/>
      <WhyUs />
      <Skill />
      <Services/>
      <CTA/>
      <Portfolio />
      <Team/>
      <Pricing />
      <Frequently/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
 