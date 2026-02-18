import './Home.css';
import Header from '../../components/Header/Header';
import TextHome from '../../components/Text-Home/TextHome';
import ServicesHome from '../../components/Services-Home/ServicesHome';
import ForWhom from '../../components/ForWhom/ForWhom';
import HowWorks from '../../components/HowWorks/HowWorks';
import BenefitsSection from '../../components/BenefitsSection/BenefitsSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import Footer from '../../components/Footer/Footer';
function Home() {
  return (
    <>
      <Header />
      <TextHome />
      <ServicesHome/>
      <div className='for-whom-how-section'>
        <ForWhom/>
        <HowWorks/>
      </div>
      <BenefitsSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}

export default Home;
