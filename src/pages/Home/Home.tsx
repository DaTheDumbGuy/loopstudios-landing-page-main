import Creations from "../../components/Creations/Creations";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Interactive from "../../components/Interactive/Interactive";
import Navigation from "../../components/Navigation/Navigation";

export default function Home() {
  return (
    <>
      <Navigation/>
      <main>
        <Hero/>
        <Interactive/>
        <Creations/>
      </main>
      <Footer/>
    </>
  )
}
    