import './Home.css';
import Header from '../../components/Header/Header';
import TextHome from '../../components/Text-Home/TextHome';
import ServicesHome from '../../components/Services-Home/ServicesHome';
import ForWhom from '../../components/ForWhom/ForWhom';
import HowWorks from '../../components/HowWorks/HowWorks';
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
    </>
  );
}

export default Home;
