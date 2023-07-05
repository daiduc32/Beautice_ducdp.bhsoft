import React, {Component} from 'react';

class Gallery extends Component {
    render() {
        return(
            <div className="gallery">
            <div className="site-header">
              <a href="./index.html">
                <div className="main-logo">
                  <div className="img-logo">
                    {" "}
                    <img src="./assets/img/Main Logo.svg" alt="logo" />{" "}
                  </div>
                  <div className="beautice2">
                    <b>Beautice</b>
                  </div>
                </div>
              </a>
              <div className="main-menu">
                <a href="./blog.html">
                  <div className="blog2">Blog</div>
                </a>
                <a href="./gallery.html">
                  <div className="gallery3">Gallery</div>
                </a>
                <a href="./services.html">
                  <div className="service">Service</div>
                </a>
                <a href="./about.html">
                  <div className="about3">About</div>
                </a>
                <div className="home3">
                  <a href="./index.html">
                    <div className="home4">Home + </div>
                  </a>
                </div>
                <div className="contact-button">
                  <div className="button-bg2" />
                  <a href="./contact.html">
                    <div className="contact3">Contact</div>
                  </a>
                </div>
              </div>
              <button className="sub-menu" onclick="subMenu()">
                <img src="./assets/img/sub-menu.png" alt="" />
              </button>
              <div className="show-menu" id="submenu">
                <li>
                  <a href="./index.html">Home</a>
                </li>
                <li>
                  <a href="./about.html">About</a>
                </li>
                <li>
                  <a href="./services.html">Services</a>
                </li>
                <li>
                  <a href="./gallery.html">Gallery</a>
                </li>
                <li>
                  <a href="./blog.html">Blog</a>
                </li>
                <li>
                  <a href="./contact.html">Contact</a>
                </li>
              </div>
            </div>
          </div>
        )
    }
}

export default Gallery;