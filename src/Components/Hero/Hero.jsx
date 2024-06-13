import "./Hero.css";
import Heroimg from "../../assets/HeroImage.jpg";
import leftimg from "../../assets/LeftImage.png";
import rightimg from "../../assets/RightImage.png";

const Hero = () => {
  return (
    <div>
      <div className="box">
        <div className="hero">
          <div className="hero-content">
            <div> Food app</div>
            
            <div className="bold"> Why stay hungry when </div>
            <div className="bold"> you can order from Bella Onojie</div>
            
            <div id="liz"> Download the bella onoje's food app now on</div>
            
          </div>
          <div className="centre-area">
            <button className="btn org-btn"> Playstore</button>
            <button className="btn wht-btn"> App store</button>
          </div>
        </div>
        <div className="img-container">
          <img src={leftimg} alt=""  />
          <img src={rightimg} alt=""  />
        </div>
      </div>
      <div className="boundary"></div>
      <h1>How the app works</h1>
    </div>
  );
};

export default Hero;
