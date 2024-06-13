import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Section from "./Components/Section/Section";
import Footer from './Components/Footer/Footer';

import Sec1img from "./assets/Sec1img.png";
import Sec2img from "./assets/Sec2img.png";
import Sec3img from "./assets/Sec3img.png";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section
        image={Sec1img}
        s1="Create an account"
        s2="Create/login to an existing"
        
        s3="account to get started"
        s4="An account is created with your email
       "
        s5="and a desired password"
        imageOnLeft={false}
      />
      <Section
        image={Sec2img}
        s1="Explore varieties"
        s2="Shop for your favorites"
        
        s3="meal as e dey hot."
        s4="Shop for your favorite meals or drinks"
        
        s5="and enjoy while doing it."
        imageOnLeft={true}
      />
      <Section
        image={Sec3img}
        s1="Checkout"
        s2="When you done check out"
        
        s3="and get it delivered."
        s4="When you done check out and get it 
        "
        s5="delivered with ease."
        imageOnLeft={false}
      />
      <Footer/>
    </div>
  );
};

export default App;
