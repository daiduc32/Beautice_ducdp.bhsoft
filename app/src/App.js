import "./App.css";
import React, { Component } from "react";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import Professional from "./Components/Professonal";
import Contact from "./Components/Contact";
class App extends Component {
  render() {
    return (
      <div>
        <div className="bg-header" />
        <div className="bg-us" />
        <Gallery></Gallery>
        <div className="home1-slider">
          <div className="home1-slider-left">
            <div className="home1-slider-title">
              Clinic &amp; beauty consultant
            </div>
            <div className="home1-slider-content">
              It is a long established fact that a reader will be by the
              readable content of a page.
            </div>
            <button className="home-slider-read-more">More Details</button>
          </div>
          <div className="home1-slider-right">
            <img src="./assets/img/img1.png" alt="" />
          </div>
        </div>
        <img
          src="./assets/img/Slide Button.png"
          alt="Slide Button"
          className="slidebtn"
        />
        <div className="text-sci" style={{ marginTop: "136px" }}>
          <div className="title-lc">Main Services</div>
          <div
            className="content-lc"
            style={{
              maxWidth: "450px",
              position: "relative",
              margin: "24px auto 24px auto",
            }}
          >
            Learn services to focus on your beauty
          </div>
          <div
            className="tsmall-rc"
            style={{
              maxWidth: "850px",
              position: "relative",
              margin: "24px auto 24px auto",
            }}
          >
            Porta rhoncus orci condimentum vitae lobortis eu dignissim non
            massa. Non parturient amet, feugiat tellus sagittis, scelerisque
            eget nulla turpis.
          </div>
        </div>
        <div className="box-section">
          <div className="box-left none">
            <img src="./assets/img/sec1.png" alt="" className="img-sec" />
            <div className="box-title">Beauty consultation</div>
            <div className="box-content">
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </div>
          </div>
          <div className="box-mid none">
            <img src="./assets/img/sec2.png" alt="" className="img-sec" />
            <div className="box-title">Skin treatments</div>
            <div className="box-content">
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </div>
          </div>
          <div className="box-right none">
            <img src="./assets/img/sec3.png" alt="" className="img-sec" />
            <div className="box-title">Beauty product</div>
            <div className="box-content">
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </div>
          </div>
        </div>
        <About></About>
        <div className="text-sci" style={{ marginTop: "69px" }}>
          <div className="title-lc">Professional Teams</div>
          <div
            className="content-lc"
            style={{
              maxWidth: "450px",
              position: "relative",
              margin: "24px auto 24px auto",
            }}
          >
            The Professional expert
          </div>
          <div
            className="tsmall-rc"
            style={{
              maxWidth: "850px",
              position: "relative",
              margin: "24px auto 24px auto",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </div>
        </div>
        <Professional></Professional>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
