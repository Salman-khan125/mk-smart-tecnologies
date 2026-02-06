import Hero from "../../components/hero/Hero";
import AboutSection from "../../components/aboutsection/AboutSection";
import OurServices from "../../components/services/OurServices";
import CeoMessage from "../../components/ceomessage/CeoMessage";
import MyTeam from "../../components/myteam/myTeam";
import ClientsSay from "../../components/clientssay/ClientsSay";
import Background from "../../components/background/Background";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <OurServices />
      <CeoMessage />
      <MyTeam />
      <ClientsSay />
      <Background />
    </>
  );
};

export default Home;
