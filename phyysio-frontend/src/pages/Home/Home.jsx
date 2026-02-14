import './Home.css';
import Header from '../../components/Header/Header';
import TextHome from '../../components/Text-Home/TextHome';
import ServicesHome from '../../components/Services-Home/ServicesHome';
import ForWhom from '../../components/ForWhom/ForWhom';
function Home() {
  return (
    <>
      <Header />
      <TextHome />
      <ServicesHome/>
      <ForWhom/>
    </>
  );
}

export default Home;
